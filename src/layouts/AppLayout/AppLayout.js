import classNames from 'classnames/bind';
import styles from './AppLayout.module.scss';
import Sidebar from '../Sidebar';
import PropTypes from 'prop-types';
import Header from '../Header';
import { useState } from 'react';
import Modal from '~/components/modal/Modal';
import Control from '../Control/Control';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

function AppLayout({ children }) {
    const [bgrHeader, setBgrHeader] = useState(false);
    const control = useSelector((state) => state.counter.booleanControl);

    const handleScroll = (e) => {
        if (e.currentTarget.scrollTop === 0) {
            setBgrHeader(false);
        } else {
            setBgrHeader(true);
        }
    };
    return (
        <>
            <Modal />
            <div className={cx('Wrapper')}>
                <Sidebar key={1} />
                <div className={cx('main')} onScroll={(e) => handleScroll(e)}>
                    <Header bgrHeader={bgrHeader} />
                    <div className={cx('container')}>{children}</div>
                </div>
                {control && <Control />}
            </div>
        </>
    );
}
AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
export default AppLayout;
