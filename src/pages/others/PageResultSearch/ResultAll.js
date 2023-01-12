/* eslint-disable react-hooks/exhaustive-deps */
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import { useLayoutEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Container from '~/components/container/Container';
import ItemPlayList from '~/components/item/ItemPlayList/ItemPlayList';
import * as searchApi from '~/components/Api/Service';
import NoContent from '~/components/noContent/NoConTent';
import { setDataSearch } from '~/redux/dataArtist';
import { useParams } from 'react-router-dom';
import ContainerVideos from '~/components/container/ContainerVideos';
import ContainerArtists from '~/components/container/ContainerArtists';
import ContainerPlaylist from '~/components/container/ContainerPlayList';
import ContainerSongs from '~/components/container/ContainerSongs';
import TopPagesAll from './TopPagesAll/TopPagesAll';

import style from './ResultSearch.module.scss';
import Loading from '~/components/load/Loading/Loading';

const cx = classNames.bind(style);

function ResultAll() {
    const dispatch = useDispatch();
    const [check, setCheck] = useState(false);
    const id = useParams();
    const value = id.id;
    useLayoutEffect(() => {
        dispatch(setDataSearch([]));
        const fetchApi = async () => {
            const data = await searchApi.search(value);
            dispatch(setDataSearch(data) || []);
            setCheck(true);
        };
        fetchApi();
    }, [value]);
    const data = useSelector((state) => state.dataArtist.dataSearch);

    return data.songs ? (
        <div>
            <Container title="Nổi Bật" className={cx('spotlight')} scroll>
                {data.artists && <TopPagesAll type="artist" data={data?.artists[0]} />}
                {data.playlists && <TopPagesAll type="playlist" data={data?.playlists[0]} />}
                {data.songs && <TopPagesAll data={data?.songs[0]} type="song" />}
            </Container>
            {data.playlists && data.top && (
                <Container spotlight data={data} scroll>
                    {data?.playlists?.map(
                        (item, index) => index >= 2 && index < 6 && <ItemPlayList key={uuidv4()} data={item} />,
                    )}
                </Container>
            )}
            <ContainerSongs title={'Bài Hát'} scroll data={data?.songs} all link={`/tim-kiem/bai-hat/${value}`} />
            <ContainerPlaylist
                data={data?.playlists}
                title={'Playlist/Album'}
                all
                scroll
                link={`/tim-kiem/playlist/${value}`}
            />
            <ContainerVideos scroll data={data?.videos} title={'MV'} all link={`/tim-kiem/video/${value}`} />
            <ContainerArtists
                scroll
                data={data?.artists}
                title={'Nghệ Sĩ/OA'}
                all
                link={`/tim-kiem/artist/ ${value}`}
            />
        </div>
    ) : check ? (
        <NoContent />
    ) : (
        <Loading />
    );
}

export default ResultAll;
