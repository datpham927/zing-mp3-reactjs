import classNames from 'classnames/bind';
import styles from './AppLayout.module.scss';
import Sidebar from '../Sidebar';
import PropTypes from 'prop-types';
import Header from '../Header';
import { useState } from 'react';
import Modal from '~/components/modal/Modal';
import Control from '../Control/Control';
import { useSelector } from 'react-redux';
import PlayMv from '~/pages/others/PlayMv/PlayMv';
import { useLocation } from 'react-router-dom';
import QueuePlayList from '../QueuePlayList/QueuePlayList';

const cx = classNames.bind(styles);

function AppLayout({ children }) {
    const [bgrHeader, setBgrHeader] = useState(false);
    const { booleanControl } = useSelector((state) => state.dataControl);

    const handleScroll = (e) => {
        if (e.currentTarget.scrollTop === 0) {
            setBgrHeader(false);
        } else {
            setBgrHeader(true);
        }
    };
    const { pathname } = useLocation();
    return (
        <>
            <Modal />
            <div className={cx('Wrapper', booleanControl && 'active')}>
                <Sidebar />
                <div className={cx('main')} onScroll={(e) => handleScroll(e)}>
                    <Header bgrHeader={bgrHeader} />
                    <div className={cx('container')}>{children}</div>
                </div>
                <QueuePlayList />
                {booleanControl && <Control />}
            </div>
            {pathname.includes('/video-clip') && <PlayMv />}
        </>
    );
}
AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
export default AppLayout;
