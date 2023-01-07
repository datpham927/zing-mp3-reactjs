/* eslint-disable react/jsx-pascal-case */
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import { Icon } from '../../components/Icons';
import style from './Header.module.scss';
import 'tippy.js/dist/tippy.css';
import { zingAction } from '~/redux/action';

import TippyMenu from '~/components/menu/tippyMenu/TippyMenu';
import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';
const cx = classNames.bind(style);

const MENU_ITEM = [
    {
        id: 0,
        title: 'Danh sách chặn',
        iconLeft: <i className="icon ic-20-Block"></i>,
        // path: '/block',
    },
    {
        id: 1,
        title: 'Chất lượng nhạc',
        iconLeft: <i className="icon ic-20-quaility-SQ"></i>,
        iconRight: <ion-icon name="chevron-forward-outline"></ion-icon>,
        type: 'quality',
        children: {
            data: [
                {
                    id: 4,
                    title: 'SQ • 128',
                    iconLeft: <i className="icon ic-20-quaility-SQ"></i>,
                    type: 'SQ',
                },
                {
                    id: 5,
                    title: 'HQ • 320',
                    iconLeft: <i className="icon ic-20-quaility"></i>,
                    type: 'HQ',
                },
            ],
        },
    },
    {
        id: 2,
        title: 'Giới thiệu',
        iconLeft: <i className="icon ic-20-info"></i>,
        type: 'separate',
    },
    {
        id: 3,
        title: 'Liên hệ',
        iconLeft: <i className="icon ic-20-Call"></i>,
    },
];
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
        type: 'separate',
    },
];

function HeaderRight() {
    const currentUser = useSelector((state) => state.action.currentUser);

    const dispatch = useDispatch();
    const refAvatar = useRef();
    return (
        <div className={cx('right') + ' l-5'}>
            {/* ------ theme ------ */}
            <Button
                primary
                iconLeft={<Icon.IconTopic />}
                content="Chủ đề"
                onClick={() => dispatch(zingAction.actions.modalTheme(true))}
            />
            {/* ------ vip ------ */}
            <Button disable iconLeft={<Icon.IconVip />} content="Nâng cấp VIP" />
            {/* ------ tải file ------*/}
            <Button primary type={<Icon.upload />} content="Tải lên" />
            {/* ------ setting ------*/}
            <TippyMenu MENU_ITEM={MENU_ITEM}>
                <div className={cx('setting')}>
                    <ion-icon name="settings-outline"></ion-icon>
                </div>
            </TippyMenu>
            {currentUser ? (
                //------ đã đăng nhập ------
                <TippyMenu MENU_ITEM={MENU_LOGOUT}>
                    <Button
                        ref={refAvatar}
                        src="https://3.bp.blogspot.com/-dNqe_M2-wQE/W-_crKMFCBI/AAAAAAAACYw/H13b7yXBYkICwwPkIz9pbg_ijnAn2NeKACLcBGAs/s1600/gai-xinh-4k-17.jpg"
                    />
                </TippyMenu>
            ) : (
                //------ chưa  đăng nhập ------
                <Button src="https://avatar.talk.zdn.vn/default" onClick={() => console.log('hihi')} />
            )}
        </div>
    );
}

export default HeaderRight;
