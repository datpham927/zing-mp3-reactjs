/* eslint-disable react-hooks/exhaustive-deps */
import className from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IconClose } from '~/components/Icons/Icons';
import { setModalPortal, setTimer } from '~/redux/action';
import style from './TimeAlarm.module.scss';
const cx = className.bind(style);

function TimeAlarm() {
    const dispatch = useDispatch();
    const { timer } = useSelector((state) => state.action);
    const [timeAlarm, setTimeAlarm] = useState();

    useEffect(() => {
        let time;
        if (timer > 0) {
            time = setInterval(() => {
                dispatch(setTimer(timer - 1));
            }, 1000);
        }
        setTimeAlarm(new Date(timer * 1000).toISOString().substring(11, 19));
        return () => clearInterval(time);
    }, [timer]);

    return (
        timer > 0 && (
            <div className={cx('countdown')}>
                <p>
                    Nhạc sẽ dừng sau
                    <span>{timeAlarm}</span>
                </p>
                <span
                    onClick={() => {
                        dispatch(setModalPortal(true));
                    }}
                >
                    <IconClose />
                </span>
            </div>
        )
    );
}

export default TimeAlarm;
