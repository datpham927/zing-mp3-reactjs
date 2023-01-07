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
                  {data?.items.map(
                      (e, i) => i < index && <ItemPlayList description={description} data={e} key={e.encodeId} />,
                  )}
              </Container>
          )
        : data && (
              <Container title={title} link={link} all={all}>
                  {data?.map(
                      (e, i) =>
                          i < index && (
                              <ItemPlayList description={description} data={e} key={e.encodeId} className={className} />
                          ),
                  )}
              </Container>
          );
}

export default memo(ContainerPlaylist);
