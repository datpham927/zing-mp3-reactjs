import classNames from 'classnames/bind';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import LoadImg from '~/components/loadImg/LoadImg';
import { zingCounter } from '~/redux/action';
import { setActivePlay, setIdAudio } from '~/redux/dataAudio';
import Duration from '~/components/time/Duration';
import styles from './ItemSong.module.scss';

const cx = classNames.bind(styles);
function ItemSongAdd({ data, timeLoad = 1000, onClick }) {
    const dispatch = useDispatch();
    const [like, setLike] = useState(false);
    const idAudio = useSelector((state) => state.dataControl.idAudio);
    const play = useSelector((state) => state.dataControl.activePlay);
    const handleLike = () => {
        setLike(!like);
    };
    const handlePlay = () => {
        if (data?.streamingStatus === 1) {
            dispatch(setIdAudio(data.encodeId));
            dispatch(setActivePlay(true));
            onClick();
        } else {
            dispatch(zingCounter.actions.setModalVip(true));
        }
    };
    const handlePause = () => {
        dispatch(setActivePlay(false));
    };

    return (
        <li className={cx('item', 'add') + ' l-12 col'}>
            <div className={cx('media', data.encodeId === idAudio && 'active')}>
                <div className={cx('media-wrapper')} onDoubleClick={() => handlePlay()}>
                    <div className={cx('media-left')}>
                        <div className={cx('action-checkbox')}>
                            <i className="icon ic-song"></i>
                            <div className={cx('checkbox')}>
                                <input type="checkBox"></input>
                            </div>
                        </div>
                        <div className={cx('thumb')}>
                            <LoadImg timeLoad={timeLoad}>
                                <img src={data?.thumbnail} alt="" />
                                {play === true && data?.encodeId === idAudio ? (
                                    <div className={cx('song-play')} onClick={() => handlePause()}>
                                        <img
                                            src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                                            alt=""
                                        />
                                    </div>
                                ) : (
                                    <div
                                        className={cx('play', data?.encodeId === idAudio && 'pause')}
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
                        <h3 className={cx('title')}>{data?.title}</h3>
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
                                onClick={() => handleLike()}
                                small
                                content={like ? 'Đã thêm' : 'Thêm vào Thư viện'}
                                iconLeft={
                                    like ? <i className="icon ic-like-full"></i> : <i className="icon ic-like"></i>
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

export default ItemSongAdd;
