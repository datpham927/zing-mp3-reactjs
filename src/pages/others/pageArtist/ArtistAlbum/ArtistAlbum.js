import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Container from '~/components/container/Container';
import ItemPlayList from '~/components/item/ItemPlayList/ItemPlayList';
import NoContent from '~/components/noContent/NoConTent';

function ArtistAlbum() {
    const data = useSelector((state) => state.dataArtist.artistAlbum);
    return data.items ? (
        <Container title={data.title}>
            {data?.items.map((item) => (
                <ItemPlayList key={uuidv4()} data={item} />
            ))}
        </Container>
    ) : (
        <NoContent />
    );
}

export default ArtistAlbum;
