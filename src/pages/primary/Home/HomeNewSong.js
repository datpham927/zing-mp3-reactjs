import Container from '~/components/container/Container';
import ItemNewRelease from '~/components/ItemNewRelease/ItemNewRelease';

function HomeNewSong({ data }) {
    return (
        <Container title={data.title} all link={data.link}>
            {data?.items?.map((item, index) => index < 3 && <ItemNewRelease key={index} data={item} index={index} />)}
        </Container>
    );
}

export default HomeNewSong;
