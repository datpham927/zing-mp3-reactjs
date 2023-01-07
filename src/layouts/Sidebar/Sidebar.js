import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Icon } from '~/components/Icons';
import { setBooleanEdit, setModalAddPlayList } from '~/redux/action';

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
function Sidebar() {
    const { booleanControl } = useSelector((state) => state.dataControl);
    const dispatch = useDispatch();
    return (
        <div className={cx('wrapper')}>
            <div className={cx('logo', 'c-0')}>
                <Link className={cx('logo-pc')} to={'/'}>
                    <img src="https://sona7ns.github.io/zingmp3.vn/assets/img/sidebar-icon/logo/logo-dark.svg" alt="" />
                </Link>
            </div>

            <div className={cx('menu', 'c-0')}>
                {MENU_SIDEBAR.map((item, index) => (
                    <ItemSidebar key={item.encodeId} data={item} />
                ))}
                <div className={cx('divide')}></div>
            </div>

            <div className={cx('navbar', booleanControl && 'active')}>
                <div className={cx('navbar-menu')}>
                    {MENU_SCROLL.map((item, index) => (
                        <ItemSidebar key={item.encodeId} data={item} />
                    ))}
                </div>
                <div className={cx('login', 'c-0')}>
                    <span className={cx('title')}>Đăng nhập để khám phá playlist dành riêng cho bạn</span>
                    <button className={cx('btn')}>ĐĂNG NHẬP</button>
                </div>
            </div>
            <div
                className={cx('create-list', 'm-0 ', booleanControl && 'active-add-list')}
                onClick={() => {
                    dispatch(setModalAddPlayList(true));
                    dispatch(setBooleanEdit(false));
                }}
            >
                <ion-icon className="m-0" name="add-outline"></ion-icon>
                <span className="m-0">Tạo playlist mới</span>
            </div>
        </div>
    );
}

export default Sidebar;
