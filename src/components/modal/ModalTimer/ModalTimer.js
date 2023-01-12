/* eslint-disable react-hooks/exhaustive-deps */
import className from 'classnames/bind';
import { useEffect, useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ButtonAction from '~/components/Button/ButtonAction';
import { v4 as uuidv4 } from 'uuid';
import { setDateTime, setModalTimer, setTimer } from '~/redux/action';
import toastMessage from '../toast';
import style from './ModalTimer.module.scss';

const cx = className.bind(style);

function ModalTimer() {
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [intendTime, setIntendTime] = useState([]);
    const [focus, setFocus] = useState('');
    const dispatch = useDispatch();

    useLayoutEffect(() => {
        if (hour > 99) {
            setHour(99);
        } else if (hour < 0) {
            setHour(0);
        }
        if (minute > 59) {
            setMinute(59);
        } else if (minute < 0) {
        }
    }, [hour, minute]);

    useEffect(() => {
        const currentTime = Math.round(Date.now() / 1000);
        const intendTime = new Date((currentTime + (hour * 3600 + minute * 60)) * 1000);
        setIntendTime([
            {
                hour: `${('0' + intendTime.getHours()).slice(-2)}:${('0' + intendTime.getMinutes()).slice(-2)}`,
                day: `${('0' + intendTime.getDate()).slice(-2)}/${('0' + (intendTime.getMonth() + 1)).slice(
                    -2,
                )}/${intendTime.getFullYear()}`,
            },
        ]);
    }, [hour, minute]);
    const close = () => {
        dispatch(setModalTimer(false));
        setMinute(0);
        setHour(0);
    };
    const handleModal = (e) => {
        if (e.target === e.currentTarget) {
            close();
        }
    };

    const handleSummit = () => {
        if (hour > 0 || minute > 0) {
            dispatch(setTimer(minute * 60 + hour * 3600));
            dispatch(setModalTimer(false));
            dispatch(setDateTime(intendTime));
            toastMessage('Hẹn giờ dừng phát nhạc thành công');
        }
    };
    const { booleanTimer } = useSelector((state) => state.action);
    const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    return (
        booleanTimer && (
            <div className={cx('modal')} onClick={handleModal}>
                <div
                    className={cx('wrapper')}
                    onClick={(e) => {
                        if (!e.target.closest('.ModalTimer_time__XD3NK')) {
                            setFocus('');
                        }
                    }}
                >
                    <h1 className={cx('title')}>Hẹn Giờ Dừng Phát Nhạc</h1>
                    <div className={cx('time')}>
                        <div className={cx('hour', focus === 'hour' && 'active')}>
                            <input
                                id="hour"
                                type="number"
                                value={('0' + hour).slice(-2)}
                                maxLength={2}
                                onFocus={() => setFocus('hour')}
                                defaultValue={'00'}
                                onChange={(e) => setHour(e.target.value)}
                            />
                            <label htmlFor="hour">Giờ</label>
                            {focus === 'hour' && (
                                <div className={cx('time-options')}>
                                    <div className={cx('list-hour')}>
                                        {list.map((e) => (
                                            <div
                                                key={uuidv4()}
                                                className={cx('option')}
                                                onClick={() => {
                                                    setHour(e);
                                                    setFocus('');
                                                }}
                                            >
                                                {('0' + e).slice(-2) + ' Giờ'}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                        <p>:</p>
                        <div className={cx('minute', focus === 'minute' && 'active')}>
                            <input
                                id="minute"
                                type="number"
                                value={('0' + minute).slice(-2)}
                                defaultValue={'00'}
                                onFocus={() => {
                                    setFocus('minute');
                                }}
                                maxLength={'2'}
                                onChange={(e) => setMinute(e.target.value)}
                            />
                            <label htmlFor="minute">Phút</label>
                            {focus === 'minute' && (
                                <div className={cx('time-options')}>
                                    <div className={cx('list-minute')}>
                                        {list.map(
                                            (e) =>
                                                e < 12 && (
                                                    <div
                                                        key={uuidv4()}
                                                        className={cx('option')}
                                                        onClick={() => {
                                                            setMinute(e * 5);
                                                            setFocus('');
                                                        }}
                                                    >
                                                        {('0' + e * 5).slice(-2) + ' Phút'}
                                                    </div>
                                                ),
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {hour || minute > 0 ? (
                        <h3 className={cx('estimate')}>
                            Dự tính dừng phát nhạc lúc :<span> {intendTime[0].hour + ' ' + intendTime[0].day}</span>
                        </h3>
                    ) : (
                        <h3 className={cx('estimate')}>chọn thời gian để dừng phát nhạc</h3>
                    )}

                    <ButtonAction className={cx('save', hour <= 0 && minute <= 0 && 'visible')} onClick={handleSummit}>
                        LƯU LẠI
                    </ButtonAction>
                    <ButtonAction className={cx('cancel')} onClick={() => dispatch(setModalTimer(false))}>
                        HỦY
                    </ButtonAction>
                    <div className={cx('close')} onClick={close}>
                        <ion-icon name="close-outline"></ion-icon>
                    </div>
                </div>
            </div>
        )
    );
}

export default ModalTimer;
