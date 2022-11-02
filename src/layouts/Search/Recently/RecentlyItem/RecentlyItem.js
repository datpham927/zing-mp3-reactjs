import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import styles from './RecentlyItem.module.scss';

const cx = classNames.bind(styles);

function RecentlyItem({ data }) {
    return (
        <li className={cx('song-item')}>
            <div className={cx('wrapper-image')}>
                <img src={data.thumbnail} alt="" className={cx('image')} />
                <div className={cx('icon')}>
                    <ion-icon name="play"></ion-icon>
                </div>
                <div className={cx('icon-play')}>
                    <img src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif" alt="" />
                </div>
            </div>
            <div className={cx('title')}>
                <span className={cx('color-title')}>{data.title} </span>
                <small className={cx('color-small')}>{data.artistsNames}</small>
            </div>
        </li>
    );
}
RecentlyItem.ropTypes = {
    data: PropTypes.object,
};
export default RecentlyItem;
