/* eslint-disable no-const-assign */
import className from 'classnames/bind';
import style from './Mv.module.scss';
import ButtonAction from '~/components/Button/ButtonAction';
import { Outlet, useLocation } from 'react-router-dom';
import Container from '~/components/container/Container';
const cx = className.bind(style);
function Mv() {
    const location = useLocation();

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <h1>MV</h1>
                <div className={cx('select-menu')}>
                    <ButtonAction
                        className={cx('btn', location.pathname.includes('Viet-Nam') ? 'active' : '')}
                        btnItem
                        link={'Viet-Nam/IWZ9Z08I.html'}
                    >
                        VIỆT NAM
                    </ButtonAction>
                    <ButtonAction
                        className={cx('btn', location.pathname.includes('Au-My') ? 'active' : '')}
                        btnItem
                        link={'Au-My/IWZ9Z08O.html'}
                    >
                        US-UK
                    </ButtonAction>
                    <ButtonAction
                        className={cx('btn', location.pathname.includes('Han-Quoc') ? 'active' : '')}
                        btnItem
                        link={'Han-Quoc/IWZ9Z08W.html'}
                    >
                        K-POP
                    </ButtonAction>
                    <ButtonAction
                        className={cx('btn', location.pathname.includes('Khong-Loi') ? 'active' : '')}
                        btnItem
                        link={'Khong-Loi/IWZ9Z086.html'}
                    >
                        HÒA TẤU
                    </ButtonAction>
                </div>
            </div>
            <Container>
                <Outlet />
            </Container>
        </div>
    );
}

export default Mv;
