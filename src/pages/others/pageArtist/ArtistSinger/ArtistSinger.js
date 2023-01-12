import { useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import styles from './ArtistSinger.module.scss';
import Container from '~/components/container/Container';
import NoContent from '~/components/noContent/NoConTent';
import ItemPlayList from '~/components/item/ItemPlayList/ItemPlayList';
const cx = classNames.bind(styles);

function ArtistSinger() {
    const data = useSelector((state) => state.dataArtist.artistSinger);
    return data.items ? (
        <Container title={data.title}>
            {data?.items.map((item, index) => (
                <ItemPlayList key={uuidv4()} data={item} className={cx('item')} />
            ))}
        </Container>
    ) : (
        <NoContent />
    );
}

export default ArtistSinger;
