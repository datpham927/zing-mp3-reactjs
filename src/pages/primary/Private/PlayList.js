import { useSelector } from 'react-redux';
import ContainerPlayList from '~/components/container/ContainerPlayList';
import Empty from './Empty';

function PlayList() {
    const { playListFavorite } = useSelector((state) => state.Favorite);
    return playListFavorite.length > 0 ? (
        <ContainerPlayList title={'PLAYLIST'} data={playListFavorite} index={playListFavorite.length} />
    ) : (
        <Empty />
    );
}

export default PlayList;
