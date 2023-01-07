/* eslint-disable no-const-assign */
import className from 'classnames/bind';
import style from './MvHeader.module.scss';
import ButtonAction from '~/components/Button/ButtonAction';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setKindTitle } from '~/redux/dataMV';
const cx = className.bind(style);

function MvHeader() {
    const location = useLocation();
    const dispatch = useDispatch();
    return (
        <div className={cx('header')}>
            <h1>MV</h1>
            <div className={cx('select-menu')}>
                <ButtonAction
                    className={cx('btn', location.pathname.includes('Viet-Nam') ? 'active' : '')}
                    btnItem
                    link={'/the-loai-video/Viet-Nam/IWZ9Z08I.html'}
                    onClick={() => dispatch(setKindTitle('Tất Cả'))}
                >
                    VIỆT NAM
                </ButtonAction>
                <ButtonAction
                    className={cx('btn', location.pathname.includes('Au-My') ? 'active' : '')}
                    btnItem
                    link={'/the-loai-video/Au-My/IWZ9Z08O.html'}
                    onClick={() => dispatch(setKindTitle('Tất Cả'))}
                >
                    US-UK
                </ButtonAction>
                <ButtonAction
                    className={cx('btn', location.pathname.includes('Han-Quoc') ? 'active' : '')}
                    btnItem
                    link={'/the-loai-video/Han-Quoc/IWZ9Z08W.html'}
                    onClick={() => dispatch(setKindTitle('Tất Cả'))}
                >
                    K-POP
                </ButtonAction>
                <ButtonAction
                    className={cx('btn', location.pathname.includes('Khong-Loi') ? 'active' : '')}
                    btnItem
                    link={'/the-loai-video/Khong-Loi/IWZ9Z086.html'}
                    onClick={() => dispatch(setKindTitle('Tất Cả'))}
                >
                    HÒA TẤU
                </ButtonAction>
            </div>
        </div>
    );
}

export default MvHeader;
