import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import LoadImg from '../loadImg/LoadImg';
import styles from './ItemArtists.module.scss';

const cx = classNames.bind(styles);

function ItemArtists({ data, timeLoad = 2000 }) {
    return (
        <li className={cx('item') + ' l-3 col'}>
            <div className={cx('wrapper')}>
                <LoadImg radius timeLoad={timeLoad}>
                    <Link to={`/nghesi/${data.alias}`}>
                        <div className={cx('image')}>
                            <img src={data.thumbnail} alt="" />
                            <div className={cx('play')}>
                                <i className="icon action-play ic-24-Shuffle"></i>
                            </div>
                        </div>
                    </Link>
                </LoadImg>
                <div className={cx('info')}>
                    <div className={cx('content')}>
                        <div className={cx('singer')}>
                            <Link to={`/nghesi/${data.alias}`}>{data.name}</Link>
                        </div>
                        <span className={cx('follow')}>
                            {data?.totalFollow.toString().substring(0, 2) / 10 + 'M quan tâm'}
                        </span>
                    </div>
                    <button>
                        <i className="icon ic-addfriend"></i>
                        <span>Quan tâm</span>
                    </button>
                </div>
            </div>
        </li>
    );
}

export default ItemArtists;
