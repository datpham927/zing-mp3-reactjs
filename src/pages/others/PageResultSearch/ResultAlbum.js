import { useSelector } from 'react-redux';

import ContainerPlaylist from '~/components/container/ContainerPlayList';
import NoContent from '~/components/noContent/NoConTent';

function ResultAlbum() {
    const data = useSelector((state) => state.dataArtist.dataSearch);
    return (
        <>
            {data?.playlists ? (
                <ContainerPlaylist data={data?.playlists} title={'Playlist/Album'} index={data?.playlists.length} />
            ) : (
                <NoContent />
            )}
        </>
    );
}

export default ResultAlbum;
