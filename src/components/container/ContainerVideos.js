import Container from './Container';
import { v4 as uuidv4 } from 'uuid';
import { memo } from 'react';
import ItemVideo from '../item/ItemVideo/ItemVideo';

function ContainerVideos({ data, title, link, all = false, index = 3, scroll }) {
    return (
        data && (
            <Container title={title} data={data} link={link} all={all} scroll={scroll}>
                {data?.map((e, i) => i < index && <ItemVideo key={uuidv4()} data={e} />)}
            </Container>
        )
    );
}

export default memo(ContainerVideos);
