import { useSelector } from 'react-redux';

import Container from '~/components/container/Container';
import ItemSongAdd from '~/components/item/ItemSong/ItemSongAdd';

function SongKpop() {
    const { dataNewSongs } = useSelector((state) => state.dataHome);
    return (
        <Container>
            {dataNewSongs?.all?.map((item, index) => index > 8 && <ItemSongAdd key={item.encodeId} data={item} />)}
        </Container>
    );
}

export default SongKpop;
