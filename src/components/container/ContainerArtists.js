import { memo } from 'react';
import ItemArtists from '../ItemArtists/ItemArtists';
import Container from './Container';

function ContainerArtists({ data, title, link, all = false, index = 4 }) {
    return (
        <Container title={title} data={data} link={link} all={all}>
            {data?.map((item, i) => i < index && <ItemArtists data={item} key={index} />)}
        </Container>
    );
}

export default memo(ContainerArtists);
