import { v4 as uuidv4 } from 'uuid';
import Container from '~/components/container/Container';
import ItemPodcast from '~/components/item/ItemPodcast/ItemPodcast';

function RadioRadPromoteEpisode({ data }) {
    return (
        <Container title={data?.title}>
            {data?.items?.map(
                (item, index) => index < 6 && <ItemPodcast col={'l-6 m-6 c-12'} key={uuidv4()} data={item} />,
            )}
        </Container>
    );
}

export default RadioRadPromoteEpisode;
