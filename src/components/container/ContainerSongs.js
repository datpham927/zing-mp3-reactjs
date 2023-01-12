import { memo } from 'react';
import { useDispatch } from 'react-redux';
import { setIdAudio, setLoadMusic, setPlayListAudio } from '~/redux/dataControl';
import { v4 as uuidv4 } from 'uuid';
import { setPlayListTitle } from '~/redux/FavoriteList';
import ItemSong from '../item/ItemSong/ItemSong';
import ItemSongAdd from '../item/ItemSong/ItemSongAdd';
import Container from './Container';

function ContainerSongs({ data, title, link, all = false, index = 6, type = '', checkBox, kind }) {
    const dispatch = useDispatch();
    const handleOnClick = (e) => {
        dispatch(setPlayListAudio(data));
        dispatch(setIdAudio(e));
        dispatch(setLoadMusic(false));
        if (title && link) {
            dispatch(setPlayListTitle([title, link]));
        }
    };
    return type === 'top100' || type === 'top100-small' || type === 'song-12'
        ? data?.map(
              (e, i) =>
                  i < index && (
                      <ItemSong key={uuidv4()} data={e} type={type} index={i + 1} onClick={() => handleOnClick(e)} />
                  ),
          )
        : type === 'add'
        ? data?.map(
              (e, i) =>
                  i < index && (
                      <ItemSongAdd
                          key={uuidv4()}
                          data={e}
                          checkBox={checkBox}
                          onClick={() => handleOnClick(e)}
                          type={kind}
                      />
                  ),
          )
        : data && (
              <Container title={title} data={data} link={link} all={all}>
                  {data?.map(
                      (e, i) =>
                          i < index && (
                              <ItemSong key={uuidv4()} data={e} type={type} onClick={() => handleOnClick(e)} />
                          ),
                  )}
              </Container>
          );
}

export default memo(ContainerSongs);
