import classNames from 'classnames/bind';
import styles from './container.module.scss';
const cx = classNames.bind(styles);
function Container({ children, title = '', path, all, onClick }) {
    return (
        <div className={cx('container')}>
            <div className={cx('header')}>
                <h1 className={cx('title')}>{title}</h1>
                {all && (
                    <div className={cx('all')} onClick={onClick}>
                        <span>TẤT CẢ</span>
                        <i class="icon ic-go-right"></i>
                    </div>
                )}
            </div>
            <div className={cx('body') + ' row'}>{children}</div>
        </div>
    );
}

export default Container;
