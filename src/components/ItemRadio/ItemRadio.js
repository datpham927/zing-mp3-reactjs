import className from 'classnames/bind';
import Follow from '../follow/Follow';
import style from './ItemRadio.module.scss';
const cx = className.bind(style);
function ItemRadio({ data, col = 'l-2' }) {
    return (
        <div className={`col` + col}>
            <div className={cx('radio-item')}>
                <div className={cx('wrapper-image')}>
                    <div className={cx('image')}>
                        <img src={data?.program?.thumbnail} alt={data?.program?.title} />
                        <div className={cx('icon-play')}>
                            <i className="icon action-play ic-play"></i>
                        </div>
                    </div>
                    <div className={cx('image-small')}>
                        <img src={data?.host?.thumbnail} alt={data?.host?.name} />
                    </div>
                </div>
                <div className={cx('info')}>
                    <h1>{data?.host.name}</h1>
                    <span>
                        <Follow follow={data.activeUsers} />
                        đang nghe
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ItemRadio;
