import { useSelector } from 'react-redux';
import Container from '~/components/container/container';
import ItemPlayList from '~/components/ItemPlayList/ItemPlayList';
import NoContent from '~/components/noContent/NoConTent';

function AlbumArtist() {
    const data = useSelector((state) => state.dataArtist.artist_Album);
    return data.items ? (
        <Container title={data.title}>
            {data?.items.map((item, index) => (
                <ItemPlayList key={index} data={item} timeLoad={0} />
            ))}
        </Container>
    ) : (
        <NoContent />
    );
}

export default AlbumArtist;
