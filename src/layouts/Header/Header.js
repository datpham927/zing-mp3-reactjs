/* eslint-disable react/jsx-pascal-case */
import classNames from 'classnames/bind';
import style from './Header.module.scss';
import 'tippy.js/dist/tippy.css';

import HeaderRight from './HeaderRight';
import HeaderLeft from './HeaderLeft';
const cx = classNames.bind(style);

function Header({ bgrHeader }) {
    return (
        <>
            <div className={cx('wrapper', bgrHeader && 'bgrHeader')}>
                <HeaderLeft />
                <HeaderRight />
            </div>
        </>
    );
}
export default Header;
