import { useSelector } from 'react-redux';

import { Navigate } from 'react-router-dom';
import Container from '~/components/container/Container';
import ItemArtists from '~/components/ItemArtists/ItemArtists';
import NoContent from '~/components/noContent/NoConTent';
function Artist() {
    const data = useSelector((state) => state.dataArtist.dataSearch);
    const value = useSelector((state) => state.counter.value);
    return data.artists ? (
        <Container title="Nghệ Sĩ/OA" onClick={() => Navigate(`/tim-kiem/artist/ ${value}`)}>
            {data?.artists.map((item, index) => (
                <ItemArtists key={index} data={item} timeLoad={0} />
            ))}
        </Container>
    ) : (
        <NoContent />
    );
}

export default Artist;
