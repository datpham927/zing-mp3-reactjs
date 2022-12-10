import { useSelector } from 'react-redux';

import Container from '~/components/container/Container';
import ItemVideo from '~/components/ItemVideo/ItemVideo';
import NoContent from '~/components/noContent/NoConTent';

function MvSearch() {
    const data = useSelector((state) => state.dataArtist.dataSearch);
    return (
        <>
            {data.videos ? (
                <Container title="MV">
                    {data?.videos.map((item, index) => (
                        <ItemVideo key={index} data={item} timeLoad={0} />
                    ))}
                </Container>
            ) : (
                <NoContent />
            )}
        </>
    );
}

export default MvSearch;
