import className from 'classnames/bind';
import LoadImg from '~/components/load/loadImg/LoadImg';
import toastMessage from '~/components/modal/toast';
import Follow from '~/components/number/follow/Follow';

import style from './ItemRadio.module.scss';
const cx = className.bind(style);
function ItemRadio({ data, col = 'l-2 m-2-4' }) {
    return (
        <div className={`col` + col}>
            <div className={cx('radio-item')} onClick={() => toastMessage('phần này gọi api được không')}>
                <div className={cx('wrapper-image')}>
                    <div className={cx('image')}>
                        {data?.program?.thumbnail ? (
                            <img src={data?.program?.thumbnail} alt={data?.program?.title} />
                        ) : (
                            <LoadImg className={cx('image')} radius />
                        )}
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
