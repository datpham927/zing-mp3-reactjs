/* eslint-disable no-const-assign */
/* eslint-disable react/jsx-pascal-case */
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import style from './ItemMenu.module.scss';
const cx = classNames.bind(style);

function ItemMenu({ iconLeft, iconRight, children, to }) {
    let Comp = 'div';
    console.log(to);
    if (!!to) {
        Comp = Link;
    }
    return (
        <Comp to={to} className={cx('item')}>
            <div className={cx('wrapper')}>
                <span className={cx('iconLeft')}>{iconLeft}</span>
                <span className={cx('title')}>{children}</span>
                {iconRight && <span className={cx('iconRight')}>{iconRight}</span>}
            </div>
        </Comp>
    );
}

export default ItemMenu;
