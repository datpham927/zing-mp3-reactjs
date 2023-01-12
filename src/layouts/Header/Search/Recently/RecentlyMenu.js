import classNames from 'classnames/bind';
import { v4 as uuidv4 } from 'uuid';
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
                    <RecentlyItem key={uuidv4()} data={item} onClick={onClick} />
                ))}
            </div>
        </div>
    );
}

export default RecentlyMenu;
