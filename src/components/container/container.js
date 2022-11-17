import classNames from 'classnames/bind';
import styles from './container.module.scss';
const cx = classNames.bind(styles);
function Container({ children, title = '' }) {
    return (
        <div className={cx('container')}>
            <h1 className={cx('header')}>{title}</h1>
            <div className={cx('body') + ' row'}>{children}</div>
        </div>
    );
}

export default Container;
