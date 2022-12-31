import classNames from 'classnames/bind';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';

import style from './ResultSearch.module.scss';

const cx = classNames.bind(style);

function PageResultSearch() {
    const { id } = useParams();
    // lấy đường dẫn hiện tại sau dấu  /:
    // const title = id.replace(/\s/g, '%20');
    // lấy ra đường dẫn
    let location = useLocation();
    const MENU_RESULT = [
        {
            title: 'BÀI HÁT',
            path: `bai-hat/${id}`,
        },
        {
            title: 'PLAYLIST/ALBUM',
            path: `playlist/${id}`,
        },
        {
            title: 'NGHỆ SĨ/OA',
            path: `artist/${id}`,
        },
        {
            title: 'MV',
            path: `video/${id}`,
        },
    ];

    return (
        <div className={cx('wrapper')}>
            <nav className={cx('header')}>
                <h1 className={cx('title')}>Kết Quả Tìm Kiếm</h1>
                <ul className={cx('menu')}>
                    <li className={cx('item')}>
                        <NavLink
                            to={`tat-ca/${id}`}
                            className={cx(location?.pathname?.indexOf('tat-ca/') >= 0 && 'active')}
                        >
                            TẤT CẢ
                        </NavLink>
                    </li>
                    {MENU_RESULT?.map((item, index) => (
                        <li className={cx('item')} key={index}>
                            <NavLink to={item?.path} className={(nav) => cx({ active: nav.isActive })}>
                                {item?.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
            {/* Outlet chỉ định nơi nội dung xuất hiện */}
            <Outlet />
        </div>
    );
}

export default PageResultSearch;
