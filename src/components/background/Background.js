import classNames from 'classnames/bind';
import styles from './background.module.scss';

const cx = classNames.bind(styles);

function Background() {
    return <div className={cx('background')}></div>;
}

export default Background;
