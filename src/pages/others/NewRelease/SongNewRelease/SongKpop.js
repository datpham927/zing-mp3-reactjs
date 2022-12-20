import { useSelector } from 'react-redux';

import Container from '~/components/container/Container';
import ItemSongAdd from '~/components/ItemSong/ItemSongAdd';

function SongKpop() {
    const data = useSelector((state) => state?.dataRelease?.dataNewRelease);
    return (
        <Container>{data?.all?.map((item, index) => index > 8 && <ItemSongAdd key={index} data={item} />)}</Container>
    );
}

export default SongKpop;
