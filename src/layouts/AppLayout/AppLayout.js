/* eslint-disable react-hooks/exhaustive-deps */
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
import QueuePlayList from '../QueuePlayList/QueuePlayList';
import Lyric from '../../components/Lyric/Lyric';
import FooterMobile from '../FooterMobile/FooterMobile';
import { useRef } from 'react';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

function AppLayout({ children }) {
    const { booleanControl } = useSelector((state) => state.dataControl);
    const mainRef = useRef();

    useEffect(() => {
        const handleScroll = (e) => {
            if (e.currentTarget.scrollTop === 0) {
                if (e.target.clientWidth <= 740) {
                    document.querySelector('.Header_wrapper__dNhyY').style.transform = 'translateY(0)';
                } else {
                    document.querySelector('.Header_wrapper__dNhyY').classList.remove('Header_scroll__gDK86');
                }
            } else {
                if (e.target.clientWidth <= 740) {
                    document.querySelector('.Header_wrapper__dNhyY').style.transform = 'translateY(-100%)';
                } else {
                    document.querySelector('.Header_wrapper__dNhyY').classList.add('Header_scroll__gDK86');
                }
            }
        };
        mainRef.current.addEventListener('scroll', handleScroll);
    }, []);
    return (
        <>
            <div className={cx('Wrapper', booleanControl && 'active')}>
                <Modal />
                <Sidebar />
                <div className={cx('main')} ref={mainRef}>
                    <Header />
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
