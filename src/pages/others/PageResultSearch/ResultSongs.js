import { useSelector } from 'react-redux';

import ContainerSongs from '~/components/container/ContainerSongs';
import NoContent from '~/components/noContent/NoConTent';
function ResultSongs() {
    const data = useSelector((state) => state.dataArtist.dataSearch);
    return (
        <div>
            {data.songs ? (
                <ContainerSongs title={'Bài Hát'} data={data?.songs} type={'song-12'} index={data?.songs.length} />
            ) : (
                <NoContent />
            )}
        </div>
    );
}

export default ResultSongs;
