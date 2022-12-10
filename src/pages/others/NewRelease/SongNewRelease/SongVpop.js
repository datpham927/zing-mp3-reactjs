import { useSelector } from 'react-redux';

import Container from '~/components/container/Container';
import ItemSongAdd from '~/components/ItemSong/ItemSongAdd';

function SongVpop() {
    const data = useSelector((state) => state.dataRelease?.dataNewRelease);
    console.log(data);

    return (
        <Container>{data?.all?.map((item, index) => index > 1 && <ItemSongAdd key={index} data={item} />)}</Container>
    );
}

export default SongVpop;
