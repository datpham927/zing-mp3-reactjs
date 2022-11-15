import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Sidebar from '../Sidebar';
import PropTypes from 'prop-types';
import Header from '../Header';
import Theme from '~/components/modal/Theme/Theme';
import { useState } from 'react';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const [bgrHeader, setBgrHeader] = useState(false);
    const handleScroll = (e) => {
        if (e.currentTarget.scrollTop === 0) {
            setBgrHeader(false);
        } else {
            setBgrHeader(true);
        }
        console.log();
    };
    return (
        <>
            <Theme />
            <div className={cx('Wrapper')}>
                <Sidebar />
                <div className={cx('main')} onScroll={(e) => handleScroll(e)}>
                    <Header bgrHeader={bgrHeader} />
                    <div className={cx('container')}>{children}</div>
                </div>
            </div>
        </>
    );
}
DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
export default DefaultLayout;
