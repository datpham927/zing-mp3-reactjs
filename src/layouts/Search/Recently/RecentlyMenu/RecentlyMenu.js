import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import styles from './RecentlyMenu.module.scss';
import RecentlyItem from '../RecentlyItem';

const cx = classNames.bind(styles);

function RecentlyMenu({ data }) {
    return (
        <div className={cx('recently')}>
            <div className={cx('header')}>
                <h1>Gợi ý kết quả</h1>
            </div>
            <div className={cx('body')}>
                {data.map((item) => (
                    <RecentlyItem key={item.encodeId} data={item} />
                ))}
            </div>
        </div>
    );
}
RecentlyMenu.propTypes = {
    data: PropTypes.object.isRequired,
};
export default RecentlyMenu;
