import { memo } from 'react';
import ItemArtists from '../item/ItemArtists/ItemArtists';
import Container from './Container';

function ContainerArtists({ data, title, link, all = false, index = 4, scroll }) {
    return (
        data && (
            <Container title={title} data={data} link={link} all={all} scroll>
                {data?.map((e, i) => i < index && <ItemArtists data={e} key={e.encodeId} />)}
            </Container>
        )
    );
}

export default memo(ContainerArtists);
