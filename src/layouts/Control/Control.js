/* eslint-disable react-hooks/exhaustive-deps */
import className from 'classnames/bind';
import style from './Control.module.scss';

import TimeAlarm from './TimeAlarm/TimeAlarm';
import ControlLeft from './controlLeft/ControlLeft';
import ControlMain from './controlMain/ControlMain';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useEffect, useRef } from 'react';
import ControlRight from './controlRight/ControlRight';
import { setOpenLyric } from '~/redux/action';
import { setActivePlay } from '~/redux/dataControl';
const cx = className.bind(style);

function Control() {
    const { bgrIndex, previewBgrIndex, openLyric } = useSelector((state) => state.action);
    const dispatch = useDispatch();
    const wrapperRef = useRef();

    useEffect(() => {
        const handleCLickMobile = () => {
            if (
                wrapperRef.current.target === wrapperRef.current.currentTarget ||
                wrapperRef.current.target.closest('.ControlLeft_image__HpxGx')
            ) {
                if (window.innerWidth <= 740) {
                    dispatch(setOpenLyric(true));
                }
            }
        };
        wrapperRef.current.addEventListener('click', handleCLickMobile);
        return () => wrapperRef.current.removeEventListener('click', handleCLickMobile);
    }, []);
    useEffect(() => {
        document.onload = function () {
            dispatch(setActivePlay(false));
        };
    }, []);
    return (
        <div
            ref={wrapperRef}
            className={cx(
                'wrapper',
                ((previewBgrIndex === 0 && bgrIndex === 0) || bgrIndex === 0) && 'background-img',
                openLyric && 'active-lyric',
            )}
        >
            {!openLyric && <ControlLeft />}
            <ControlMain />
            {!openLyric && <ControlRight />}
            {!openLyric && <TimeAlarm />}
        </div>
    );
}
export default memo(Control);
