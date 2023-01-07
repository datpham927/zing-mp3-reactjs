/* eslint-disable react-hooks/exhaustive-deps */
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { playList } from '~/components/Api/Service';
import ContainerArtists from '~/components/container/ContainerArtists';
import ContainerPlaylist from '~/components/container/ContainerPlayList';
import ContainerVideos from '~/components/container/ContainerVideos';
import style from './PageAlbum.module.scss';
import LeftAlbum from './LeftAlbum/LeftAlbum';
import RightAlbum from './RightAlbum/RightAlbum';
import Loading from '~/components/load/Loading/Loading';
import { useSelector } from 'react-redux';
const cx = classNames.bind(style);

function PageAlbum() {
    const [data, setData] = useState([]);
    const value = useParams();
    const arr = value.id.split('.');
    const navigate = useNavigate();
    const { booleanKindPlaylist } = useSelector((state) => state.action);
    const { privatePlayLists } = useSelector((state) => state.Favorite);
    const id = arr[0];
    useEffect(() => {
        if (booleanKindPlaylist) {
            const fetchApi = async () => {
                const data = await playList(id);
                setData(data || []);
                if (!data) {
                    navigate('/');
                }
            };
            fetchApi();
        } else {
            const listId = privatePlayLists.map((e) => e.encodeId);
            const index = listId.indexOf(id);
            setData(privatePlayLists[index] || []);
        }
    }, [id]);
    return data.length !== 0 ? (
        <div className={cx('wrapper')}>
            <div className={cx('top')}>
                <LeftAlbum data={data} />
                <RightAlbum data={data} />
            </div>
            {data?.playlists && <ContainerPlaylist data={data?.playlists} title="Playlist/Album" />}
            {/* ---------------------- */}
            {data?.videos && <ContainerVideos data={data?.videos} title="MV" />}
            {/* ---------------------- */}
            {data?.artists && <ContainerArtists data={data?.artists} title="Nghệ Sĩ/OA" />}
        </div>
    ) : (
        <Loading />
    );
}

export default PageAlbum;
