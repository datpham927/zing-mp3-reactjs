import { useSelector } from 'react-redux';

import Container from '~/components/container/Container';
import ItemVideo from '~/components/item/ItemVideo/ItemVideo';
import NoContent from '~/components/noContent/NoConTent';

function ArtistMv() {
    const data = useSelector((state) => state.dataArtist.artistMV);
    return data.items ? (
        <Container title="">
            {data?.items.map((item, index) => (
                <ItemVideo key={item.encodeId} data={item} />
            ))}
        </Container>
    ) : (
        <NoContent />
    );
}

export default ArtistMv;
