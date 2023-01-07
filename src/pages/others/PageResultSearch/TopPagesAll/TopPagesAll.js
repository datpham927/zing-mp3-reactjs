import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './TopPagesAll.module.scss';

const cx = classNames.bind(styles);

function TopPagesAll({ data, type = '' }) {
    return type === 'song' ? (
        <div className=" l-4 col">
            <div className={cx('media')}>
                <div className={cx('wrapper')}>
                    <div className={cx('song-thumb')}>
                        <img src={data?.thumbnail} alt="" />
                        <div className={cx('play')}>
                            <i className="icon action-play ic-play"></i>
                        </div>
                        <div className={cx('song-play')}>
                            <img
                                src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className={cx('content')}>
                        <span className={cx('type')}>Bài hát</span>
                        <div className={cx('title')}>
                            <span>{data?.title}</span>
                        </div>
                        <div className={cx('singer')}>
                            {data?.artistsNames.split(',').map((i, index) => (
                                <>
                                    <Link to={data?.artists[index]?.link}>{i}</Link>
                                    <span>{index < data?.artistsNames.split(',').length - 1 && ', '}</span>
                                </>
                            ))}
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
                        <img src={data?.thumbnail} alt="" />
                        <div className={cx('play')}>
                            <i className="icon action-play ic-24-Shuffle"></i>
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
                            <Link to={data?.link}>{data.name}</Link>
                        </div>
                        <div className={cx('title')}>
                            <span>
                                {data.totalFollow && data?.totalFollow.toString().substring(0, 2) / 10 + 'M quan tâm'}
                            </span>
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
                        <Link to={data.link}>
                            <img src={data?.thumbnail} alt="" />
                            <div className={cx('play')}>
                                <i className="icon action-play ic-play"></i>
                            </div>
                            <div className={cx('song-play')}>
                                <img
                                    src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                                    alt=""
                                />
                            </div>
                        </Link>
                    </div>
                    <div className={cx('content', 'content-artist')}>
                        <span className={cx('type')}>Playlist</span>
                        <div className={cx('singer')}>
                            <Link to={data.link}>{data?.title}</Link>
                        </div>
                        <div className={cx('title')}>
                            <span>{data?.sortDescription}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        ' '
    );
}

export default TopPagesAll;
