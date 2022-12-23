import Container from './Container';
import ItemVideo from '../ItemVideo/ItemVideo';
import { memo } from 'react';

function ContainerVideos({ data, title, link, all = false, index = 3 }) {
    return (
        <Container title={title} data={data} link={link} all={all}>
            {data?.map((item, i) => i < index && <ItemVideo key={i} data={item} />)}
        </Container>
    );
}

export default memo(ContainerVideos);
