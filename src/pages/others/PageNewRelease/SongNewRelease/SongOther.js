import { useSelector } from 'react-redux';

import Container from '~/components/container/Container';
import ItemSongAdd from '~/components/item/ItemSong/ItemSongAdd';

function SongOther() {
    const { dataNewSongs } = useSelector((state) => state.dataHome);
    return (
        <Container>
            {dataNewSongs?.others?.map(
                (item, index) =>
                    index > dataNewSongs?.others.length - 3 && <ItemSongAdd key={item.encodeId} data={item} />,
            )}
        </Container>
    );
}

export default SongOther;
