import Container from './Container';
import ItemPlayList from '../ItemPlayList/ItemPlayList';

function ContainerPlaylist({ data, title, link, all = false, spotlight = false }) {
    return (
        <Container title={title} link={link} all={all} spotlight={spotlight}>
            {data?.map((i, e) => e < 4 && <ItemPlayList data={i} key={e} />)}
        </Container>
    );
}

export default ContainerPlaylist;
