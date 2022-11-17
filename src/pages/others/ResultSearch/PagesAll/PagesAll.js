import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Container from '~/components/container/container';
import styles from './PagesAll.module.scss';
import PagesAllItem from './PagesAllItem/PagesAllItem';

const cx = classNames.bind(styles);

function PagesAll() {
    return (
        <div className={cx('page-search')}>
            <Container title="Nổi Bật">
                <PagesAllItem type="song" />
                <PagesAllItem type="playlist" />
            </Container>
            {/* ---------------------- */}
            <div className={cx('playList')}>
                <div className={cx('header')}>
                    <div className={cx('image')}>
                        <img
                            src="https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_webp/cover/a/6/5/5/a65573e6905dc4f29f59c49ea04866cf.jpg"
                            alt=""
                        />
                    </div>
                    <div className={cx('content')}>
                        <p className={cx('subtitle')}>hihi</p>
                        <h1 className={cx('title')}>
                            <Link to={'/sontung'}>Sơn Tùng MTP</Link>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PagesAll;
