/* eslint-disable react/jsx-pascal-case */
import classNames from 'classnames/bind';
import style from './SettingMenu.module.scss';
import 'tippy.js/dist/tippy.css';
import Tippy from '@tippyjs/react/headless';
import ItemMenu from '~/components/ItemMenu/ItemMenu';
import { useState } from 'react';

const cx = classNames.bind(style);

function SettingMenu({ MENU_ITEM = [] }) {
    const [history, setHistory] = useState([{ data: MENU_ITEM }]);
    const current = history[history.length - 1];

    const onBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };
    return (
        <Tippy
            interactive
            visible
            delay={[800, 0]}
            offset={[0, -3]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('box')} tabIndex="-1" {...attrs}>
                    {current.data.map((item) => {
                        const isParent = !!item.children;
                        return (
                            <ItemMenu
                                type={item.type}
                                key={item.id}
                                id={item.id}
                                iconLeft={item.iconLeft}
                                iconRight={item.iconRight}
                                to={item.path}
                                onClick={() => {
                                    if (isParent) {
                                        setHistory((prev) => [...prev, item.children]);
                                    }
                                }}
                                onChange={onBack}
                            >
                                {item.title}
                            </ItemMenu>
                        );
                    })}
                </div>
            )}
        >
            <div className={cx('setting')}>
                <ion-icon name="settings-outline"></ion-icon>
            </div>
        </Tippy>
    );
}

export default SettingMenu;
