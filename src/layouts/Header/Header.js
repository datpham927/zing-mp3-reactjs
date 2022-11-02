/* eslint-disable react/jsx-pascal-case */
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import Search from '../Search';
import { Icon } from '../Icons';
import style from './Header.module.scss';
import 'tippy.js/dist/tippy.css';

const cx = classNames.bind(style);
function Header() {
    const currentUser = true;
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
                <Button primary iconLeft={<Icon.iconTopic />} content="Chủ đề" />
                {/* vip */}
                <Button primary iconLeft={<ion-icon name="diamond-outline"></ion-icon>} content="Nâng cấp VIP" />
                {/* tải file */}
                <Button primary type={<ion-icon name="cloud-upload-outline"></ion-icon>} content="Tải lên" />
                {/* setting */}
                <Button primary iconLeft={<ion-icon name="settings-outline"></ion-icon>} content="Cài đặc" />
                {currentUser ? (
                    <Button
                        primary
                        src="https://3.bp.blogspot.com/-dNqe_M2-wQE/W-_crKMFCBI/AAAAAAAACYw/H13b7yXBYkICwwPkIz9pbg_ijnAn2NeKACLcBGAs/s1600/gai-xinh-4k-17.jpg"
                        onClick={() => console.log('hihi')}
                    />
                ) : (
                    <Button primary src="https://avatar.talk.zdn.vn/default" onClick={() => console.log('hihi')} />
                )}
            </div>
        </div>
    );
}
export default Header;
