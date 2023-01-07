import { useSelector } from 'react-redux';
import ContainerSongs from '~/components/container/ContainerSongs';
import NoContent from '~/components/noContent/NoConTent';

function ArtistSong() {
    const data = useSelector((state) => state.dataArtist.artistSong);
    return data.items ? (
        <ContainerSongs title="Danh Sách Bài Hát" type="song-12" data={data?.items} index={data.items.length} />
    ) : (
        <NoContent />
    );
}

export default ArtistSong;
