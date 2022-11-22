import { useSelector } from 'react-redux';
import Container from '~/components/container/container';
import ItemVideo from '~/components/ItemVideo/ItemVideo';
import NoContent from '../NoConTent';

function MvSearch() {
    const data = useSelector((state) => state.counter.dataSearch);
    return (
        <>
            {data.videos ? (
                <Container title="MV">
                    {data.videos.map((item, index) => (
                        <ItemVideo key={index} data={item} />
                    ))}
                </Container>
            ) : (
                <NoContent />
            )}
        </>
    );
}

export default MvSearch;
