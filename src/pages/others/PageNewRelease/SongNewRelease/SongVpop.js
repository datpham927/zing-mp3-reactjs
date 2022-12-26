import { useSelector } from 'react-redux';
import Container from '~/components/container/Container';

import ContainerSongs from '~/components/container/ContainerSongs';

function SongVpop() {
    const { data_newSongs } = useSelector((state) => state.dataHome);
    return (
        <Container>
            <ContainerSongs data={data_newSongs?.all} type={'add'} index={data_newSongs?.all.length} />
        </Container>
    );
}

export default SongVpop;
