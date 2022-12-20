import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { zingCounter } from '~/redux/action';
import Button from '../Button';
import Duration from '../time/Duration';
import LoadImg from '../loadImg/LoadImg';
import styles from './ItemAlBum.module.scss';

const cx = classNames.bind(styles);

function ItemAlbum({ data }) {
    const dispatch = useDispatch();
    const handleOnClick = () => {
        if (data.streamingStatus === 2) {
            dispatch(zingCounter.actions.setModalVip(true));
        }
    };
    return (
        <div
            className={cx('item', data?.streamingStatus === 2 && 'vip') + ' l-4 m-6 c-12 m-pro-6'}
            onDoubleClick={handleOnClick}
        >
            <div className={cx('include')}>
                <div className={cx('left')}>
                    <LoadImg>
                        <div className={cx('wrapper-img')}>
                            <img src={data?.thumbnail} className={cx('image')} alt="" />
                            <div className={cx('icon-play')}>
                                <ion-icon name="play" role="img" className="md hydrated" aria-label="play"></ion-icon>
                            </div>
                            <div className={cx('play-song')}>
                                <img
                                    src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                                    alt=""
                                />
                            </div>
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
