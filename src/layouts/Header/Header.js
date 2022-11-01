/* eslint-disable react/jsx-pascal-case */

import classNames from 'classnames/bind';
import Button from '~/components/Button';
import Search from '../Search';
import { Icon } from '../Icons';
import style from './Header.module.scss';
const cx = classNames.bind(style);
function Header() {
    return (
        <div className={cx('wrapper')}>
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
                <Button primary iconLeft={<Icon.iconTopic />} />
                {/* vip */}
                <Button primary iconLeft={<ion-icon name="diamond-outline"></ion-icon>} />
                {/* tải file */}
                <Button primary type={<ion-icon name="cloud-upload-outline"></ion-icon>} />
                {/* setting */}
                <Button primary iconLeft={<ion-icon name="settings-outline"></ion-icon>} />

                <Button
                    primary
                    src="https://3.bp.blogspot.com/-dNqe_M2-wQE/W-_crKMFCBI/AAAAAAAACYw/H13b7yXBYkICwwPkIz9pbg_ijnAn2NeKACLcBGAs/s1600/gai-xinh-4k-17.jpg"
                />
            </div>
        </div>
    );
}

export default Header;
