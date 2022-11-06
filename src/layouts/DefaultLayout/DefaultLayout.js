import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Sidebar from '../Sidebar';
import PropTypes from 'prop-types';
import Header from '../Header';
import Theme from '~/components/modal/Theme/Theme';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <>
            <Theme />
            <div className={cx('Wrapper')}>
                <Sidebar />
                <div className={cx('main')}>
                    <Header />
                    {children}
                </div>
            </div>
        </>
    );
}
DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
export default DefaultLayout;
