import { useSelector } from 'react-redux';

import Container from '~/components/container/Container';
import ItemSongAdd from '~/components/item/ItemSong/ItemSongAdd';

function SongOther() {
    const { data_newSongs } = useSelector((state) => state.dataHome);
    return (
        <Container>
            {data_newSongs?.others?.map(
                (item, index) =>
                    index > data_newSongs?.others.length - 3 && <ItemSongAdd key={item.encodeId} data={item} />,
            )}
        </Container>
    );
}

export default SongOther;
