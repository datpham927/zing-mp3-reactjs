/* eslint-disable react-hooks/exhaustive-deps */
import classNames from 'classnames/bind';
import styles from './AppLayout.module.scss';
import Sidebar from '../Sidebar';
import PropTypes from 'prop-types';
import Header from '../Header';
import Modal from '~/components/modal/Modal';
import Control from '../Control/Control';
import { useSelector } from 'react-redux';
import PlayMv from '~/pages/others/PlayMv/PlayMv';
import QueuePlayList from '../QueuePlayList/QueuePlayList';
import Lyric from '../../components/Lyric/Lyric';
import FooterMobile from '../FooterMobile/FooterMobile';
import { useRef, useState } from 'react';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

function AppLayout({ children }) {
    const { booleanControl } = useSelector((state) => state.dataControl);
    const [header, setHeader] = useState(false);
    const mainRef = useRef();

    useEffect(() => {
        const handleScroll = (e) => {
            if (e.currentTarget.scrollTop === 0) {
                setHeader(false);
            } else {
                setHeader(true);
            }
        };
        mainRef.current.addEventListener('scroll', handleScroll);
        return () => mainRef.current.removeEventListener('click', handleScroll);
    }, []);
    return (
        <>
            <div className={cx('Wrapper', booleanControl && 'active')}>
                <Modal />
                <Sidebar />
                <div className={cx('main')} ref={mainRef}>
                    <Header active={header} />
                    <div className={cx('container')}>{children}</div>
                </div>
                <QueuePlayList />
                {booleanControl && <Control />}
                <Lyric />
                <FooterMobile />
            </div>
            <PlayMv />
        </>
    );
}
AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
export default AppLayout;
