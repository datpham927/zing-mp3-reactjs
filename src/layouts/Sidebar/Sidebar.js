import classNames from 'classnames/bind';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import Button from '~/components/Button';
import { Icon } from '~/components/Icons';
import { setBooleanEdit, setModalAddPlayList, setOpenModalLogin } from '~/redux/action';
import ItemSidebar from './ItemSidebar/ItemSidebar';
import style from './Sidebar.module.scss';
const cx = classNames.bind(style);

const MENU_SIDEBAR = [
    {
        encodeId: 'sb1',
        title: 'Cá Nhân',
        icon: <i className="icon  ic-24-LibraryTab"></i>,
        path: '/mymusic',
        type: false,
    },
    {
        encodeId: 'sb2',
        title: 'Khám Phá',
        icon: <i className="icon  ic-24-HomeTab"></i>,
        path: '/',
        type: false,
    },
    {
        encodeId: 'sb3',
        title: '#zingchart',
        icon: <i className="icon  ic-24-ChartTab"></i>,
        path: '/zing-chart',
        type: true,
    },
    {
        encodeId: 'sb4',
        title: 'Radio',
        icon: <i className="icon  ic-24-RadioTab"></i>,
        path: `/radio`,
        type: true,
    },
    {
        encodeId: 'sb5',
        title: 'Theo Dõi',
        icon: <i className="icon  ic-24-FeedTab"></i>,
        path: `/the-loai-nghe-si/Viet-Nam/IWZ9Z08I.html`,
        type: false,
    },
];

const MENU_SCROLL = [
    {
        encodeId: 'sb6',
        title: 'Nhạc Mới',
        icon: <Icon.IconMusic />,
        path: '/moi-phat-hanh',
        type: true,
    },
    {
        encodeId: 'sb7',
        title: 'Thể Loại',
        icon: <i className="icon  ic-24-GenreTab"></i>,
        path: '/hub',
        type: false,
    },
    {
        encodeId: 'sb8',
        title: 'Top 100',
        icon: <i className="icon  ic-24-Top100Tab"></i>,
        path: '/top100',
        type: false,
    },
    {
        encodeId: 'sb9',
        title: 'MV',
        icon: <i className="icon  ic-24-MVTab"></i>,
        path: '/the-loai-video/Viet-Nam/IWZ9Z08I.html',
        type: false,
    },
];
const LIBRARY = [
    {
        title: 'Bài Hát',
        img: 'https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.0.13/static/media/my-song.cf0cb0b4.svg',
        encodeId: '01',
        path: '/library/songs',
    },
    {
        title: 'Playlist',
        img: 'https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.0.13/static/media/my-playlist.7e92a5f0.svg',
        encodeId: '02',
        path: '/library/play-list',
    },
    {
        title: 'Gần Đây',
        img: 'https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.0.13/static/media/my-history.374cb625.svg',
        encodeId: '03',
        path: '/library/recently',
    },
];
function Sidebar() {
    const { booleanControl } = useSelector((state) => state.dataControl);
    const [openMenu, setOpenMenu] = useState(false);
    const { user } = useSelector((state) => state.action);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const handleCreateList = () => {
        if (user) {
            dispatch(setModalAddPlayList(true));
            dispatch(setBooleanEdit(false));
        } else {
            dispatch(setOpenModalLogin(true));
        }
    };
    return (
        <div className={cx('wrapper', openMenu && 'active-menu') + ' c-0'}>
            <Link className={cx('logo')} to={'/'}></Link>
            <div className={cx('menu')}>
                {/* //cá nhân */}
                <div
                    end
                    title={MENU_SIDEBAR[0].title}
                    className={cx('item-navbar', pathname.includes(MENU_SIDEBAR[0].path) && 'active-private')}
                    onClick={() => {
                        if (user) {
                            navigate(MENU_SIDEBAR[0].path);
                        } else {
                            dispatch(setOpenModalLogin(true));
                        }
                    }}
                >
                    <div className={cx('item-wrapper')}>
                        {MENU_SIDEBAR[0].icon}
                        <h1>{MENU_SIDEBAR[0].title}</h1>
                    </div>
                </div>
                {MENU_SIDEBAR.map(
                    (item, index) => index > 0 && <ItemSidebar activeMenu={openMenu} key={item.encodeId} data={item} />,
                )}
                <div className={cx('divide')}></div>
            </div>
            <div className={cx('sidebar-divide')}></div>
            <div className={cx('navbar', booleanControl && 'active')}>
                <div className={cx('navbar-menu')}>
                    {MENU_SCROLL.map((item) => (
                        <ItemSidebar activeMenu={openMenu} key={item.encodeId} data={item} />
                    ))}
                </div>
                {!user ? (
                    <div className={cx('login') + ' m-0'} onClick={() => dispatch(setOpenModalLogin(true))}>
                        <span className={cx('title')}>Đăng nhập để khám phá playlist dành riêng cho bạn</span>
                        <button className={cx('btn')}>ĐĂNG NHẬP</button>
                    </div>
                ) : (
                    <>
                        <div className={cx('zing-vip') + ' m-0'}>
                            <span className={cx('zing-vip-title')}>Nghe nhạc không quảng cáo cùng kho nhạc VIP</span>
                            <button className={cx('btn', 'btn-lever')}>NÂNG CẤP VIP</button>
                        </div>
                        <ul className={cx('library-list')}>
                            <li className={(cx('library-item'), ' m-0')}>
                                <h1 className={cx('library-title')}>Thư viện</h1>
                            </li>
                            {LIBRARY.map((e) => (
                                <NavLink
                                    end
                                    className={(nav) => cx('library-item', { 'active-private': nav.isActive })}
                                    to={e.path}
                                >
                                    <img src={e.img} alt="" />
                                    <span className={cx('content')}>{e.title}</span>
                                </NavLink>
                            ))}
                        </ul>
                    </>
                )}
            </div>
            <div className={cx('create-list', booleanControl && 'active-add-list') + ' m-0'} onClick={handleCreateList}>
                <ion-icon name="add-outline"></ion-icon>
                <span>Tạo playlist mới</span>
            </div>
            <div
                className={cx('expanded', booleanControl && 'active-expanded') + ' l-0'}
                onClick={() => setOpenMenu((e) => ~e)}
            >
                <Button
                    primary
                    className={cx('expanded-btn')}
                    noContent
                    iconLeft={openMenu ? <i class="icon ic-go-left"></i> : <i class="icon ic-go-right"></i>}
                />
            </div>
        </div>
    );
}
export default Sidebar;
