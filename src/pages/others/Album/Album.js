import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { playList } from '~/components/Api/Service';
import Container from '~/components/container/Container';
import ItemArtists from '~/components/ItemArtists/ItemArtists';
import ItemPlayList from '~/components/ItemPlayList/ItemPlayList';
import ItemVideo from '~/components/ItemVideo/ItemVideo';
import style from './Album.module.scss';
import LeftAlbum from './LeftAlbum';
import RightAlbum from './RightAlbum';
const cx = classNames.bind(style);

function Album() {
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
    return (
        <div className={cx('wrapper')}>
            {data?.song && (
                <>
                    <div className={cx('top')}>
                        <LeftAlbum data={data} />
                        <RightAlbum data={data} />
                    </div>
                    {data?.playlists && (
                        <Container className={cx('playList')} title="Playlist/Album">
                            {data?.playlists?.map(
                                (item, index) => index < 4 && <ItemPlayList key={index} data={item} />,
                            )}
                        </Container>
                    )}
                    {/* ---------------------- */}
                    {data?.videos && (
                        <Container className={cx('mv')} title="MV">
                            {data?.videos?.map((item, index) => index < 3 && <ItemVideo key={index} data={item} />)}
                        </Container>
                    )}
                    {/* ---------------------- */}

                    {data?.artists && (
                        <Container className={cx('artists')} title="Nghệ Sĩ/OA">
                            {data?.artists?.map((item, index) => index < 4 && <ItemArtists key={index} data={item} />)}
                        </Container>
                    )}
                </>
            )}
        </div>
    );
}

export default Album;
