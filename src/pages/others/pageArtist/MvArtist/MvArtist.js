import { useSelector } from 'react-redux';
import Container from '~/components/container/container';
import ItemVideo from '~/components/ItemVideo/ItemVideo';
import NoContent from '~/components/noContent/NoConTent';

function MvArtist() {
    const data = useSelector((state) => state.dataArtist.artist_MV);
    return data.items ? (
        <Container title="">
            {data?.items.map((item, index) => (
                <ItemVideo key={index} data={item} timeLoad={0} />
            ))}
        </Container>
    ) : (
        <NoContent />
    );
}

export default MvArtist;
