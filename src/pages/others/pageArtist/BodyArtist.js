import classNames from 'classnames/bind';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import style from './PageArtist.module.scss';

const cx = classNames.bind(style);

function BodyArtist() {
    const id = useParams();
    const MENU = [
        {
            title: 'TỔNG QUAN',
            to: `/nghesi/${id.name}`,
        },
        {
            title: 'BÀI HÁT',
            to: 'bai-hat',
        },
        {
            title: 'SINGLE & EP',
            to: 'single',
        },
        {
            title: 'ALBUM',
            to: 'album',
        },
        {
            title: 'MV',
            to: 'video',
        },
    ];

    return (
        <div className={cx('body')}>
            <div className={cx('wrapper')}>
                <ul className={cx('menu')}>
                    {MENU.map((item, index) => (
                        <li key={index} className={cx('link')}>
                            <NavLink end to={item.to} className={(nav) => cx({ active: nav.isActive })}>
                                {item.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
            <Outlet />
        </div>
    );
}

export default BodyArtist;
