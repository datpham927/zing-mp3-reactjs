import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { zingCounter } from '~/redux/action';
import Button from '../../Button';
import Duration from '../../time/Duration';
import LoadImg from '../../loadImg/LoadImg';
import styles from './ItemAlBum.module.scss';
import { setActivePlay, setIdAudio } from '~/redux/dataAudio';

const cx = classNames.bind(styles);

function ItemAlbum({ data, onClick }) {
    const dispatch = useDispatch();
    const idAudio = useSelector((state) => state.dataControl.idAudio);
    const play = useSelector((state) => state.dataControl.activePlay);
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
        <div className={cx('item', data?.streamingStatus === 2 && 'vip') + ' l-4 m-6 c-12 m-pro-6'}>
            <div className={cx('include', data.encodeId === idAudio && 'active')} onDoubleClick={handlePlay}>
                <div className={cx('left')}>
                    <LoadImg>
                        <div className={cx('wrapper-img')}>
                            <img src={data?.thumbnail} className={cx('image')} alt="" />
                            {play === true && data?.encodeId === idAudio ? (
                                <div className={cx('play-song')} onClick={() => handlePause()}>
                                    <img
                                        src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                                        alt=""
                                    />
                                </div>
                            ) : (
                                <div
                                    className={cx('icon-play', data?.encodeId === idAudio && 'play')}
                                    onClick={handlePlay}
                                >
                                    <ion-icon
                                        name="play"
                                        role="img"
                                        className="md hydrated"
                                        aria-label="play"
                                    ></ion-icon>
                                </div>
                            )}
                        </div>
                    </LoadImg>
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
                                    {index < data.artists.length - 1 && ', '}
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
