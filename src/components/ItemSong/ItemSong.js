import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import LoadImg from '../loadImg/LoadImg';
import Duration from '../time/Duration';
import styles from './ItemSong.module.scss';

const cx = classNames.bind(styles);
function ItemSong({ data, type = '', timeLoad = 1000, index = '' }) {
    return type === 'song-12' ? (
        <li className={cx('item', data?.streamingStatus === 2 && 'vip') + ' l-12 col'}>
            <div className={cx('media')}>
                <div className={cx('media-wrapper')}>
                    <div className={cx('media-left')}>
                        <div className={cx('thumb')}>
                            <LoadImg timeLoad={timeLoad}>
                                <img src={data.thumbnail} alt="" />
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
                        <div className={cx('info')}>
                            <h3 className={cx('title')}>
                                {data.title}
                                {data?.streamingStatus === 2 && (
                                    <img
                                        src="https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.7.34/static/media/vip-label.3dd6ac7e.svg"
                                        alt=""
                                    />
                                )}
                            </h3>
                            <span className={cx('singer')}>
                                {data?.artists?.map((i, index) => (
                                    <>
                                        <span>
                                            <Link to={i.link}>{i.name}</Link>
                                        </span>
                                        {index < data?.artists.length - 1 && ', '}
                                    </>
                                ))}
                            </span>
                        </div>
                    </div>
                    <div className={cx('media-main') + ' c-0'}>
                        <h3 className={cx('title')}>{data.title}</h3>
                    </div>
                    <div className={cx('media-right')}>
                        <div className={cx('action')}>
                            <Button
                                small
                                content="Phát cùng lời hát"
                                className={cx('icon')}
                                iconLeft={<i className="icon ic-karaoke"></i>}
                            />
                            <Button
                                small
                                content="Thêm vào thư viện"
                                className={cx('icon')}
                                iconLeft={<i className="icon ic-like"></i>}
                            />
                            <Button
                                small
                                content="khác"
                                className={cx('icon')}
                                iconLeft={<i className="icon ic-more"></i>}
                            />
                        </div>
                        <div className={cx('duration')}>
                            <span>{<Duration duration={data.duration} />}</span>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    ) : type === 'top100' ? (
        <li className={cx('item', data?.streamingStatus === 2 && 'vip') + ' l-12 col'}>
            <div className={cx('media')}>
                <div className={cx('media-wrapper')}>
                    <div className={cx('media-ratings')}>
                        <h1
                            className={cx(
                                'number',
                                index === 1 ? 'no1' : index === 2 ? 'no2' : index === 3 ? 'no3' : '',
                            )}
                        >
                            {index}
                        </h1>
                        {data.rakingStatus !== 0 ? (
                            <div className={cx('rank')}>
                                {data?.rakingStatus < 0 ? (
                                    <span className={cx('red')}>
                                        <i className="icon green is-18x18 is-center ic-down"></i>
                                    </span>
                                ) : (
                                    <span className={cx('green')}>
                                        <i className="icon green is-18x18 is-center ic-up"></i>
                                    </span>
                                )}

                                <h3>{Math.abs(data.rakingStatus)}</h3>
                            </div>
                        ) : (
                            <h1 className={cx('sort')}>
                                <i className="fa-solid fa-minus"></i>
                            </h1>
                        )}
                    </div>
                    <div className={cx('media-left')}>
                        <div className={cx('thumb')}>
                            <LoadImg timeLoad={timeLoad}>
                                <img src={data.thumbnail} alt="" />
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
                        <div className={cx('info')}>
                            <h3 className={cx('title')}>
                                {data.title}
                                {data.streamingStatus && (
                                    <img
                                        src="https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.7.34/static/media/-label.3dd6ac7e.svg"
                                        alt=""
                                    />
                                )}
                            </h3>
                            <span className={cx('singer')}>
                                {data?.artists?.map((i, index) => (
                                    <>
                                        <span>
                                            <Link to={i.link}>{i.name}</Link>
                                        </span>
                                        {index < data?.artists.length - 1 && ', '}
                                    </>
                                ))}
                            </span>
                        </div>
                    </div>
                    <div className={cx('media-main') + ' c-0'}>
                        <h3 className={cx('title')}>{data.title}</h3>
                    </div>
                    <div className={cx('media-right')}>
                        <div className={cx('action')}>
                            <Button
                                small
                                content="Phát cùng lời hát"
                                className={cx('icon')}
                                iconLeft={<i className="icon ic-karaoke"></i>}
                            />
                            <Button
                                small
                                content="Thêm vào thư viện"
                                className={cx('icon')}
                                iconLeft={<i className="icon ic-like"></i>}
                            />
                            <Button
                                small
                                content="khác"
                                className={cx('icon')}
                                iconLeft={<i className="icon ic-more"></i>}
                            />
                        </div>
                        <div className={cx('duration')}>
                            <span>{<Duration duration={data.duration} />}</span>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    ) : type === 'top100-small' ? (
        <li className={cx('item', data?.streamingStatus === 2 && 'vip') + ' l-12 col'}>
            <div className={cx('media')}>
                <div className={cx('media-wrapper', 'media-top100-small')}>
                    <div className={cx('media-ratings')}>
                        <h1
                            className={cx(
                                'number',
                                'number-top100-small',
                                index === 1 ? 'no1' : index === 2 ? 'no2' : index === 3 ? 'no3' : '',
                            )}
                        >
                            {index}
                        </h1>
                        {data.rakingStatus !== 0 ? (
                            <div className={cx('rank')}>
                                {data?.rakingStatus < 0 ? (
                                    <span className={cx('red')}>
                                        <i className="icon green is-18x18 is-center ic-down"></i>
                                    </span>
                                ) : (
                                    <span className={cx('green')}>
                                        <i className="icon green is-18x18 is-center ic-up"></i>
                                    </span>
                                )}

                                <h3>{Math.abs(data.rakingStatus)}</h3>
                            </div>
                        ) : (
                            <h1 className={cx('sort')}>
                                <i className="fa-solid fa-minus"></i>
                            </h1>
                        )}
                    </div>
                    <div className={cx('media-left')}>
                        <div className={cx('thumb')}>
                            <LoadImg timeLoad={timeLoad}>
                                <img src={data.thumbnail} alt="" />
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
                        <div className={cx('info', 'info-top100-small')}>
                            <h3 className={cx('title')}>
                                {data.title}
                                {data.streamingStatus && (
                                    <img
                                        src="https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.7.34/static/media/-label.3dd6ac7e.svg"
                                        alt=""
                                    />
                                )}
                            </h3>
                            <span className={cx('singer')}>
                                {data?.artists?.map((i, index) => (
                                    <>
                                        <span>
                                            <Link to={i.link}>{i.name}</Link>
                                        </span>
                                        {index < data?.artists.length - 1 && ', '}
                                    </>
                                ))}
                            </span>
                        </div>
                    </div>
                    <div className={cx('media-right')}>
                        <div className={cx('action')}>
                            <Button
                                small
                                content="Thêm vào thư viện"
                                className={cx('icon')}
                                iconLeft={<i className="icon ic-like"></i>}
                            />
                        </div>
                        <div className={cx('duration')}>
                            <span>{<Duration duration={data.duration} />}</span>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    ) : (
        <li className={cx('item', data?.streamingStatus === 2 && 'vip') + ' l-6 col'}>
            <div className={cx('media')}>
                <div className={cx('media-wrapper')}>
                    <div className={cx('media-left', 'l-6')}>
                        <div className={cx('thumb')}>
                            <LoadImg timeLoad={timeLoad}>
                                <img src={data.thumbnail} alt="" />
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
                        <div className={cx('info', 'weight')}>
                            <h3 className={cx('title')}>
                                {data.title}
                                {data?.streamingStatus === 2 && (
                                    <img
                                        src="https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.7.34/static/media/vip-label.3dd6ac7e.svg"
                                        alt=""
                                    />
                                )}
                            </h3>
                            <span className={cx('singer')}>
                                {data?.artists?.map((i, index) => (
                                    <>
                                        <span>
                                            <Link to={i.link}>{i.name}</Link>
                                        </span>
                                        {index < data?.artists.length - 1 && ', '}
                                    </>
                                ))}
                            </span>
                        </div>
                    </div>
                    <div className={cx('media-right')}>
                        <div className={cx('action')}>
                            <Button small content="Phát cùng lời hát" iconLeft={<i className="icon ic-karaoke"></i>} />
                            <Button small content="Thêm vào thư viện" iconLeft={<i className="icon ic-like"></i>} />
                        </div>
                        <div className={cx('duration')}>
                            <span>{<Duration duration={data.duration} />}</span>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default ItemSong;
