import { memo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ItemArtists from '../item/ItemArtists/ItemArtists';
import Container from './Container';

function ContainerArtists({ data, title, link, all = false, index = 4, scroll }) {
    return (
        data && (
            <Container title={title} data={data} link={link} all={all} scroll>
                {data?.map((e, i) => i < index && <ItemArtists data={e} key={uuidv4()} />)}
            </Container>
        )
    );
}

export default memo(ContainerArtists);
