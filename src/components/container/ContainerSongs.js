import { memo } from 'react';
import { useDispatch } from 'react-redux';
import { setOpenControl } from '~/redux/action';
import { setCurrentIndex, setPlayListAudio } from '~/redux/dataAudio';
import ItemSong from '../item/ItemSong/ItemSong';
import ItemSongAdd from '../item/ItemSong/ItemSongAdd';
import Container from './Container';

function ContainerSongs({ data, title, link, all = false, index = 6, type = '' }) {
    const dispatch = useDispatch();
    const handleOnClick = (i) => {
        dispatch(setPlayListAudio(data));
        dispatch(setCurrentIndex(i));
        dispatch(setOpenControl(true));
    };
    return type === 'top100' || type === 'top100-small' || type === 'song-12'
        ? data?.map(
              (e, i) =>
                  i < index && (
                      <ItemSong key={e.encodeId} data={e} type={type} index={i + 1} onClick={() => handleOnClick(i)} />
                  ),
          )
        : type === 'add'
        ? data?.map((e, i) => i < index && <ItemSongAdd key={e.encodeId} data={e} onClick={() => handleOnClick(i)} />)
        : data && (
              <Container title={title} data={data} link={link} all={all}>
                  {data?.map(
                      (e, i) =>
                          i < index && (
                              <ItemSong key={e.encodeId} data={e} type={type} onClick={() => handleOnClick(i)} />
                          ),
                  )}
              </Container>
          );
}

export default memo(ContainerSongs);
