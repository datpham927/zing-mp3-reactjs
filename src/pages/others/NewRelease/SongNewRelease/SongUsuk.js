import { useSelector } from 'react-redux';

import Container from '~/components/container/Container';
import ItemSongAdd from '~/components/ItemSong/ItemSongAdd';

function SongUsuk() {
    const data = useSelector((state) => state?.dataRelease?.dataNewRelease);
    return (
        <Container>
            {data?.others?.map((item, index) => (
                <ItemSongAdd key={index} data={item} />
            ))}
        </Container>
    );
}

export default SongUsuk;
