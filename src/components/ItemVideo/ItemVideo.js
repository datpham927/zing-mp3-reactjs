/* eslint-disable no-useless-concat */
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Duration from '../duration/Duration';
import LoadImg from '../loadImg/LoadImg';
import styles from './ItemVideo.module.scss';

const cx = classNames.bind(styles);
function ItemVideo({ data }) {
    return (
        <li className={cx('item') + ' l-4 col'}>
            <div className={cx('wrapper')}>
                {data.thumbnail && (
                    <div className={cx('video-img')}>
                        <img src={data.thumbnail} alt="" />
                        <div className={cx('play')}>
                            <i class="icon ic-play-circle-outline"></i>
                        </div>
                        <div className={cx('time')}>
                            <span>{<Duration duration={data.duration} />}</span>
                        </div>
                    </div>
                )}
                <div className={cx('video-info')}>
                    <div className={cx('info-img')}>
                        <img src={data.artist.thumbnail} alt="" />
                    </div>
                    <div className={cx('content')}>
                        <h3 className={cx('title')}>{data.title}</h3>
                        <span className={cx('singer')}>
                            {data.artistsNames.split(',').map((i, index) => (
                                <>
                                    <span>
                                        <Link to={`/${i}`}>{i}</Link>
                                    </span>
                                    <span>{index < data.artistsNames.split(',').length - 1 && ', '}</span>
                                </>
                            ))}
                        </span>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default ItemVideo;
