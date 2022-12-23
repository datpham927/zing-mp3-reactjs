import classNames from 'classnames/bind';
import ArtistBody from './ArtistBody';
import ArtistHeader from './ArtistHeader';
import style from './PageArtist.module.scss';
const cx = classNames.bind(style);

function PageArtist() {
    return (
        <div className={cx('wrapper')}>
            <ArtistHeader />
            <ArtistBody />
        </div>
    );
}

export default PageArtist;
