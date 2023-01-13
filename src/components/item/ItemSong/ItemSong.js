/* eslint-disable react-hooks/exhaustive-deps */
import classNames from 'classnames/bind';
import { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Button from '~/components/Button';
import { setOpenLyric, zingAction } from '~/redux/action';
import styles from './ItemSong.module.scss';
import { setSongFavorite } from '~/redux/FavoriteList';
import { setActivePlay, setLoadMusic } from '~/redux/dataControl';
import Duration from '~/components/number/time/Duration';
import LoadImg from '~/components/load/loadImg/LoadImg';
import { IconLoadMusic } from '~/components/Icons/Icons';
import toastMessage from '~/components/modal/toast';
import smoothScrollIntoView from 'smooth-scroll-into-view-if-needed';

const cx = classNames.bind(styles);
function ItemSong({ data, type = '', index = '', onClick, className }) {
    const [favorite, setFavorite] = useState([]);
    const { idAudio, loadMusic, activePlay } = useSelector((state) => state.dataControl);
    const { songFavorite } = useSelector((state) => state.Favorite);
    const { user } = useSelector((state) => state.action);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        setFavorite(songFavorite?.map((e) => e.encodeId));
    }, [songFavorite]);

    const handleLike = () => {
        user ? dispatch(setSongFavorite(data)) : toastMessage('Bạn vui lòng đăng nhập');
    };
    const handlePlay = () => {
        if (data?.streamingStatus === 1) {
            onClick();
            if (data?.encodeId === idAudio.encodeId) {
                dispatch(setLoadMusic(true));
            } else {
                dispatch(setLoadMusic(false));
            }
        } else {
            dispatch(zingAction.actions.setModalVip(true));
        }
        dispatch(setActivePlay(true));
    };

    const handleLyric = () => {
        handlePlay();
        if (data?.streamingStatus === 1) {
            dispatch(setOpenLyric(true));
        }
    };
    const handlePause = () => {
        dispatch(setActivePlay(false));
    };

    useEffect(() => {
        const songPlayView = document.querySelector('.ItemSong_active__3E3Wz');
        if (!songPlayView) return;
        setTimeout(() => {
            smoothScrollIntoView(songPlayView, {
                block: 'center',
                behavior: 'smooth',
                scrollMode: 'if-needed',
            });
        }, 200);
    }, [idAudio]);
    return type === 'song-12' ? (
        <li
            className={cx('item', data?.streamingStatus === 2 && 'vip') + ' l-12 c-12 m-12 col'}
            onDoubleClick={() => handlePlay()}
        >
            <div className={cx('media', className, data?.encodeId === idAudio?.encodeId && 'active')}>
                <div className={cx('media-wrapper')}>
                    <div className={cx('media-left')}>
                        <div className={cx('thumb')}>
                            <LoadImg>
                                <img src={data?.thumbnail} alt="" />
                            </LoadImg>
                            {activePlay === true && data?.encodeId === idAudio?.encodeId ? (
                                <div className={cx('song-play')} onClick={() => handlePause()}>
                                    {loadMusic ? (
                                        <img
                                            src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                                            alt=""
                                        />
                                    ) : (
                                        <IconLoadMusic />
                                    )}
                                </div>
                            ) : (
                                <div
                                    className={cx('play', data?.encodeId === idAudio?.encodeId && 'pause')}
                                    onClick={() => handlePlay()}
                                >
                                    <i className="icon action-play ic-play"></i>
                                </div>
                            )}
                        </div>
                        <div className={cx('info')}>
                            <div style={{ display: 'flex' }}>
                                <h3 className={cx('title')}>{data?.title}</h3>
                                {data?.streamingStatus === 2 && (
                                    <img
                                        src="https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.7.34/static/media/vip-label.3dd6ac7e.svg"
                                        alt=""
                                    />
                                )}
                            </div>
                            <span className={cx('singer')}>
                                {data?.artists?.map((i, index) => (
                                    <span key={uuidv4()}>
                                        <span>
                                            <Link to={i.link}>{i.name}</Link>
                                        </span>
                                        {index < data?.artists?.length - 1 && ', '}
                                    </span>
                                ))}
                            </span>
                        </div>
                    </div>
                    <div className={cx('media-main') + ' c-0'}>
                        <h3 className={cx('title')} onClick={() => navigate(data?.link)}>
                            {data?.title}
                        </h3>
                    </div>
                    <div className={cx('media-right')}>
                        <div className={cx('action')}>
                            <Button
                                small
                                content="Phát cùng lời hát"
                                disable={!data?.hasLyric || data?.streamingStatus === 2}
                                onClick={handleLyric}
                                className={cx('icon')}
                                iconLeft={<i className="icon ic-karaoke"></i>}
                            />
                            <Button
                                className={cx('icon', favorite?.includes(data?.encodeId) && user && 'active-tym')}
                                onClick={() => handleLike()}
                                small
                                content={
                                    favorite?.includes(data?.encodeId) && user
                                        ? 'Xóa khỏi thư viện'
                                        : 'Thêm vào Thư viện'
                                }
                                iconLeft={
                                    favorite?.includes(data?.encodeId) && user ? (
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
                            <span>{<Duration duration={data?.duration} />}</span>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    ) : type === 'top100' ? (
        <li
            className={cx('item', data?.streamingStatus === 2 && 'vip') + ' l-12 c-12 m-12 col'}
            onDoubleClick={() => handlePlay()}
        >
            <div className={cx('media', className, data?.encodeId === idAudio?.encodeId && 'active')}>
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
                        {data?.rakingStatus !== 0 ? (
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

                                <h3>{Math.abs(data?.rakingStatus)}</h3>
                            </div>
                        ) : (
                            <h1 className={cx('sort')}>
                                <i className="fa-solid fa-minus"></i>
                            </h1>
                        )}
                    </div>
                    <div className={cx('media-left', 'media-left-mb')}>
                        <div className={cx('thumb')}>
                            <LoadImg>
                                <img src={data?.thumbnail} alt="" />
                            </LoadImg>
                            {activePlay === true && data?.encodeId === idAudio?.encodeId ? (
                                <div className={cx('song-play')} onClick={() => handlePause()}>
                                    {loadMusic ? (
                                        <img
                                            src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                                            alt=""
                                        />
                                    ) : (
                                        <IconLoadMusic />
                                    )}
                                </div>
                            ) : (
                                <div
                                    className={cx('play', data?.encodeId === idAudio?.encodeId && 'pause')}
                                    onClick={() => handlePlay()}
                                >
                                    <i className="icon action-play ic-play"></i>
                                </div>
                            )}
                        </div>
                        <div className={cx('info')}>
                            <div style={{ display: 'flex' }}>
                                <h3 className={cx('title')}>{data?.title}</h3>
                                {data?.streamingStatus === 2 && (
                                    <img
                                        src="https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.7.34/static/media/vip-label.3dd6ac7e.svg"
                                        alt=""
                                    />
                                )}
                            </div>
                            <span className={cx('singer')}>
                                {data?.artists?.map((i, index) => (
                                    <span key={uuidv4()}>
                                        <span>
                                            <Link to={i.link}>{i.name}</Link>
                                        </span>
                                        {index < data?.artists?.length - 1 && ', '}
                                    </span>
                                ))}
                            </span>
                        </div>
                    </div>
                    <div className={cx('media-main') + ' c-0'}>
                        <h3 className={cx('title')} onClick={() => navigate(data?.link)}>
                            {data?.title}
                        </h3>
                    </div>
                    <div className={cx('media-right') + ' c-0'}>
                        <div className={cx('action')}>
                            <Button
                                small
                                content="Phát cùng lời hát"
                                disable={!data?.hasLyric || data?.streamingStatus === 2}
                                onClick={handleLyric}
                                className={cx('icon')}
                                iconLeft={<i className="icon ic-karaoke"></i>}
                            />
                            <Button
                                className={cx('icon', favorite?.includes(data?.encodeId) && user && 'active-tym')}
                                onClick={() => handleLike()}
                                small
                                content={
                                    favorite?.includes(data?.encodeId) && user
                                        ? 'Xóa khỏi thư viện'
                                        : 'Thêm vào Thư viện'
                                }
                                iconLeft={
                                    favorite?.includes(data?.encodeId) && user ? (
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
                            <span>{<Duration duration={data?.duration} />}</span>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    ) : type === 'top100-small' ? (
        <li
            className={cx('item', data?.streamingStatus === 2 && 'vip') + ' l-12 c-12 m-12 col'}
            onDoubleClick={() => handlePlay()}
        >
            <div className={cx('media', className, data?.encodeId === idAudio?.encodeId && 'active')}>
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
                        {data?.rakingStatus !== 0 ? (
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

                                <h3>{Math.abs(data?.rakingStatus)}</h3>
                            </div>
                        ) : (
                            <h1 className={cx('sort')}>
                                <i className="fa-solid fa-minus"></i>
                            </h1>
                        )}
                    </div>
                    <div className={cx('media-left')}>
                        <div className={cx('thumb')}>
                            <LoadImg>
                                <img src={data?.thumbnail} alt="" />
                            </LoadImg>
                            {activePlay === true && data?.encodeId === idAudio?.encodeId ? (
                                <div className={cx('song-play')} onClick={() => handlePause()}>
                                    {loadMusic ? (
                                        <img
                                            src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                                            alt=""
                                        />
                                    ) : (
                                        <IconLoadMusic />
                                    )}
                                </div>
                            ) : (
                                <div
                                    className={cx('play', data?.encodeId === idAudio?.encodeId && 'pause')}
                                    onClick={() => handlePlay()}
                                >
                                    <i className="icon action-play ic-play"></i>
                                </div>
                            )}
                        </div>
                        <div className={cx('info', 'info-top100-small')}>
                            <div style={{ display: 'flex' }}>
                                <h3 className={cx('title')}>{data?.title}</h3>
                                {data?.streamingStatus === 2 && (
                                    <img
                                        src="https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.7.34/static/media/vip-label.3dd6ac7e.svg"
                                        alt=""
                                    />
                                )}
                            </div>
                            <span className={cx('singer')}>
                                {data?.artists?.map((i, index) => (
                                    <span key={uuidv4()}>
                                        <span>
                                            <Link to={i.link}>{i.name}</Link>
                                        </span>
                                        {index < data?.artists?.length - 1 && ', '}
                                    </span>
                                ))}
                            </span>
                        </div>
                    </div>
                    <div className={cx('media-right')}>
                        <div className={cx('action')}>
                            <Button
                                className={cx('icon', favorite?.includes(data?.encodeId) && user && 'active-tym')}
                                onClick={() => handleLike()}
                                small
                                content={
                                    favorite?.includes(data?.encodeId) && user
                                        ? 'Xóa khỏi thư viện'
                                        : 'Thêm vào Thư viện'
                                }
                                iconLeft={
                                    favorite?.includes(data?.encodeId) && user ? (
                                        <i className="icon ic-like-full"></i>
                                    ) : (
                                        <i className="icon ic-like"></i>
                                    )
                                }
                            />
                        </div>
                        <div className={cx('duration')}>
                            <span>{<Duration duration={data?.duration} />}</span>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    ) : type === 'player-queue' ? (
        <li
            className={cx('item', data?.streamingStatus === 2 && 'vip') + ' l-12 c-12 m-12'}
            onDoubleClick={() => handlePlay()}
        >
            <div className={cx('media', className, data?.encodeId === idAudio?.encodeId && 'queue-active')}>
                <div className={cx('media-wrapper')}>
                    <div className={cx('media-left')} style={{ width: '100%' }}>
                        <div className={cx('thumb')}>
                            <img src={data?.thumbnail} alt="" />
                            {activePlay === true && data?.encodeId === idAudio?.encodeId ? (
                                <div className={cx('song-play')} onClick={() => handlePause()}>
                                    {loadMusic ? (
                                        <img
                                            src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                                            alt=""
                                        />
                                    ) : (
                                        <IconLoadMusic />
                                    )}
                                </div>
                            ) : (
                                <div
                                    className={cx('play', data?.encodeId === idAudio?.encodeId && 'pause')}
                                    onClick={() => handlePlay()}
                                >
                                    <i className="icon action-play ic-play"></i>
                                </div>
                            )}
                        </div>
                        <div className={cx('info', 'weight')}>
                            <div style={{ display: 'flex' }}>
                                <h3 className={cx('title')}>{data?.title}</h3>
                                {data?.streamingStatus === 2 && (
                                    <img
                                        src="https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.7.34/static/media/vip-label.3dd6ac7e.svg"
                                        alt=""
                                    />
                                )}
                            </div>
                            <span className={cx('singer')}>
                                {data?.artists?.map((i, index) => (
                                    <span key={uuidv4()}>
                                        <span>
                                            <Link to={i.link}>{i.name}</Link>
                                        </span>
                                        {index < data?.artists?.length - 1 && ', '}
                                    </span>
                                ))}
                            </span>
                        </div>
                    </div>
                    <div className={cx('media-right')}>
                        <div className={cx('action')}>
                            <Button
                                className={cx('icon')}
                                onClick={() => handleLike()}
                                small
                                content={
                                    favorite?.includes(data?.encodeId) && user
                                        ? 'Xóa khỏi thư viện'
                                        : 'Thêm vào Thư viện'
                                }
                                iconLeft={
                                    favorite?.includes(data?.encodeId) && user ? (
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
        <li
            className={cx('item', data?.streamingStatus === 2 && 'vip') + ' l-12 c-12 m-12'}
            onDoubleClick={() => handlePlay()}
        >
            <div className={cx('media', className)}>
                <div className={cx('media-wrapper')}>
                    <div className={cx('media-left')} style={{ width: '100%' }}>
                        <div className={cx('thumb')}>
                            <img src={data?.thumbnail} alt="" />
                            <div className={cx('play')} onClick={() => handlePlay()}>
                                <i className="icon action-play ic-play"></i>
                            </div>
                        </div>
                        <div className={cx('info', 'weight')}>
                            <div style={{ display: 'flex' }}>
                                <h3 className={cx('title')}>{data?.title}</h3>
                                {data?.streamingStatus === 2 && (
                                    <img
                                        src="https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.7.34/static/media/vip-label.3dd6ac7e.svg"
                                        alt=""
                                    />
                                )}
                            </div>
                            <span className={cx('singer')}>
                                {data?.artists?.map((i, index) => (
                                    <span key={uuidv4()}>
                                        <span>
                                            <Link to={i.link}>{i.name}</Link>
                                        </span>
                                        {index < data?.artists?.length - 1 && ', '}
                                    </span>
                                ))}
                            </span>
                        </div>
                    </div>
                    <div className={cx('media-right')}>
                        <div className={cx('action')}>
                            <Button
                                className={cx('icon')}
                                onClick={() => handleLike()}
                                small
                                content={
                                    favorite?.includes(data?.encodeId) && user
                                        ? 'Xóa khỏi thư viện'
                                        : 'Thêm vào Thư viện'
                                }
                                iconLeft={
                                    favorite?.includes(data?.encodeId) && user ? (
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
            className={cx('item', data?.streamingStatus === 2 && 'vip') + ' l-6 m-6 c-12 col'}
            onDoubleClick={() => handlePlay()}
        >
            <div className={cx('media', className, data?.encodeId === idAudio?.encodeId && 'active')}>
                <div className={cx('media-wrapper')}>
                    <div className={cx('media-left')}>
                        <div className={cx('thumb')}>
                            <LoadImg timeLoad={0}>
                                <img src={data?.thumbnail} alt="" />
                            </LoadImg>
                            {activePlay === true && data?.encodeId === idAudio?.encodeId ? (
                                <div className={cx('song-play')} onClick={() => handlePause()}>
                                    {loadMusic ? (
                                        <img
                                            src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                                            alt=""
                                        />
                                    ) : (
                                        <IconLoadMusic />
                                    )}
                                </div>
                            ) : (
                                <div
                                    className={cx('play', data?.encodeId === idAudio?.encodeId && 'pause')}
                                    onClick={() => handlePlay()}
                                >
                                    <i className="icon action-play ic-play"></i>
                                </div>
                            )}
                        </div>
                        <div className={cx('info', 'weight')}>
                            <div style={{ display: 'flex' }}>
                                <h3 className={cx('title')}>{data?.title}</h3>
                                {data?.streamingStatus === 2 && (
                                    <img
                                        src="https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.7.34/static/media/vip-label.3dd6ac7e.svg"
                                        alt=""
                                    />
                                )}
                            </div>
                            <span className={cx('singer')}>
                                {data?.artists?.map((i, index) => (
                                    <span key={uuidv4()}>
                                        <span>
                                            <Link to={i.link}>{i.name}</Link>
                                        </span>
                                        {index < data?.artists?.length - 1 && ', '}
                                    </span>
                                ))}
                            </span>
                        </div>
                    </div>
                    <div className={cx('media-right')}>
                        <div className={cx('action')}>
                            <Button
                                small
                                content="Phát cùng lời hát"
                                disable={!data?.hasLyric || data?.streamingStatus === 2}
                                onClick={handleLyric}
                                iconLeft={<i className="icon ic-karaoke"></i>}
                            />
                            <Button
                                className={cx('icon', favorite?.includes(data?.encodeId) && user && 'active-tym')}
                                onClick={() => handleLike()}
                                small
                                content={
                                    favorite?.includes(data?.encodeId) && user
                                        ? 'Xóa khỏi thư viện'
                                        : 'Thêm vào Thư viện'
                                }
                                iconLeft={
                                    favorite?.includes(data?.encodeId) && user ? (
                                        <i className="icon ic-like-full"></i>
                                    ) : (
                                        <i className="icon ic-like"></i>
                                    )
                                }
                            />
                        </div>
                        <div className={cx('duration')}>
                            <span>{<Duration duration={data?.duration} />}</span>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default memo(ItemSong);
