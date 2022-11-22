import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Container from '~/components/container/container';
import ItemArtists from '~/components/ItemArtists/ItemArtists';
import ItemPlayList from '~/components/ItemAlbum/ItemAlbum';
import ItemSong from '~/components/ItemSong/ItemSong';
import ItemVideo from '~/components/ItemVideo/ItemVideo';
import ItemPagesAll from './ItemPagesAll/ItemPagesAll';
import styles from './PagesAll.module.scss';
import NoContent from '../NoConTent';

const cx = classNames.bind(styles);
function PagesAll() {
    const navigate = useNavigate();
    const data = useSelector((state) => state.counter.dataSearch);
    const value = useSelector((state) => state.counter.value);
    if (!data.songs) return <NoContent />;
    return (
        <div className={cx('page-search')}>
            {data && (
                <Container title="Nổi Bật">
                    {data.artists && <ItemPagesAll type="artist" data={data.artists[0]} />}
                    {data.playlists && <ItemPagesAll type="playlist" data={data.playlists[0]} />}
                    {data.songs && <ItemPagesAll key={1} data={data.songs[0]} type="song" />}
                </Container>
            )}
            {/* ---------------------- */}
            {data.top && data.top.objectType === 'artist' && (
                <div className={cx('playList')}>
                    <div className={cx('header')}>
                        <div className={cx('image')}>
                            <img src={data.top.thumbnail} alt="" />
                        </div>
                        <div className={cx('content')}>
                            <p className={cx('subtitle')}>PLAYLIST NỔI BẬT</p>
                            <h1 className={cx('title')}>
                                <Link to={`/${data.top.name}`}>{data.top.name}</Link>
                            </h1>
                        </div>
                    </div>
                    <div className={cx('body')}>
                        <Container>
                            {data.playlists.map(
                                (item, index) => index >= 4 && index < 8 && <ItemPlayList key={index} data={item} />,
                            )}
                        </Container>
                    </div>
                </div>
            )}
            {/* ---------------------- */}
            {data.songs && (
                <div className={cx('songs')}>
                    <Container title="Bài Hát" all onClick={() => navigate(`/tim-kiem/bai-hat/${value}`)}>
                        {data.songs.map((item, index) => index < 6 && <ItemSong key={item.encodeId} data={item} />)}
                    </Container>
                </div>
            )}
            {/* ---------------------- */}
            {data.playlists && (
                <div className={cx('playList')}>
                    <Container title="Playlist/Album" all onClick={() => navigate(`/tim-kiem/playlist/${value}`)}>
                        {data.playlists.map((item, index) => index < 4 && <ItemPlayList key={index} data={item} />)}
                    </Container>
                </div>
            )}
            {/* ---------------------- */}
            {data.videos && (
                <div className={cx('mv')}>
                    <Container title="MV" all onClick={() => navigate(`/tim-kiem/video/${value}`)}>
                        {data.videos.map((item, index) => index < 3 && <ItemVideo key={index} data={item} />)}
                    </Container>
                </div>
            )}
            {/* ---------------------- */}

            {data.artists && (
                <div className={cx('artists')}>
                    <Container title="Nghệ Sĩ/OA" all onClick={() => navigate(`/tim-kiem/artist/ ${value}`)}>
                        {data.artists.map((item, index) => index < 4 && <ItemArtists key={index} data={item} />)}
                    </Container>
                </div>
            )}
        </div>
    );
}

export default PagesAll;
