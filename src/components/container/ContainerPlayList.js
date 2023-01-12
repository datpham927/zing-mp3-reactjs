import Container from './Container';
import { v4 as uuidv4 } from 'uuid';
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
    scroll,
}) {
    return spotlight
        ? data && (
              <Container
                  scroll={scroll}
                  title={title}
                  data={data}
                  link={link}
                  all={all}
                  spotlight={spotlight}
                  className={className}
              >
                  {data?.items.map(
                      (e, i) => i < index && <ItemPlayList description={description} data={e} key={uuidv4()} />,
                  )}
              </Container>
          )
        : data && (
              <Container scroll={scroll} title={title} link={link} all={all} className={className}>
                  {data?.map((e, i) => i < index && <ItemPlayList description={description} data={e} key={uuidv4()} />)}
              </Container>
          );
}

export default memo(ContainerPlaylist);
