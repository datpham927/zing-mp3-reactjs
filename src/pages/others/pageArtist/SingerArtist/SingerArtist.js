import { useSelector } from 'react-redux';
import Container from '~/components/container/container';
import ItemAlbum from '~/components/ItemAlbum/ItemAlbum';
import NoContent from '~/components/noContent/NoConTent';

function SingerArtist() {
    const data = useSelector((state) => state.data.artist_Singer);
    return data.items ? (
        <Container title={data.title}>
            {data?.items.map((item, index) => (
                <ItemAlbum key={index} data={item} timeLoad={0} />
            ))}
        </Container>
    ) : (
        <NoContent />
    );
}

export default SingerArtist;
