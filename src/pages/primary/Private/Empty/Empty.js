import classNames from 'classnames/bind';
import ButtonAction from '~/components/Button/ButtonAction';
import style from './Empty.module.scss';

const cx = classNames.bind(style);

function Empty({ link, title }) {
    return (
        <div className={cx('empty')}>
            <div className={cx('image')}></div>
            <h3>{title}</h3>
            <ButtonAction className={cx('discover')} link={link}>
                KHÁM PHÁ NGAY
            </ButtonAction>
        </div>
    );
}

export default Empty;
