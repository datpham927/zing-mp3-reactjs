/* eslint-disable react-hooks/exhaustive-deps */
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import Container from '~/components/container/container';
import ItemArtists from '~/components/ItemArtists/ItemArtists';
import ItemPlayList from '~/components/ItemPlayList/ItemPlayList';
import ItemSong from '~/components/ItemSong/ItemSong';
import ItemVideo from '~/components/ItemVideo/ItemVideo';
import TopPagesAll from './TopPagesAll/TopPagesAll';
import styles from './PagesAll.module.scss';
import LoadImg from '~/components/loadImg/LoadImg';
import * as searchApi from '~/components/Api/Service';
import NoContent from '~/components/noContent/NoConTent';
import { zingArtist } from '~/redux/dataArtist';
const cx = classNames.bind(styles);
function PagesAll() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const value = useSelector((state) => state.counter.value);
    useEffect(() => {
        const fetchApi = async () => {
            const data = await searchApi.search(value);
            dispatch(zingArtist.actions.setDataSearch(data));
        };
        fetchApi();
    }, [value]);
    const data = useSelector((state) => state.dataArtist.dataSearch);
    if (!data.songs) return <NoContent />;
    return (
        <div className={cx('page-search')}>
            {data.songs && (
                <Container title="Nổi Bật">
                    {data.artists && <TopPagesAll type="artist" data={data?.artists[0]} />}
                    {data.playlists && <TopPagesAll type="playlist" data={data?.playlists[0]} />}
                    {data.songs && <TopPagesAll key={1} data={data?.songs[0]} type="song" />}
                </Container>
            )}
            {/* ---------------------- */}
            {data.top && data.top.objectType === 'artist' && (
                <div className={cx('playList')}>
                    <div className={cx('header')}>
                        <div className={cx('image')}>
                            <LoadImg timeLoad={2000}>
                                <img src={data.top.thumbnail} alt="" />
                            </LoadImg>
                        </div>
                        <div className={cx('content')}>
                            <p className={cx('subtitle')}>PLAYLIST NỔI BẬT</p>
                            <h1 className={cx('title')}>
                                <Link to={`/nghesi/${data.top.alias}`}>{data.top.name}</Link>
                            </h1>
                        </div>
                    </div>
                    <Container className={cx('body')}>
                        {data.playlists.map(
                            (item, index) => index >= 4 && index < 8 && <ItemPlayList key={index} data={item} />,
                        )}
                    </Container>
                </div>
            )}
            {/* ---------------------- */}
            {data.songs && (
                <Container
                    className={cx('songs')}
                    title="Bài Hát"
                    all
                    onClick={() => navigate(`/tim-kiem/bai-hat/${value}`)}
                >
                    {data.songs.map((item, index) => index < 6 && <ItemSong key={index} data={item} />)}
                </Container>
            )}
            {/* ---------------------- */}
            {data.playlists && (
                <Container
                    className={cx('playList')}
                    title="Playlist/Album"
                    all
                    onClick={() => navigate(`/tim-kiem/playlist/${value}`)}
                >
                    {data.playlists.map((item, index) => index < 4 && <ItemPlayList key={index} data={item} />)}
                </Container>
            )}
            {/* ---------------------- */}
            {data.videos && (
                <Container className={cx('mv')} title="MV" all onClick={() => navigate(`/tim-kiem/video/${value}`)}>
                    {data.videos.map((item, index) => index < 3 && <ItemVideo key={index} data={item} />)}
                </Container>
            )}
            {/* ---------------------- */}

            {data.artists && (
                <Container
                    className={cx('artists')}
                    title="Nghệ Sĩ/OA"
                    all
                    onClick={() => navigate(`/tim-kiem/artist/ ${value}`)}
                >
                    {data.artists.map((item, index) => index < 4 && <ItemArtists key={index} data={item} />)}
                </Container>
            )}
        </div>
    );
}

export default PagesAll;
