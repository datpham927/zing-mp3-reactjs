import classNames from 'classnames/bind';
import Button from '~/components/Button';
import style from './Private.module.scss';

const cx = classNames.bind(style);

function Private() {
    return <div className={cx('wrapper')}></div>;
}

export default Private;
