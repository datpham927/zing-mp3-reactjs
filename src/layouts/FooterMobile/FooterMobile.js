import className from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation, useNavigate, useParams } from 'react-router-dom';
import { setOpenModalLogin } from '~/redux/action';
import style from './FooterMobile.module.scss';
const cx = className.bind(style);
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
function FooterMobile() {
    const { pathname } = useLocation();
    const { user } = useSelector((state) => state.action);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = () => {
        if (user) {
            navigate(MENU_SIDEBAR[0]);
        } else {
            navigate('/');
            dispatch(setOpenModalLogin(true));
        }
    };
    return (
        <div className={cx('wrapper') + ' l-0 m-0 '}>
            <div
                end
                to={MENU_SIDEBAR[0].path}
                className={cx('item', pathname.includes(MENU_SIDEBAR[0].path)) + ' c-2-4'}
                onClick={handleClick}
            >
                {MENU_SIDEBAR[0].icon}
                <h3>{MENU_SIDEBAR[0].title}</h3>
            </div>
            {MENU_SIDEBAR.map(
                (e, index) =>
                    index > 0 && (
                        <NavLink end to={e.path} className={(nav) => cx('item', { active: nav.isActive }) + ' c-2-4'}>
                            {e.icon}
                            <h3>{e.title}</h3>
                        </NavLink>
                    ),
            )}
        </div>
    );
}

export default FooterMobile;
