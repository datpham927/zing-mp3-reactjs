import { useSelector } from 'react-redux';
import Container from '~/components/container/container';
import ItemSong from '~/components/ItemSong/ItemSong';
import NoContent from '~/components/noContent/NoConTent';

function SongArtist() {
    const data = useSelector((state) => state.data.artist_Song);
    return data.items ? (
        <Container title="Danh Sách Bài Hát">
            {data?.items.map((item, index) => (
                <ItemSong key={index} type="song-12" data={item} timeLoad={0} />
            ))}
        </Container>
    ) : (
        <NoContent />
    );
}

export default SongArtist;
