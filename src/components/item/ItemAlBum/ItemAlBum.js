import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { zingAction } from '~/redux/action';
import Button from '../../Button';
import styles from './ItemAlBum.module.scss';
import LoadImg from '~/components/load/loadImg/LoadImg';
import { setActivePlay, setIdAudio, setLoadMusic } from '~/redux/dataControl';
import Duration from '~/components/number/time/Duration';
import { setPlayListTitle } from '~/redux/FavoriteList';
import { IconLoadMusic } from '~/components/Icons/Icons';

const cx = classNames.bind(styles);

function ItemAlbum({ data, onClick }) {
    const dispatch = useDispatch();
    const { idAudio, loadMusic, activePlay } = useSelector((state) => state.dataControl);

    const handlePlay = () => {
        if (data?.streamingStatus === 1) {
            dispatch(setIdAudio(data));
            dispatch(setPlayListTitle([]));
            if (data.encodeId === idAudio?.encodeId) {
                dispatch(setLoadMusic(true));
            } else {
                dispatch(setLoadMusic(false));
            }
            onClick();
        } else {
            dispatch(zingAction.actions.setModalVip(true));
        }
    };
    const handlePause = () => {
        dispatch(setActivePlay(false));
    };
    return (
        <div className={cx('item', data?.streamingStatus === 2 && 'vip') + ' l-4 m-4 c-12'}>
            <div className={cx('include', data.encodeId === idAudio?.encodeId && 'active')} onDoubleClick={handlePlay}>
                <div className={cx('left')}>
                    <div className={cx('wrapper-img')}>
                        {data?.thumbnail ? (
                            <img src={data?.thumbnail} className={cx('image')} alt="" />
                        ) : (
                            <LoadImg className={cx('image')} />
                        )}
                        {activePlay === true && data?.encodeId === idAudio?.encodeId ? (
                            <div className={cx('play-song')} onClick={() => handlePause()}>
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
                                className={cx('icon-play', data?.encodeId === idAudio?.encodeId && 'play')}
                                onClick={handlePlay}
                            >
                                <ion-icon name="play" role="img" className="md hydrated" aria-label="play"></ion-icon>
                            </div>
                        )}
                    </div>
                    <div className={cx('info')}>
                        <div className={cx('name')}>
                            <h1 className={cx('song')}>{data.title}</h1>
                            {data?.streamingStatus === 2 && (
                                <img
                                    src="https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.7.34/static/media/vip-label.3dd6ac7e.svg"
                                    alt=""
                                />
                            )}
                        </div>
                        <span className={cx('singer')}>
                            {data?.artists?.map((item, index) => (
                                <li key={index}>
                                    <Link to={item?.link}>{item.name}</Link>
                                    {index < data.artists?.length - 1 && ', '}
                                </li>
                            ))}
                        </span>
                        <span className={cx('time')}>
                            <Duration duration={data.duration} />
                        </span>
                    </div>
                </div>
                <Button content="Khác" className={cx('more')} iconLeft={<i className="icon ic-more"></i>} />
            </div>
        </div>
    );
}

export default ItemAlbum;
