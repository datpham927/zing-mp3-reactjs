import { useSelector } from 'react-redux';
import Container from '~/components/container/Container';

import ContainerSongs from '~/components/container/ContainerSongs';

function SongVpop() {
    const { dataNewSongs } = useSelector((state) => state.dataHome);
    return (
        <Container>
            <ContainerSongs data={dataNewSongs?.all} type={'add'} index={dataNewSongs?.all.length} />
        </Container>
    );
}

export default SongVpop;
