/* eslint-disable react-hooks/exhaustive-deps */
import className from 'classnames/bind';
import style from './Control.module.scss';
import { memo, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '~/components/Button';
import { setChangerTime, setCurrentIndex, setIdAudio, setRepeat, setShuffle } from '~/redux/dataAudio';
import { setActivePlay, setTimer } from '~/redux/action';
import Duration from '~/components/number/time/Duration';
import TimeAlarm from './TimeAlarm/TimeAlarm';
import ControlLeft from './controlLeft/ControlLeft';
import ControlRight from './controlRight/ControlRight';
const cx = className.bind(style);
function Control() {
    const dispatch = useDispatch();
    const listMusic = useSelector((state) => state.dataControl.playListAudio);
    const { currentIndex, idAudio, repeat, shuffle, changerTime } = useSelector((state) => state.dataControl);
    const { activePlay, bgrIndex, previewBgrIndex, timer } = useSelector((state) => state.action);

    const audioRef = useRef();

    useEffect(() => {
        let index = currentIndex;
        if (listMusic[index]?.streamingStatus === 2) {
            do {
                index++;
            } while (listMusic[index]?.streamingStatus === 2);
        }

        for (let i = 0; i < listMusic.length; i++) {
            if (i === index) {
                dispatch(setIdAudio(listMusic[i]));
                break;
            }
        }
    }, [currentIndex]);

    useEffect(() => {
        audioRef.current.currentTime = (idAudio?.duration * changerTime) / 100;
        if (activePlay) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [activePlay]);

    useEffect(() => {
        const time = setTimeout(() => {
            audioRef.current.pause();
            dispatch(setActivePlay(false));
            dispatch(setTimer(0));
        }, timer * 1000);
        return () => clearTimeout(time);
    }, [timer]);

    const handlePev = () => {
        if (shuffle) {
            let shuffle;
            do {
                shuffle = Math.floor(Math.random() * listMusic.length - 1);
            } while (listMusic[shuffle]?.streamingStatus === 2);
            dispatch(setCurrentIndex(shuffle));
        } else {
            let index = currentIndex;
            do {
                index--;
            } while (listMusic[index]?.streamingStatus === 2);
            currentIndex < 0 ? dispatch(setCurrentIndex(listMusic.length - 1)) : dispatch(setCurrentIndex(index));
        }
    };
    const handleNext = () => {
        if (shuffle) {
            let ranDom;
            do {
                ranDom = Math.floor(Math.random() * listMusic.length - 1);
            } while (listMusic[ranDom]?.streamingStatus === 2);
            dispatch(setCurrentIndex(ranDom));
        } else {
            let index = currentIndex;
            do {
                index++;
            } while (listMusic[index]?.streamingStatus === 2);
            currentIndex > listMusic.length - 1 ? dispatch(setCurrentIndex(0)) : dispatch(setCurrentIndex(index));
        }
    };

    const handleRepeat = () => {
        dispatch(setRepeat(!repeat));
    };

    const handleShuffle = () => {
        dispatch(setShuffle(!shuffle));
    };

    const handleOnEnd = () => {
        repeat ? audioRef.current.play() : handleNext();
    };

    const handleDuration = (e) => {
        const newTime = (e.nativeEvent.offsetX / e.currentTarget.clientWidth) * 100;
        audioRef.current.currentTime = (newTime * audioRef.current.duration) / 100;
    };
    return (
        <div
            className={cx('wrapper', ((previewBgrIndex === 0 && bgrIndex === 0) || bgrIndex === 0) && 'background-img')}
        >
            <ControlLeft />

            <div className={cx('main') + ' l-6'}>
                <div className={cx('action')}>
                    <Button
                        onClick={() => handleShuffle()}
                        className={cx('btn', shuffle && 'shuffle')}
                        small
                        content={shuffle ? 'Tắt phát ngẫu nhiên' : 'Bật phát ngẫu nhiên'}
                        iconLeft={<i className="icon ic-shuffle"></i>}
                    />
                    <Button
                        onClick={() => handlePev()}
                        className={cx('btn')}
                        small
                        noContent
                        iconLeft={<i className="icon ic-pre"></i>}
                    />
                    <Button
                        onClick={() => dispatch(setActivePlay(!activePlay))}
                        className={cx('btn', 'btn-play')}
                        small
                        noContent
                        iconLeft={
                            activePlay ? (
                                <i className="icon ic-pause-circle-outline"></i>
                            ) : (
                                <i className="icon ic-play-circle-outline"></i>
                            )
                        }
                    />
                    <Button
                        onClick={() => handleNext()}
                        className={cx('btn')}
                        small
                        noContent
                        iconLeft={<i className="icon ic-next"></i>}
                    />
                    <Button
                        onClick={() => handleRepeat()}
                        className={cx('btn')}
                        small
                        content={repeat ? 'Tắt phát lại một bài' : 'bật phát lại một bài'}
                        iconLeft={repeat ? <i className="icon ic-repeat-one"></i> : <i className="icon ic-repeat"></i>}
                    />
                </div>
                <div className={cx('time')}>
                    <p className={cx('start')}>
                        {('0' + Math.floor(audioRef?.current?.currentTime / 60)).slice(-2) +
                            ':' +
                            ('0' + Math.floor(audioRef?.current?.currentTime % 60)).slice(-2)}
                    </p>
                    <div className={cx('duration')} onClick={(e) => handleDuration(e)}>
                        <div className={cx('duration-play')} style={{ width: changerTime + '%' }}></div>
                    </div>
                    <p className={cx('end')}>
                        {idAudio?.duration ? <Duration duration={idAudio?.duration} /> : '00:00'}
                    </p>
                </div>
                <audio
                    ref={audioRef}
                    src={`http://api.mp3.zing.vn/api/streaming/audio/${idAudio?.encodeId}/320`}
                    autoPlay={activePlay}
                    onEnded={handleOnEnd}
                    onTimeUpdate={() =>
                        dispatch(setChangerTime((100 * audioRef.current.currentTime) / idAudio?.duration))
                    }
                ></audio>
            </div>
            <ControlRight audioRef={audioRef} />
            <TimeAlarm />
        </div>
    );
}
export default memo(Control);
