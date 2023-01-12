import classNames from 'classnames/bind';

import SuggestItem from './SuggestItem';
import styles from './SuggestMenu.module.scss';

const cx = classNames.bind(styles);

function SuggestMenu({ data = [], onSubmit }) {
    return (
        <div className={cx('Keywords')}>
            <div className={cx('Keywords-header')}>
                <h1>Đề Xuất Cho Bạn</h1>
            </div>
            <div className={cx('Keywords-body')}>
                {data?.map(
                    (item, index) => index < 5 && <SuggestItem key={uuidv4()} data={item} onSubmit={onSubmit} />,
                )}
            </div>
        </div>
    );
}
export default SuggestMenu;
