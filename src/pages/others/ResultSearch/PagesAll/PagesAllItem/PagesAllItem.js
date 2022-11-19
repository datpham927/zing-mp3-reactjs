import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './PagesAllItem.module.scss';

const cx = classNames.bind(styles);

function PagesAllItem({ data, type = '' }) {
    return type === 'song' ? (
        <div className=" l-4 col">
            <div className={cx('media')}>
                <div className={cx('wrapper')}>
                    <div className={cx('song-thumb')}>
                        <img
                            src="https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_webp/cover/a/6/5/5/a65573e6905dc4f29f59c49ea04866cf.jpg"
                            alt=""
                        />
                        <div className={cx('play')}>
                            <i class="icon action-play ic-play"></i>
                        </div>
                        <div className={cx('song-play')}>
                            <img
                                src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className={cx('content')}>
                        <span className={cx('type')}>bài hát</span>
                        <div className={cx('title')}>
                            <span>Quên Hay Tha Thứ</span>
                        </div>
                        <div className={cx('singer')}>
                            <Link to={'/songtung'}>Sơn Tùng MTP</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : type === 'artist' ? (
        <div className=" l-4 col">
            <div className={cx('media')}>
                <div className={cx('wrapper')}>
                    <div className={cx('song-thumb', 'artist')}>
                        <img
                            src="https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_webp/cover/a/6/5/5/a65573e6905dc4f29f59c49ea04866cf.jpg"
                            alt=""
                        />
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
                    <div className={cx('content', 'content-artist')}>
                        <span className={cx('type')}>Nghệ Sĩ</span>
                        <div className={cx('singer')}>
                            <Link to={'/nghesi'}>Đóa Hồng Nhạc Việt</Link>
                        </div>
                        <div className={cx('title')}>
                            <span>Quên Hay Tha Thứ</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : type === 'playlist' ? (
        <div className=" l-4 col">
            <div className={cx('media')}>
                <div className={cx('wrapper')}>
                    <div className={cx('song-thumb', 'artist')}>
                        <img
                            src="https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_webp/cover/a/6/5/5/a65573e6905dc4f29f59c49ea04866cf.jpg"
                            alt=""
                        />
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
                    <div className={cx('content', 'content-artist')}>
                        <span className={cx('type')}>Playlist</span>
                        <div className={cx('singer')}>
                            <Link to={'/nghesi'}>Đóa Hồng Nhạc Việt</Link>
                        </div>
                        <div className={cx('title')}>
                            <span>Quên Hay Tha Thứ</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        ' '
    );
}

export default PagesAllItem;
