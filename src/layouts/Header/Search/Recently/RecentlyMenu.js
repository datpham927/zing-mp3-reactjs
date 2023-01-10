import classNames from 'classnames/bind';
import styles from './RecentlyMenu.module.scss';

import RecentlyItem from './RecentlyItem';

const cx = classNames.bind(styles);

function RecentlyMenu({ data, onClick }) {
    return (
        <div className={cx('recently')}>
            <div className={cx('header')}>
                <h1>Gợi ý kết quả</h1>
            </div>
            <div className={cx('body')}>
                {data?.map((item) => (
                    <RecentlyItem key={item.encodeId} data={item} onClick={onClick} />
                ))}
            </div>
        </div>
    );
}

export default RecentlyMenu;
