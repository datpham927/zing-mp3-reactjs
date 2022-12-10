import { useSelector } from 'react-redux';

import Container from '~/components/container/Container';
import ItemSong from '~/components/ItemSong/ItemSong';
import NoContent from '~/components/noContent/NoConTent';
function SongPages() {
    const data = useSelector((state) => state.dataArtist.dataSearch);
    return (
        <div>
            {data.songs ? (
                <Container title="Bài Hát">
                    {data.songs.map((item, index) => (
                        <ItemSong type="song-12" key={index} data={item} timeLoad={0} />
                    ))}
                </Container>
            ) : (
                <NoContent />
            )}
        </div>
    );
}

export default SongPages;
