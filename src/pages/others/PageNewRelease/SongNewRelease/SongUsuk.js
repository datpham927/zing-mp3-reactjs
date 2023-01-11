import { useSelector } from 'react-redux';
import Container from '~/components/container/Container';

import ContainerSongs from '~/components/container/ContainerSongs';

function SongUsuk() {
    const { dataNewSongs } = useSelector((state) => state.dataHome);
    return (
        <Container>
            <ContainerSongs data={dataNewSongs?.others} type={'add'} index={dataNewSongs?.others?.length} />
        </Container>
    );
}

export default SongUsuk;
