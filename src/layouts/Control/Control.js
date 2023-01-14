/* eslint-disable react-hooks/exhaustive-deps */
import className from 'classnames/bind';
import style from './Control.module.scss';

import TimeAlarm from './TimeAlarm/TimeAlarm';
import ControlLeft from './controlLeft/ControlLeft';
import ControlMain from './controlMain/ControlMain';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useEffect } from 'react';
import ControlRight from './controlRight/ControlRight';
import { setActivePlay } from '~/redux/dataControl';
const cx = className.bind(style);

function Control() {
    const { bgrIndex, previewBgrIndex, openLyric } = useSelector((state) => state.action);
    const dispatch = useDispatch();

    useEffect(() => {
        document.onload = function () {
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
        >
            {!openLyric && <ControlLeft />}
            <ControlMain />
            {!openLyric && <ControlRight />}
            {!openLyric && <TimeAlarm />}
        </div>
    );
}
export default memo(Control);
