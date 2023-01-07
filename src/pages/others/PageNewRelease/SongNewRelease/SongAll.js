import { useSelector } from 'react-redux';
import Container from '~/components/container/Container';
import ContainerSongs from '~/components/container/ContainerSongs';

function SongAll() {
    const api = useSelector((state) => state.dataHome.dataHome);
    const data = api.find((e) => e.sectionType === 'new-release')?.items;

    return (
        <Container>
            <ContainerSongs data={data?.all} type={'add'} index={data?.all.length} />
            <ContainerSongs data={data?.vPop} type={'add'} index={data?.vPop.length} />;
            <ContainerSongs data={data?.others} type={'add'} index={data?.others.length} />;
        </Container>
    );
}

export default SongAll;
