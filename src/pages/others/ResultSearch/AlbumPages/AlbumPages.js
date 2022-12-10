import { useSelector } from 'react-redux';

import { Navigate } from 'react-router-dom';
import Container from '~/components/container/Container';
import ItemPlayList from '~/components/ItemPlayList/ItemPlayList';
import NoContent from '~/components/noContent/NoConTent';

function AlbumPages() {
    const data = useSelector((state) => state.dataArtist.dataSearch);
    const value = useSelector((state) => state.counter.value);
    return (
        <>
            {data.playlists ? (
                <Container title="Playlist/Album" onClick={() => Navigate(`/tim-kiem/playlist/${value}`)}>
                    {data?.playlists.map((item, index) => (
                        <ItemPlayList key={index} data={item} timeLoad={0} />
                    ))}
                </Container>
            ) : (
                <NoContent />
            )}
        </>
    );
}

export default AlbumPages;
