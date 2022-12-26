import { useSelector } from 'react-redux';
import Container from '~/components/container/Container';

import ContainerSongs from '~/components/container/ContainerSongs';

function SongUsuk() {
    const { data_newSongs } = useSelector((state) => state.dataHome);
    return (
        <Container>
            <ContainerSongs data={data_newSongs?.others} type={'add'} index={data_newSongs?.others.length} />
        </Container>
    );
}

export default SongUsuk;
