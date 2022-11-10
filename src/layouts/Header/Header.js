/* eslint-disable react/jsx-pascal-case */
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import { useDispatch } from 'react-redux';
import Search from './Search';
import { Icon } from '../../components/Icons';
import style from './Header.module.scss';
import 'tippy.js/dist/tippy.css';
import { useRef, useState } from 'react';
import { zingCounter } from '~/redux/actionSlice';

import SettingMenu from './settingMenu/SetttingMenu';
import config from '~/components/config';
const cx = classNames.bind(style);
const MENU_ITEM = [
    {
        id: 0,
        title: 'Danh sách chặn',
        iconLeft: <i className="icon ic-20-Block"></i>,
        path: config.routes.block,
    },
    {
        id: 1,
        title: 'Chất lượng nhạc',
        iconLeft: <i className="icon ic-20-quaility-SQ"></i>,
        iconRight: <ion-icon name="chevron-forward-outline"></ion-icon>,
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
    },
    {
        id: 3,
        title: 'Liên hệ',
        iconLeft: <i className="icon ic-20-Call"></i>,
    },
];
function Header() {
    const currentUser = true;
    const [bgrHeader, setBgrHeader] = useState(false);
    const dispatch = useDispatch();
    const refAvatar = useRef();
    window.addEventListener('scroll', () => {
        if (window.scrollY === 0) {
            setBgrHeader(false);
        } else {
            setBgrHeader(true);
        }
    });
    return (
        <>
            <div className={cx('wrapper', bgrHeader && 'bgrHeader')}>
                <div className={cx('left')}>
                    <span className={cx('icon')}>
                        <Icon.iconLeft />
                    </span>
                    <span className={cx('icon')}>
                        <Icon.iconRight />
                    </span>
                    {/* search */}
                    <Search />
                </div>
                <div className={cx('right')}>
                    {/* theme */}
                    <Button
                        primary
                        iconLeft={<Icon.iconTopic />}
                        content="Chủ đề"
                        onClick={() => dispatch(zingCounter.actions.modalTheme(true))}
                    />
                    {/* vip */}
                    <Button primary iconLeft={<Icon.iconVip />} content="Nâng cấp VIP" />
                    {/* tải file */}
                    <Button primary type={<Icon.upload />} content="Tải lên" />
                    {/* setting */}
                    <SettingMenu MENU_ITEM={MENU_ITEM} />
                    {currentUser ? (
                        <Button
                            ref={refAvatar}
                            src="https://3.bp.blogspot.com/-dNqe_M2-wQE/W-_crKMFCBI/AAAAAAAACYw/H13b7yXBYkICwwPkIz9pbg_ijnAn2NeKACLcBGAs/s1600/gai-xinh-4k-17.jpg"
                        />
                    ) : (
                        <Button primary src="https://avatar.talk.zdn.vn/default" onClick={() => console.log('hihi')} />
                    )}
                </div>
            </div>
        </>
    );
}
export default Header;
