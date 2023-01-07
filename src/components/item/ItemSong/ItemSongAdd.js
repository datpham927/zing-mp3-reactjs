import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Button from '~/components/Button';
import styles from './ItemSong.module.scss';
import { setAddPlayList, setSongFavorite } from '~/redux/FavoriteList';
import { setIdAudio, setLoadMusic } from '~/redux/dataControl';
import Duration from '~/components/number/time/Duration';
import { setActivePlay, zingAction } from '~/redux/action';
import { memo } from 'react';
import LoadImg from '~/components/load/loadImg/LoadImg';
import { IconLoadMusic } from '~/components/Icons/Icons';

const cx = classNames.bind(styles);
function ItemSongAdd({ data, onClick, checkBox = false, type = '' }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [favorite, setFavorite] = useState([]);
    const [checkbox, setCheckbox] = useState([]);
    const { idAudio, loadMusic } = useSelector((state) => state.dataControl);
    const { activePlay } = useSelector((state) => state.action);
    const { songFavorite, addPlayList } = useSelector((state) => state.Favorite);

    useEffect(() => {
        setFavorite(songFavorite?.map((e) => e.encodeId));
    }, [songFavorite]);

    useEffect(() => {
        setCheckbox(addPlayList?.map((e) => e.encodeId));
    }, [addPlayList]);

    const handleLike = () => {
        dispatch(setSongFavorite(data));
    };

    const handlePlay = () => {
        if (data?.streamingStatus === 1) {
            dispatch(setIdAudio(data));
            onClick();
            if (data.encodeId === idAudio.encodeId) {
                dispatch(setLoadMusic(true));
            } else {
                dispatch(setLoadMusic(false));
            }
        } else {
            dispatch(zingAction.actions.setModalVip(true));
        }
        dispatch(setActivePlay(true));
    };

    const handlePause = () => {
        dispatch(setActivePlay(false));
    };

    const handleCheckbox = () => {
        dispatch(setAddPlayList(data));
    };

    return (
        <li className={cx('item', 'add') + ' l-12 col'}>
            <div
                className={cx(
                    'media',
                    (data.encodeId === idAudio?.encodeId || checkbox.includes(data.encodeId)) &&
                        (type === 'private' ? 'is-active' : 'active'),
                )}
            >
                <div className={cx('media-wrapper')} onDoubleClick={() => handlePlay()}>
                    <div className={cx('media-left')}>
                        <div
                            className={cx(
                                'action-checkbox',
                                !checkBox && 'not-checkbox',
                                checkbox.includes(data.encodeId) && 'active-checkbox',
                            )}
                        >
                            <i className="icon ic-song"></i>
                            <div className={cx('checkbox')}>
                                <input
                                    type="checkBox"
                                    onClick={handleCheckbox}
                                    defaultChecked={checkbox.includes(data.encodeId)}
                                ></input>
                            </div>
                        </div>
                        <div className={cx('thumb')}>
                            {data.thumbnail ? <img src={data.thumbnail} alt="" /> : <LoadImg />}
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
                        <span className={cx('title')} onClick={() => navigate(data.link)}>
                            {data?.title}
                        </span>
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
                                content={favorite?.includes(data.encodeId) ? 'Xóa khỏi thư viện' : 'Thêm vào Thư viện'}
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
                            <span>{<Duration duration={data?.duration} />}</span>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default memo(ItemSongAdd);
