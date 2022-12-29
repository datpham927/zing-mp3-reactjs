import classNames from 'classnames/bind';
import ButtonAction from '~/components/Button/ButtonAction';
import style from './Private.module.scss';

const cx = classNames.bind(style);

function Empty({ link, title }) {
    return (
        <div className={cx('empty')}>
            <img src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/empty-mv-dark.png" alt="" />
            <h3>{title}</h3>
            <ButtonAction className={cx('discover')} link={link}>
                KHÁM PHÁ NGAY
            </ButtonAction>
        </div>
    );
}

export default Empty;
