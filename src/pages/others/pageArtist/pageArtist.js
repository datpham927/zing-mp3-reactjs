import classNames from 'classnames/bind';
import style from './PageArtist.module.scss';
import HeaderArtist from './HeaderArist';
import BodyArtist from './BodyArtist';
const cx = classNames.bind(style);

function PageArtist() {
    return (
        <div className={cx('wrapper')}>
            <HeaderArtist />
            <BodyArtist />
        </div>
    );
}

export default PageArtist;
