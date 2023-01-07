/* eslint-disable no-const-assign */
import className from 'classnames/bind';
import style from './Following.module.scss';
import ButtonAction from '~/components/Button/ButtonAction';
import { useLocation } from 'react-router-dom';
const cx = className.bind(style);

function HeaderFollowing() {
    const location = useLocation();
    return (
        <div className={cx('header')}>
            <div className={cx('select-menu')}>
                <ButtonAction
                    className={cx('btn', location.pathname.includes('Viet-Nam') ? 'active' : '')}
                    btnItem
                    link={'/the-loai-nghe-si/Viet-Nam/IWZ9Z08I.html'}
                >
                    VIỆT NAM
                </ButtonAction>
                <ButtonAction
                    className={cx('btn', location.pathname.includes('Au-My') ? 'active' : '')}
                    btnItem
                    link={'/the-loai-nghe-si/Au-My/IWZ9Z08O.html'}
                >
                    US-UK
                </ButtonAction>
                <ButtonAction
                    className={cx('btn', location.pathname.includes('Han-Quoc') ? 'active' : '')}
                    btnItem
                    link={'/the-loai-nghe-si/Han-Quoc/IWZ9Z08W.html'}
                >
                    K-POP
                </ButtonAction>
                <ButtonAction
                    className={cx('btn', location.pathname.includes('Hoa-Ngu') ? 'active' : '')}
                    btnItem
                    link={'/the-loai-nghe-si/Hoa-Ngu/IWZ9Z08U.html'}
                >
                    HOA NGỮ
                </ButtonAction>
            </div>
        </div>
    );
}

export default HeaderFollowing;
