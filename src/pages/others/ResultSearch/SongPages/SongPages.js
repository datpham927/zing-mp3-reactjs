import { useSelector } from 'react-redux';
import Container from '~/components/container/container';
import ItemSong from '~/components/ItemSong/ItemSong';
import NoContent from '../NoConTent';
function SongPages() {
    const data = useSelector((state) => state.counter.dataSearch);
    return (
        <div>
            {data.songs ? (
                <Container title="Bài Hát">
                    {data.songs.map((item, index) => (
                        <ItemSong type="song" key={item.encodeId} data={item} />
                    ))}
                </Container>
            ) : (
                <NoContent />
            )}
        </div>
    );
}

export default SongPages;
