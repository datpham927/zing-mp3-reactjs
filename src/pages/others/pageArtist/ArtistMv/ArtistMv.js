import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import Container from '~/components/container/Container';
import ItemVideo from '~/components/item/ItemVideo/ItemVideo';
import NoContent from '~/components/noContent/NoConTent';

function ArtistMv() {
    const data = useSelector((state) => state.dataArtist.artistMV);
    return data.items ? (
        <Container title="">
            {data?.items.map((item, index) => (
                <ItemVideo key={uuidv4()} data={item} />
            ))}
        </Container>
    ) : (
        <NoContent />
    );
}

export default ArtistMv;
