import Container from './Container';
import { memo } from 'react';
import ItemPlayList from '../item/ItemPlayList/ItemPlayList';

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
    return spotlight
        ? data && (
              <Container title={title} data={data} link={link} all={all} spotlight={spotlight}>
                  {data?.items.map((i, e) => e < index && <ItemPlayList description={description} data={i} key={e} />)}
              </Container>
          )
        : data && (
              <Container title={title} link={link} all={all}>
                  {data?.map(
                      (i, e) =>
                          e < index && (
                              <ItemPlayList description={description} data={i} key={e} className={className} />
                          ),
                  )}
              </Container>
          );
}

export default memo(ContainerPlaylist);
