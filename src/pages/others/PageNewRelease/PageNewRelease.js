import classNames from 'classnames/bind';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import Button from '~/components/Button';
import ButtonAction from '~/components/Button/ButtonAction';
import style from './PageNewRelease.module.scss';

const cx = classNames.bind(style);

function PageNewRelease() {
    const location = useLocation();

    return (
        <div className={cx('NewRelease')}>
            <div className={cx('header')}>
                <div className={cx('top')}>
                    <h1>Mới Phát hành</h1>
                    <Button noContent iconLeft={<i className="icon ic-play"></i>} className={cx('btn')} />
                </div>
                <div className={cx('navbar-menu')}>
                    <div className={cx('navbar-link')}>
                        <NavLink
                            to={'/new-release/song/all'}
                            className={cx(location.pathname.includes('/song') && 'active')}
                        >
                            BÀI HÁT
                        </NavLink>
                    </div>
                    <div className={cx('navbar-link')}>
                        <NavLink
                            to={'/new-release/album/all'}
                            className={cx(location.pathname.includes('/album') && 'active')}
                        >
                            ALBUM
                        </NavLink>
                    </div>
                </div>
                <div className={cx('select-menu')}>
                    <ButtonAction btnItem action={location.pathname.includes('all')} link={'all'}>
                        TẤT CẢ
                    </ButtonAction>
                    <ButtonAction btnItem action={location.pathname.includes('vpop')} link={'vpop'}>
                        VIỆT NAM
                    </ButtonAction>
                    <ButtonAction btnItem action={location.pathname.includes('usuk')} link={'usuk'}>
                        ÂU MỸ
                    </ButtonAction>
                    <ButtonAction btnItem action={location.pathname.includes('kpop')} link={'kpop'}>
                        HÀN QUÓC
                    </ButtonAction>
                    <ButtonAction btnItem action={location.pathname.includes('other')} link={'other'}>
                        KHÁC
                    </ButtonAction>
                </div>
            </div>
            <div className={cx('body')}>
                <div className={cx('body-header')}>
                    <div className={cx('text')}>BÀI HÁT</div>
                    <div className={cx('text')}>THỜI GIAN</div>
                </div>
                <Outlet />
            </div>
        </div>
    );
}

export default PageNewRelease;
