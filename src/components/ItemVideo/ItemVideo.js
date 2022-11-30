/* eslint-disable no-useless-concat */
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Duration from '../duration/Duration';
import LoadImg from '../loadImg/LoadImg';
import styles from './ItemVideo.module.scss';

const cx = classNames.bind(styles);
function ItemVideo({ data, timeLoad = 2000 }) {
    return (
        data && (
            <li className={cx('item') + ' l-4 col'}>
                <div className={cx('wrapper')}>
                    <LoadImg timeLoad={timeLoad} className={cx('load-video')}>
                        <div className={cx('video-img')}>
                            <img src={data?.thumbnailM} alt="" />
                            <div className={cx('play')}>
                                <i className="icon ic-play-circle-outline"></i>
                            </div>
                            <div className={cx('time')}>
                                <span>{<Duration duration={data?.duration} />}</span>
                            </div>
                        </div>
                    </LoadImg>
                    <div className={cx('video-info')}>
                        <div className={cx('info-img')}>
                            <LoadImg radius timeLoad={timeLoad}>
                                <img src={data?.thumbnail} alt="" />
                            </LoadImg>
                        </div>
                        <div className={cx('content')}>
                            <h3 className={cx('title')}>{data.title}</h3>
                            <div className={cx('singer')}>
                                {data?.artists?.map((i, index) => (
                                    <>
                                        <Link to={`/nghesi/${i.alias}`}>{i.name}</Link>
                                        {index < data?.artists.length - 1 && ', '}
                                    </>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        )
    );
}

export default ItemVideo;
