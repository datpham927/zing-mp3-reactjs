import Container from './Container';
import { memo } from 'react';
import ItemVideo from '../item/ItemVideo/ItemVideo';

function ContainerVideos({ data, title, link, all = false, index = 3 }) {
    return (
        data && (
            <Container title={title} data={data} link={link} all={all}>
                {data?.map((item, i) => i < index && <ItemVideo key={i} data={item} />)}
            </Container>
        )
    );
}

export default memo(ContainerVideos);
