import Container from '~/components/container/Container';
import ItemPlayList from '~/components/ItemPlayList/ItemPlayList';

function HomeTop100({ data }) {
    return (
        <Container title={data.title} all link={'/top100'}>
            {data?.items?.map((item, index) => index < 4 && <ItemPlayList timeLoad={0} key={index} data={item} />)}
        </Container>
    );
}

export default HomeTop100;
