import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import LoadImg from '~/components/loadImg/LoadImg';
import { zingCounter } from '~/redux/action';
import styles from './TopPagesAll.module.scss';

const cx = classNames.bind(styles);

function TopPagesAll({ data = [], type = '', timeLoad = 2000 }) {
    const dispatch = useDispatch();
    return type === 'song' ? (
        <div className=" l-4 col">
            <div className={cx('media')}>
                <div className={cx('wrapper')}>
                    <div className={cx('song-thumb')}>
                        <LoadImg timeLoad={timeLoad}>
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
                        </LoadImg>
                    </div>
                    <div className={cx('content')}>
                        <span className={cx('type')}>Bài hát</span>
                        <div className={cx('title')}>
                            <span>{data?.title}</span>
                        </div>
                        <div className={cx('singer')}>
                            {data?.artistsNames.split(',').map((i, index) => (
                                <>
                                    <Link to={`/nghesi/${data?.artists[index]?.alias}`}>{i}</Link>
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
                        <LoadImg timeLoad={timeLoad}>
                            <img src={data?.thumbnail} alt="" />
                            <div className={cx('play')}>
                                <i class="icon action-play ic-24-Shuffle"></i>
                            </div>
                            <div className={cx('song-play')}>
                                <img
                                    src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                                    alt=""
                                />
                            </div>
                        </LoadImg>
                    </div>
                    <div className={cx('content', 'content-artist')}>
                        <span className={cx('type')}>Nghệ Sĩ</span>
                        <div className={cx('singer')}>
                            <Link to={`/nghesi/${data?.alias}`}>{data.name}</Link>
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
                        <LoadImg timeLoad={timeLoad}>
                            <Link
                                to={data.link}
                                onClick={() => dispatch(zingCounter.actions.setIdPlayList(data.encodeId))}
                            >
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
                        </LoadImg>
                    </div>
                    <div className={cx('content', 'content-artist')}>
                        <span className={cx('type')}>Playlist</span>
                        <div className={cx('singer')}>
                            <Link
                                to={data.link}
                                onClick={() => dispatch(zingCounter.actions.setIdPlayList(data.encodeId))}
                            >
                                {data?.title}
                            </Link>
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
