import className from 'classnames/bind';
import { Link } from 'react-router-dom';
import style from './ItemNewRelease.modul.scss';

const cx = className.bind(style);
function ItemNewRelease({ data, index }) {
    return (
        <li className={cx('new-release') + ' l-4'}>
            <div className={cx('wrapper')}>
                <div className={cx('left')}>
                    <img src={data.thumbnailM} alt="" />
                    <div className={cx('play')}>
                        <i className="icon action-play ic-play"></i>
                    </div>
                    <div className={cx('song-play')}>
                        <img src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif" alt="" />
                    </div>
                </div>
                <div className={cx('right')}>
                    <h1>{data?.title}</h1>
                    <span className={cx('singer')}>
                        {data?.artists?.map((i, index) => (
                            <div key={index}>
                                <Link to={`/nghesi/${i.alias}`}>{i.name}</Link>
                                {index < data?.artists.length - 1 && ', '}
                            </div>
                        ))}
                    </span>
                    <div className={cx('order')}>
                        <span>#{index}</span>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default ItemNewRelease;
