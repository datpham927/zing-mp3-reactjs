import { memo } from 'react';
import ItemSong from '../ItemSong/ItemSong';
import Container from './Container';

function ContainerSongs({ data, title, link, all = false, index = 6 }) {
    return (
        <Container title={title} data={data} link={link} all={all}>
            {data?.map((item, i) => i < index && <ItemSong key={i} data={item} />)}
        </Container>
    );
}

export default memo(ContainerSongs);
