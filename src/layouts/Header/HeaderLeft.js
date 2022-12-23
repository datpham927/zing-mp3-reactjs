/* eslint-disable react/jsx-pascal-case */
import classNames from 'classnames/bind';
import { Icon } from '../../components/Icons';
import style from './Header.module.scss';
import 'tippy.js/dist/tippy.css';

import Search from './Search';
const cx = classNames.bind(style);

function HeaderLeft() {
    return (
        <div className={cx('left') + ' l-7'}>
            <span className={cx('icon')}>
                <Icon.IconLeft />
            </span>
            <span className={cx('icon')}>
                <Icon.IconRight />
            </span>
            {/* ------ search ------ */}
            <Search />
        </div>
    );
}

export default HeaderLeft;
