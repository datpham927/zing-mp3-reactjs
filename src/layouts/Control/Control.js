/* eslint-disable react-hooks/exhaustive-deps */
import className from 'classnames/bind';
import style from './Control.module.scss';

import TimeAlarm from './TimeAlarm/TimeAlarm';
import ControlLeft from './controlLeft/ControlLeft';
import ControlMain from './controlMain/ControlMain';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useEffect } from 'react';
import ControlRight from './controlRight/ControlRight';
import { setOpenLyric } from '~/redux/action';
import { setActivePlay } from '~/redux/dataControl';
const cx = className.bind(style);

function Control() {
    const { bgrIndex, previewBgrIndex, openLyric } = useSelector((state) => state.action);
    const dispatch = useDispatch();
    const handleCLickMobile = (e) => {
        if (e.target === e.currentTarget) {
            if (window.innerWidth <= 740) {
                dispatch(setOpenLyric(true));
            }
        }
    };
    useEffect(() => {
        window.onload = function () {
            dispatch(setActivePlay(false));
        };
    }, []);
    return (
        <div
            className={cx(
                'wrapper',
                ((previewBgrIndex === 0 && bgrIndex === 0) || bgrIndex === 0) && 'background-img',
                openLyric && 'active-lyric',
            )}
            onClick={handleCLickMobile}
        >
            {!openLyric && <ControlLeft />}
            <ControlMain />
            {!openLyric && <ControlRight />}
            <TimeAlarm />
        </div>
    );
}
export default memo(Control);
