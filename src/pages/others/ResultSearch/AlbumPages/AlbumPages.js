import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Container from '~/components/container/container';
import ItemAlbum from '~/components/ItemAlbum/ItemAlbum';
import NoContent from '../NoConTent';

function AlbumPages() {
    const data = useSelector((state) => state.counter.dataSearch);
    const value = useSelector((state) => state.counter.value);
    return (
        <>
            {data.playlists ? (
                <Container title="Playlist/Album" onClick={() => Navigate(`/tim-kiem/playlist/${value}`)}>
                    {data.playlists.map((item, index) => (
                        <ItemAlbum key={index} data={item} />
                    ))}
                </Container>
            ) : (
                <NoContent />
            )}
        </>
    );
}

export default AlbumPages;
