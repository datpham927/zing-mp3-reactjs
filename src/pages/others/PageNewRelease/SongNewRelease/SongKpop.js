import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Container from '~/components/container/Container';
import ItemSongAdd from '~/components/item/ItemSong/ItemSongAdd';

function SongKpop() {
    const { dataNewSongs } = useSelector((state) => state.dataHome);
    return (
        <Container>
            {dataNewSongs?.all?.map((item, index) => index > 8 && <ItemSongAdd key={uuidv4()} data={item} />)}
        </Container>
    );
}

export default SongKpop;
