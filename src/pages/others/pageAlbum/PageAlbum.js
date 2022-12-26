import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { playList } from '~/components/Api/Service';
import ContainerArtists from '~/components/container/ContainerArtists';
import ContainerPlaylist from '~/components/container/ContainerPlayList';
import ContainerVideos from '~/components/container/ContainerVideos';
import style from './PageAlbum.module.scss';
import LeftAlbum from './LeftAlbum';
import RightAlbum from './RightAlbum';
import Loading from '~/components/Loading/Loading';
const cx = classNames.bind(style);

function PageAlbum() {
    const [data, setData] = useState([]);
    const value = useParams();
    const arr = value.id.split('.');
    const id = arr[0];
    useEffect(() => {
        const fetchApi = async () => {
            const data = await playList(id);
            setData(data || []);
        };
        fetchApi();
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
