import classNames from 'classnames/bind';
import style from './Mv.module.scss';

const cx = classNames.bind(style);

function Mv() {
    return <div className={cx('wrapper')}>Mv</div>;
}

export default Mv;
