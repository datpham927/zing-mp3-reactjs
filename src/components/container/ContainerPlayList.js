import Container from './Container';
import ItemPlayList from '../ItemPlayList/ItemPlayList';
import { memo } from 'react';

function ContainerPlaylist({
    data,
    title,
    link,
    all = false,
    index = 4,
    spotlight = false,
    description = false,
    className,
}) {
    return spotlight ? (
        <Container title={title} data={data} link={link} all={all} spotlight={spotlight}>
            {data?.items.map((i, e) => e < index && <ItemPlayList description={description} data={i} key={e} />)}
        </Container>
    ) : (
        <Container title={title} link={link} all={all}>
            {data?.map(
                (i, e) =>
                    e < index && <ItemPlayList description={description} data={i} key={e} className={className} />,
            )}
        </Container>
    );
}

export default memo(ContainerPlaylist);
