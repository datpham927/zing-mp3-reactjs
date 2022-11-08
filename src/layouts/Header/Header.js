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
import Tippy from '@tippyjs/react';
import ItemMenu from '~/components/ItemMenu/ItemMenu';
import config from '~/components/config';
const cx = classNames.bind(style);

const MENU_ITEM = [
    {
        id: 1,
        title: 'Danh sách chặn',
        iconLeft: <i class="fas fa-ban"></i>,
        path: config.routes.block,
        chidren: [
            {
                id: 1,
            },
            {
                id: 1,
            },
        ],
    },
    {
        id: 2,
        title: 'Chất lượng nhạc',
        iconLeft: <i class="far fa-play-circle"></i>,
        iconRight: <ion-icon name="chevron-forward-outline"></ion-icon>,
    },
    {
        id: 3,
        title: 'Giới thiệu',
        iconLeft: <i class="fas fa-info-circle"></i>,
    },
    {
        id: 4,
        title: 'Liên hệ',
        iconLeft: <i class="fas fa-phone-alt"></i>,
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
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </span>
                    <span className={cx('icon')}>
                        <ion-icon name="arrow-forward-outline"></ion-icon>{' '}
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
                    <Button primary iconLeft={<ion-icon name="diamond-outline"></ion-icon>} content="Nâng cấp VIP" />
                    {/* tải file */}
                    <Button primary type={<ion-icon name="cloud-upload-outline"></ion-icon>} content="Tải lên" />
                    {/* setting */}
                    <Button primary iconLeft={<ion-icon name="settings-outline"></ion-icon>} content="Cài đặc" />
                    {currentUser ? (
                        <Tippy
                            visible
                            interactive
                            placement="bottom-start"
                            render={(attrs) => (
                                <div className={cx('box')} tabIndex="-1" {...attrs}>
                                    {MENU_ITEM.map((data) =>
                                        data.id === 2 ? (
                                            <ItemMenu key={data.id} iconLeft={data.iconLeft} iconRight={data.iconRight}>
                                                {data.title}
                                            </ItemMenu>
                                        ) : (
                                            <ItemMenu
                                                key={data.id}
                                                iconLeft={data.iconLeft}
                                                iconRight={data.iconRight}
                                                to={data.path}
                                            >
                                                {data.title}
                                            </ItemMenu>
                                        ),
                                    )}
                                </div>
                            )}
                        >
                            <Button
                                ref={refAvatar}
                                src="https://3.bp.blogspot.com/-dNqe_M2-wQE/W-_crKMFCBI/AAAAAAAACYw/H13b7yXBYkICwwPkIz9pbg_ijnAn2NeKACLcBGAs/s1600/gai-xinh-4k-17.jpg"
                            />
                        </Tippy>
                    ) : (
                        <Button primary src="https://avatar.talk.zdn.vn/default" onClick={() => console.log('hihi')} />
                    )}
                </div>
            </div>
        </>
    );
}
export default Header;
