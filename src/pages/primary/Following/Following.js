/* eslint-disable no-const-assign */
import className from 'classnames/bind';
import style from './Following.module.scss';
import BodyFollowing from './BodyFollowing';
import HeaderFollowing from './HeaderFollowing';
const cx = className.bind(style);
function Following() {
    return (
        <div className={cx('wrapper')}>
            <HeaderFollowing />
            <BodyFollowing />
        </div>
    );
}

export default Following;
