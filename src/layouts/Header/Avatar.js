/* eslint-disable react/jsx-pascal-case */
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import { Icon } from '../../components/Icons';
import style from './Header.module.scss';
import 'tippy.js/dist/tippy.css';
import { setOpenModalLogin } from '~/redux/action';
import { useDispatch, useSelector } from 'react-redux';
import TippyMenu from '~/components/menu/tippyMenu/TippyMenu';

const cx = classNames.bind(style);

const MENU_LOGOUT = [
    {
        id: 0,
        title: 'Nâng cấp VIP',
        iconLeft: <Icon.IconVip />,
    },
    {
        id: 1,
        title: 'Mua code VIP',
        iconLeft: <i className="icon ic-20-quaility-SQ"></i>,
    },
    {
        id: 1,
        title: 'Đăng xuất',
        iconLeft: <i className="icon ic-log-out"></i>,
        type: 'logOut',
    },
];

function Avatar({ className }) {
    const { currentUser, user } = useSelector((state) => state.action);
    const dispatch = useDispatch();
    return (
        <div className={className}>
            {user ? (
                <TippyMenu MENU_ITEM={MENU_LOGOUT}>
                    <Button src={currentUser?.photoURL} />
                </TippyMenu>
            ) : (
                //------ chưa  đăng nhập ------
                <Button src="https://avatar.talk.zdn.vn/default" onClick={() => dispatch(setOpenModalLogin(true))} />
            )}
        </div>
    );
}

export default Avatar;
