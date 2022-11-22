import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Container from '~/components/container/container';
import ItemArtists from '~/components/ItemArtists/ItemArtists';
import NoContent from '../NoConTent';
function Artist() {
    const data = useSelector((state) => state.counter.dataSearch);
    const value = useSelector((state) => state.counter.value);
    return data.artists ? (
        <Container title="Nghệ Sĩ/OA" all onClick={() => Navigate(`/tim-kiem/artist/ ${value}`)}>
            {data.artists.map((item, index) => index < 4 && <ItemArtists key={index} data={item} />)}
        </Container>
    ) : (
        <NoContent />
    );
}

export default Artist;
