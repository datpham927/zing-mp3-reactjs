import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import Container from '~/components/container/container';
import ItemPlayList from '~/components/ItemPlayList/ItemPlayList';
import styles from './PagesAll.module.scss';
import PagesAllItem from './PagesAllItem/PagesAllItem';

const cx = classNames.bind(styles);

function PagesAll() {
    return (
        <div className={cx('page-search')}>
            <Container title="Nổi Bật">
                <PagesAllItem type="song" />
                <PagesAllItem type="artist" />
                <PagesAllItem type="artist" />
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
                {/* ------------------------ */}
                <div className={cx('body') + ' l-12 m-12 c-12 row'}>
                    <ItemPlayList />
                    <ItemPlayList />
                    <ItemPlayList />
                    <ItemPlayList />
                </div>
            </div>

            <div className={cx('songs')}>
                <Container title="Bài Hát">
                    <li className={cx('media') + ' l-6 col'}>
                        <div className={cx('media-wrapper')}>
                            <div className={cx('media-left')}>
                                <div className={cx('thumb')}>
                                    <img
                                        src="https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_webp/cover/a/6/5/5/a65573e6905dc4f29f59c49ea04866cf.jpg"
                                        alt=""
                                    ></img>
                                    <div className={cx('play')}>
                                        <i class="icon action-play ic-24-Shuffle"></i>
                                    </div>
                                    <div className={cx('song-play')}>
                                        <img
                                            src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className={cx('info')}>
                                    <h3 className={cx('title')}>Em Của Ngày Hôm Qua</h3>
                                    <span className={cx('singer')}>Sơn Tùng mtp</span>
                                </div>
                            </div>
                            <div className={cx('media-right')}></div>
                        </div>
                    </li>
                </Container>
            </div>
        </div>
    );
}

export default PagesAll;
