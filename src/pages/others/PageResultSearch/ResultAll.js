/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Container from '~/components/container/Container';
import ItemPlayList from '~/components/item/ItemPlayList/ItemPlayList';
import * as searchApi from '~/components/Api/Service';
import NoContent from '~/components/noContent/NoConTent';
import { zingArtist } from '~/redux/dataArtist';
import { useParams } from 'react-router-dom';
import ContainerVideos from '~/components/container/ContainerVideos';
import ContainerArtists from '~/components/container/ContainerArtists';
import ContainerPlaylist from '~/components/container/ContainerPlayList';
import ContainerSongs from '~/components/container/ContainerSongs';
import TopPagesAll from './TopPagesAll/TopPagesAll';

function ResultAll() {
    const dispatch = useDispatch();
    const id = useParams();
    const value = id.id;
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
        <div>
            <Container title="Nổi Bật">
                {data?.artists && <TopPagesAll type="artist" data={data?.artists[0]} />}
                {data?.playlists && <TopPagesAll type="playlist" data={data?.playlists[0]} />}
                {data?.songs && <TopPagesAll key={1} data={data?.songs[0]} type="song" />}
            </Container>
            {data?.playlists && (
                <Container spotlight data={data}>
                    {data?.playlists?.map(
                        (item, index) => index >= 2 && index < 6 && <ItemPlayList key={index} data={item} />,
                    )}
                </Container>
            )}
            <ContainerSongs title={'Bài Hát'} data={data?.songs} all link={`/tim-kiem/bai-hat/${value}`} />
            <ContainerPlaylist
                data={data?.playlists}
                title={'Playlist/Album'}
                all
                link={`/tim-kiem/playlist/${value}`}
            />
            <ContainerVideos data={data?.videos} title={'MV'} all link={`/tim-kiem/video/${value}`} />
            <ContainerArtists data={data?.artists} title={'Nghệ Sĩ/OA'} all link={`/tim-kiem/artist/ ${value}`} />
        </div>
    );
}

export default ResultAll;
