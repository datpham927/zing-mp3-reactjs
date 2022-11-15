import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import config from '~/components/config';
import { Icon } from '~/components/Icons';
import ItemSidebar from './ItemSidebar/ItemSidebar';
import style from './Sidebar.module.scss';
const cx = classNames.bind(style);

const MENU_SIDEBAR = [
    {
        id: 0,
        title: 'Cá Nhân',
        icon: <i className="icon  ic-24-LibraryTab"></i>,
        path: config.routes.private,
        type: false,
    },
    {
        id: 0,
        title: 'Khám Phá',
        icon: <i className="icon  ic-24-HomeTab"></i>,
        path: config.routes.discover,
        type: false,
    },
    {
        id: 0,
        title: '#zingchart',
        icon: <i className="icon  ic-24-ChartTab"></i>,
        path: config.routes.zingchart,
        type: true,
    },
    {
        id: 0,
        title: 'Radio',
        icon: <i className="icon  ic-24-RadioTab"></i>,
        path: config.routes.radio,
        type: true,
    },
    {
        id: 0,
        title: 'Theo Dõi',
        icon: <i className="icon  ic-24-FeedTab"></i>,
        path: config.routes.following,
        type: false,
    },
];

const MENU_SCROLL = [
    {
        id: 0,
        title: 'Nhạc Mới',
        icon: <Icon.IconMusic />,
        path: config.routes.musicNew,
        type: true,
    },
    {
        id: 0,
        title: 'Thể Loại',
        icon: <i className="icon  ic-24-GenreTab"></i>,
        path: config.routes.category,
        type: false,
    },
    {
        id: 0,
        title: 'Top 100',
        icon: <i className="icon  ic-24-Top100Tab"></i>,
        path: config.routes.top100,
        type: false,
    },
    {
        id: 0,
        title: 'MV',
        icon: <i className="icon  ic-24-MVTab"></i>,
        path: config.routes.mv,
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
                {MENU_SIDEBAR.map((item) => (
                    <ItemSidebar data={item} />
                ))}
                <div className={cx('divide')}></div>
            </div>

            <div className={cx('navbar')}>
                <div className={cx('navbar-menu')}>
                    {MENU_SCROLL.map((item) => (
                        <ItemSidebar data={item} />
                    ))}
                </div>
                <div className={cx('login', 'c-0')}>
                    <span className={cx('title')}>Đăng nhập để khám phá playlist dành riêng cho bạn</span>
                    <button className={cx('btn')}>ĐĂNG NHẬP</button>
                </div>
            </div>
            <div className={cx('create-list', 'm-0 ')}>
                <ion-icon className="m-0" name="add-outline"></ion-icon>
                <span class="m-0">Tạo playlist mới</span>
            </div>
        </div>
    );
}

export default Sidebar;
