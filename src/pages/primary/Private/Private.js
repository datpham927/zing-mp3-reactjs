import classNames from 'classnames/bind';
import style from './Private.module.scss';

const cx = classNames.bind(style);

function Private() {
    return <div className={cx('wrapper')}>Private</div>;
}

export default Private;
