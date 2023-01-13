/* eslint-disable react/jsx-pascal-case */
import classNames from 'classnames/bind';
import { Icon } from '../../components/Icons';
import style from './Header.module.scss';
import 'tippy.js/dist/tippy.css';

import Search from './Search';
import Avatar from './Avatar';
import Button from '~/components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { setModalPortal, setModalTimer } from '~/redux/action';
const cx = classNames.bind(style);

function HeaderLeft() {
    const dispatch = useDispatch();
    const { timer } = useSelector((state) => state.currentTimeAudio);
    return (
        <div className={cx('left') + ' l-7'}>
            <span className={cx('icon') + ' c-0'}>
                <Icon.IconLeft />
            </span>
            <span className={cx('icon') + ' c-0'}>
                <Icon.IconRight />
            </span>
            <Avatar className={cx('avatar') + ' l-0 m-0'} />
            {/* ------ search ------ */}
            <Search />
            <Button
                className={cx('btn-action', timer > 0 && 'active') + ' l-0 m-0'}
                iconLeft={<i className="icon ic-20-Clock"></i>}
                content={'Hẹn giờ đừng phát nhạc'}
                primary
                onClick={() => {
                    if (timer > 0) {
                        dispatch(setModalPortal(true));
                    } else {
                        dispatch(setModalTimer(true));
                    }
                }}
            />
        </div>
    );
}

export default HeaderLeft;
