/* eslint-disable react/jsx-pascal-case */
import classNames from 'classnames/bind';
import style from './TippyMenu.module.scss';
import 'tippy.js/dist/tippy.css';
import Tippy from '@tippyjs/react/headless';
import ItemMenu from '../ItemMenu/ItemMenu';
import { useState } from 'react';

const cx = classNames.bind(style);

function TippyMenu({ MENU_ITEM = [], children }) {
    const [history, setHistory] = useState([{ data: MENU_ITEM }]);
    const current = history[history.length - 1];

    const onBack = () => {
        if (history.length > 1) {
            setHistory((prev) => prev.slice(0, prev.length - 1));
        }
    };

    const handleRender = (attrs) => (
        <div className={cx('box')} tabIndex="-1" {...attrs}>
            {current.data?.map((item, index) => {
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
    );
    return (
        <Tippy
            interactive
            trigger="click"
            offset={[0, -3]}
            placement="bottom-end"
            render={handleRender}
            onHide={onBack}
        >
            {children}
        </Tippy>
    );
}

export default TippyMenu;
