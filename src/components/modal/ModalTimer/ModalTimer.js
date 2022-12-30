import className from 'classnames/bind';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ButtonAction from '~/components/Button/ButtonAction';
import { setModalTimer, setTimer } from '~/redux/action';
import style from './ModalTimer.module.scss';

const cx = className.bind(style);

function ModalTimer() {
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [focus, setFocus] = useState('');
    const dispatch = useDispatch();

    const handleModal = (e) => {
        if (e.target === e.currentTarget) {
            dispatch(setModalTimer(false));
        }
    };
    const handleSummit = () => {
        if (minute > 0 && hour > 0) {
            dispatch(setTimer(minute * 60 + hour * 360));
        } else {
            if (minute > 0) {
                dispatch(setTimer(minute * 60));
            }
            if (hour > 0) {
                dispatch(setTimer(hour * 360));
            }
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
                                onInput={(e) => setHour(e.target.value)}
                            />
                            <label htmlFor="hour">Giờ</label>
                            {focus === 'hour' && (
                                <div className={cx('time-options')}>
                                    <div className={cx('list-hour')}>
                                        {list.map((e) => (
                                            <div
                                                key={e}
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
                                onInput={(e) => setMinute(e.target.value)}
                            />
                            <label htmlFor="minute">Phút</label>
                            {focus === 'minute' && (
                                <div className={cx('time-options')}>
                                    <div className={cx('list-minute')}>
                                        {list.map(
                                            (e) =>
                                                e < 12 && (
                                                    <div
                                                        key={e}
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
                    <p>chọn thời gian để dừng phát nhạc</p>
                    <ButtonAction className={cx('save', hour <= 0 && minute <= 0 && 'visible')} onClick={handleSummit}>
                        LƯU LẠI
                    </ButtonAction>
                    <ButtonAction className={cx('cancel')}>HỦY</ButtonAction>
                    <div className={cx('close')} onClick={() => dispatch(setModalTimer(false))}>
                        <ion-icon name="close-outline"></ion-icon>
                    </div>
                </div>
            </div>
        )
    );
}

export default ModalTimer;
