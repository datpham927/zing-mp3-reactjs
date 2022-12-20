import { useSelector } from 'react-redux';
import Container from '~/components/container/Container';
import ItemSongAdd from '~/components/ItemSong/ItemSongAdd';

function SongAll() {
    const api = useSelector((state) => state.dataHome.data_Home);
    const data = api.find((e) => e.sectionType === 'new-release')?.items;
    return (
        <Container>
            {data?.all?.map((item, index) => (
                <ItemSongAdd key={index} data={item} />
            ))}
            {data?.vPop?.map((item, index) => (
                <ItemSongAdd key={index} data={item} />
            ))}
            {data?.others?.map((item, index) => (
                <ItemSongAdd key={index} data={item} />
            ))}
        </Container>
    );
}

export default SongAll;
