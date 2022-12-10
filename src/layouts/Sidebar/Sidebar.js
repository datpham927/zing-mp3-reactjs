import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { Icon } from '~/components/Icons';

import ItemSidebar from './ItemSidebar/ItemSidebar';
import style from './Sidebar.module.scss';
const cx = classNames.bind(style);

const MENU_SIDEBAR = [
    {
        id: 0,
        title: 'Cá Nhân',
        icon: <i className="icon  ic-24-LibraryTab"></i>,
        path: '/mymusic',
        type: false,
    },
    {
        id: 0,
        title: 'Khám Phá',
        icon: <i className="icon  ic-24-HomeTab"></i>,
        path: '/',
        type: false,
    },
    {
        id: 0,
        title: '#zingchart',
        icon: <i className="icon  ic-24-ChartTab"></i>,
        path: '/zing-chart',
        type: true,
    },
    {
        id: 0,
        title: 'Radio',
        icon: <i className="icon  ic-24-RadioTab"></i>,
        path: `/radio`,
        type: true,
    },
    {
        id: 0,
        title: 'Theo Dõi',
        icon: <i className="icon  ic-24-FeedTab"></i>,
        path: `/the-loai-nghe-si`,
        type: false,
    },
];

const MENU_SCROLL = [
    {
        id: 0,
        title: 'Nhạc Mới',
        icon: <Icon.IconMusic />,
        path: '/moi-phat-hanh',
        type: true,
    },
    {
        id: 0,
        title: 'Thể Loại',
        icon: <i className="icon  ic-24-GenreTab"></i>,
        path: '/hub',
        type: false,
    },
    {
        id: 0,
        title: 'Top 100',
        icon: <i className="icon  ic-24-Top100Tab"></i>,
        path: '/top100',
        type: false,
    },
    {
        id: 0,
        title: 'MV',
        icon: <i className="icon  ic-24-MVTab"></i>,
        path: '/the-loai-video',
        type: false,
    },
];
function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('logo', 'c-0')}>
                <Link className={cx('logo-pc')} to={'/'}>
                    <img src="https://sona7ns.github.io/zingmp3.vn/assets/img/sidebar-icon/logo/logo-dark.svg" alt="" />
                </Link>
            </div>

            <div className={cx('menu', 'c-0')}>
                {MENU_SIDEBAR.map((item, index) => (
                    <ItemSidebar key={index} data={item} />
                ))}
                <div className={cx('divide')}></div>
            </div>

            <div className={cx('navbar')}>
                <div className={cx('navbar-menu')}>
                    {MENU_SCROLL.map((item, index) => (
                        <ItemSidebar key={index} data={item} />
                    ))}
                </div>
                <div className={cx('login', 'c-0')}>
                    <span className={cx('title')}>Đăng nhập để khám phá playlist dành riêng cho bạn</span>
                    <button className={cx('btn')}>ĐĂNG NHẬP</button>
                </div>
            </div>
            <div className={cx('create-list', 'm-0 ')}>
                <ion-icon className="m-0" name="add-outline"></ion-icon>
                <span className="m-0">Tạo playlist mới</span>
            </div>
        </div>
    );
}

export default Sidebar;
