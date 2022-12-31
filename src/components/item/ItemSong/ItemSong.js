/* eslint-disable react-hooks/exhaustive-deps */
import classNames from 'classnames/bind';
import { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import { setActivePlay, zingAction } from '~/redux/action';
import LoadImg from '~/components/load/loadImg/LoadImg';
import styles from './ItemSong.module.scss';
import { setPlayListTitle, setSongFavorite } from '~/redux/FavoriteList';
import { setIdAudio } from '~/redux/dataAudio';
import Duration from '~/components/number/time/Duration';

const cx = classNames.bind(styles);
function ItemSong({ data, type = '', timeLoad = 1000, index = '', onClick }) {
    const [favorite, setFavorite] = useState([]);
    const dispatch = useDispatch();
    const { idAudio } = useSelector((state) => state.dataControl);
    const { activePlay } = useSelector((state) => state.action);
    const { songFavorite } = useSelector((state) => state.Favorite);
    useEffect(() => {
        setFavorite(songFavorite?.map((e) => e.encodeId));
    }, [songFavorite]);

    const handleLike = () => {
        dispatch(setSongFavorite(data));
    };
    const handlePlay = () => {
        if (data?.streamingStatus === 1) {
            dispatch(setIdAudio(data));
            dispatch(setActivePlay(true));
            onClick();
        } else {
            dispatch(zingAction.actions.setModalVip(true));
        }
    };
    const handlePause = () => {
        dispatch(setActivePlay(false));
    };
    return type === 'song-12' ? (
        <li
            className={cx('item', data?.streamingStatus === 2 && 'vip') + ' l-12 col'}
            onDoubleClick={() => handlePlay()}
        >
            <div className={cx('media', data.encodeId === idAudio?.encodeId && 'active')}>
                <div className={cx('media-wrapper')}>
                    <div className={cx('media-left')}>
                        <div className={cx('thumb')}>
                            <LoadImg timeLoad={timeLoad}>
                                <img src={data.thumbnail} alt="" />
                                {activePlay === true && data?.encodeId === idAudio?.encodeId ? (
                                    <div className={cx('song-play')} onClick={() => handlePause()}>
                                        <img
                                            src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                                            alt=""
                                        />
                                    </div>
                                ) : (
                                    <div
                                        className={cx('play', data?.encodeId === idAudio?.encodeId && 'pause')}
                                        onClick={() => handlePlay()}
                                    >
                                        <i className="icon action-play ic-play"></i>
                                    </div>
                                )}
                            </LoadImg>
                        </div>
                        <div className={cx('info')}>
                            <div style={{ display: 'flex' }}>
                                <h3 className={cx('title')}>{data.title}</h3>
                                {data?.streamingStatus === 2 && (
                                    <img
                                        src="https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.7.34/static/media/vip-label.3dd6ac7e.svg"
                                        alt=""
                                    />
                                )}
                            </div>
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
                                className={cx('icon', favorite?.includes(data.encodeId) && 'active-tym')}
                                onClick={() => handleLike()}
                                small
                                content={favorite?.includes(data.encodeId) ? 'Đã thêm' : 'Thêm vào Thư viện'}
                                iconLeft={
                                    favorite?.includes(data.encodeId) ? (
                                        <i className="icon ic-like-full"></i>
                                    ) : (
                                        <i className="icon ic-like"></i>
                                    )
                                }
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
        <li
            className={cx('item', data?.streamingStatus === 2 && 'vip') + ' l-12 col'}
            onDoubleClick={() => handlePlay()}
        >
            <div className={cx('media', data.encodeId === idAudio?.encodeId && 'active')}>
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
                                {activePlay === true && data?.encodeId === idAudio?.encodeId ? (
                                    <div className={cx('song-play')} onClick={() => handlePause()}>
                                        <img
                                            src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                                            alt=""
                                        />
                                    </div>
                                ) : (
                                    <div
                                        className={cx('play', data?.encodeId === idAudio?.encodeId && 'pause')}
                                        onClick={() => handlePlay()}
                                    >
                                        <i className="icon action-play ic-play"></i>
                                    </div>
                                )}
                            </LoadImg>
                        </div>
                        <div className={cx('info')}>
                            <div style={{ display: 'flex' }}>
                                <h3 className={cx('title')}>{data.title}</h3>
                                {data?.streamingStatus === 2 && (
                                    <img
                                        src="https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.7.34/static/media/vip-label.3dd6ac7e.svg"
                                        alt=""
                                    />
                                )}
                            </div>
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
                                className={cx('icon', favorite?.includes(data.encodeId) && 'active-tym')}
                                onClick={() => handleLike()}
                                small
                                content={favorite?.includes(data.encodeId) ? 'Đã thêm' : 'Thêm vào Thư viện'}
                                iconLeft={
                                    favorite?.includes(data.encodeId) ? (
                                        <i className="icon ic-like-full"></i>
                                    ) : (
                                        <i className="icon ic-like"></i>
                                    )
                                }
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
        <li
            className={cx('item', data?.streamingStatus === 2 && 'vip') + ' l-12 col'}
            onDoubleClick={() => handlePlay()}
        >
            <div className={cx('media', data.encodeId === idAudio?.encodeId && 'active')}>
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
                                {activePlay === true && data?.encodeId === idAudio?.encodeId ? (
                                    <div className={cx('song-play')} onClick={() => handlePause()}>
                                        <img
                                            src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                                            alt=""
                                        />
                                    </div>
                                ) : (
                                    <div
                                        className={cx('play', data?.encodeId === idAudio?.encodeId && 'pause')}
                                        onClick={() => handlePlay()}
                                    >
                                        <i className="icon action-play ic-play"></i>
                                    </div>
                                )}
                            </LoadImg>
                        </div>
                        <div className={cx('info', 'info-top100-small')}>
                            <div style={{ display: 'flex' }}>
                                <h3 className={cx('title')}>{data.title}</h3>
                                {data?.streamingStatus === 2 && (
                                    <img
                                        src="https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.7.34/static/media/vip-label.3dd6ac7e.svg"
                                        alt=""
                                    />
                                )}
                            </div>
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
                                className={cx('icon', favorite?.includes(data.encodeId) && 'active-tym')}
                                onClick={() => handleLike()}
                                small
                                content={favorite?.includes(data.encodeId) ? 'Đã thêm' : 'Thêm vào Thư viện'}
                                iconLeft={
                                    favorite?.includes(data.encodeId) ? (
                                        <i className="icon ic-like-full"></i>
                                    ) : (
                                        <i className="icon ic-like"></i>
                                    )
                                }
                            />
                        </div>
                        <div className={cx('duration')}>
                            <span>{<Duration duration={data.duration} />}</span>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    ) : type === 'player-queue' ? (
        <li className={cx('item', data?.streamingStatus === 2 && 'vip') + ' l-12'} onDoubleClick={() => handlePlay()}>
            <div className={cx('media', data.encodeId === idAudio?.encodeId && 'queue-active')}>
                <div className={cx('media-wrapper')}>
                    <div className={cx('media-left', 'l-6')}>
                        <div className={cx('thumb')}>
                            <LoadImg timeLoad={timeLoad}>
                                <img src={data.thumbnail} alt="" />
                                {activePlay === true && data?.encodeId === idAudio?.encodeId ? (
                                    <div className={cx('song-play')} onClick={() => handlePause()}>
                                        <img
                                            src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                                            alt=""
                                        />
                                    </div>
                                ) : (
                                    <div
                                        className={cx('play', data?.encodeId === idAudio?.encodeId && 'pause')}
                                        onClick={() => handlePlay()}
                                    >
                                        <i className="icon action-play ic-play"></i>
                                    </div>
                                )}
                            </LoadImg>
                        </div>
                        <div className={cx('info', 'weight')}>
                            <div style={{ display: 'flex' }}>
                                <h3 className={cx('title')}>{data.title}</h3>
                                {data?.streamingStatus === 2 && (
                                    <img
                                        src="https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.7.34/static/media/vip-label.3dd6ac7e.svg"
                                        alt=""
                                    />
                                )}
                            </div>
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
                                className={cx('icon', favorite?.includes(data.encodeId) && 'active-tym')}
                                onClick={() => handleLike()}
                                small
                                content={favorite?.includes(data.encodeId) ? 'Đã thêm' : 'Thêm vào Thư viện'}
                                iconLeft={
                                    favorite?.includes(data.encodeId) ? (
                                        <i className="icon ic-like-full"></i>
                                    ) : (
                                        <i className="icon ic-like"></i>
                                    )
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </li>
    ) : type === 'player-queue-recent' ? (
        <li className={cx('item', data?.streamingStatus === 2 && 'vip') + ' l-12'} onDoubleClick={() => handlePlay()}>
            <div className={cx('media')}>
                <div className={cx('media-wrapper')}>
                    <div className={cx('media-left', 'l-6')}>
                        <div className={cx('thumb')}>
                            <LoadImg timeLoad={timeLoad}>
                                <img src={data.thumbnail} alt="" />
                                <div className={cx('play')} onClick={() => handlePlay()}>
                                    <i className="icon action-play ic-play"></i>
                                </div>
                            </LoadImg>
                        </div>
                        <div className={cx('info', 'weight')}>
                            <div style={{ display: 'flex' }}>
                                <h3 className={cx('title')}>{data.title}</h3>
                                {data?.streamingStatus === 2 && (
                                    <img
                                        src="https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.7.34/static/media/vip-label.3dd6ac7e.svg"
                                        alt=""
                                    />
                                )}
                            </div>
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
                                className={cx('icon', favorite?.includes(data.encodeId) && 'active-tym')}
                                onClick={() => handleLike()}
                                small
                                content={favorite?.includes(data.encodeId) ? 'Đã thêm' : 'Thêm vào Thư viện'}
                                iconLeft={
                                    favorite?.includes(data.encodeId) ? (
                                        <i className="icon ic-like-full"></i>
                                    ) : (
                                        <i className="icon ic-like"></i>
                                    )
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </li>
    ) : (
        <li
            className={cx('item', data?.streamingStatus === 2 && 'vip') + ' l-6 col'}
            onDoubleClick={() => handlePlay()}
        >
            <div className={cx('media', data.encodeId === idAudio?.encodeId && 'active')}>
                <div className={cx('media-wrapper')}>
                    <div className={cx('media-left', 'l-6')}>
                        <div className={cx('thumb')}>
                            <LoadImg timeLoad={timeLoad}>
                                <img src={data.thumbnail} alt="" />
                                {activePlay === true && data?.encodeId === idAudio?.encodeId ? (
                                    <div className={cx('song-play')} onClick={() => handlePause()}>
                                        <img
                                            src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                                            alt=""
                                        />
                                    </div>
                                ) : (
                                    <div
                                        className={cx('play', data?.encodeId === idAudio?.encodeId && 'pause')}
                                        onClick={() => handlePlay()}
                                    >
                                        <i className="icon action-play ic-play"></i>
                                    </div>
                                )}
                            </LoadImg>
                        </div>
                        <div className={cx('info', 'weight')}>
                            <div style={{ display: 'flex' }}>
                                <h3 className={cx('title')}>{data.title}</h3>
                                {data?.streamingStatus === 2 && (
                                    <img
                                        src="https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.7.34/static/media/vip-label.3dd6ac7e.svg"
                                        alt=""
                                    />
                                )}
                            </div>
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
                            <Button
                                className={cx('icon', favorite?.includes(data.encodeId) && 'active-tym')}
                                onClick={() => handleLike()}
                                small
                                content={favorite?.includes(data.encodeId) ? 'Đã thêm' : 'Thêm vào Thư viện'}
                                iconLeft={
                                    favorite?.includes(data.encodeId) ? (
                                        <i className="icon ic-like-full"></i>
                                    ) : (
                                        <i className="icon ic-like"></i>
                                    )
                                }
                            />
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

export default memo(ItemSong);
