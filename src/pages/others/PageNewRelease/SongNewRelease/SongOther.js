import { useSelector } from 'react-redux';

import Container from '~/components/container/Container';
import ItemSongAdd from '~/components/ItemSong/ItemSongAdd';

function SongOther() {
    const data = useSelector((state) => state?.dataRelease?.dataNewRelease);
    return (
        <Container>
            {data?.others?.map(
                (item, index) => index > data?.others.length - 3 && <ItemSongAdd key={index} data={item} />,
            )}
        </Container>
    );
}

export default SongOther;
