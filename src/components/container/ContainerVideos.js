import Container from './Container';
import ItemPlayList from '../ItemPlayList/ItemPlayList';

function ContainerVideos({ data, link, all = false }) {
    return (
        <Container title={data?.title} link={link} all={all}>
            {data.playlists?.map((i, e) => e < 4 && <ItemPlayList data={i} key={e} />)}
        </Container>
    );
}

export default ContainerVideos;
