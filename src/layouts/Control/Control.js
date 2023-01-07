/* eslint-disable react-hooks/exhaustive-deps */
import className from 'classnames/bind';
import style from './Control.module.scss';
import { memo, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '~/components/Button';
import {
    setCurrentIndex,
    setLoadMusic,
    setNext,
    setPrev,
    setRecentList,
    setRepeat,
    setShuffle,
} from '~/redux/dataControl';
import { setActivePlay, setTimer } from '~/redux/action';
import Duration from '~/components/number/time/Duration';
import TimeAlarm from './TimeAlarm/TimeAlarm';
import ControlLeft from './controlLeft/ControlLeft';
import ControlRight from './controlRight/ControlRight';
import { IconLoadControl } from '~/components/Icons/Icons';
import { setCurrentTimeAudio } from '~/redux/currentTimeAudio';
import Lyric from '~/components/modal/Lyric/Lyric';
const cx = className.bind(style);

function Control() {
    const [src, setSrc] = useState('');
    const [percent, setPercent] = useState(0);
    const dispatch = useDispatch();
    const listMusic = useSelector((state) => state.dataControl.playListAudio);
    const { idAudio, repeat, shuffle, loadMusic } = useSelector((state) => state.dataControl);
    const { activePlay, bgrIndex, previewBgrIndex, timer, openLyric } = useSelector((state) => state.action);
    const { currentTimeAudio } = useSelector((state) => state.currentTimeAudio);
    const audioRef = useRef();

    useEffect(() => {
        if (currentTimeAudio) {
            audioRef.current.currentTime = currentTimeAudio;
        }
    }, []);

    useEffect(() => {
        setSrc(`http://api.mp3.zing.vn/api/streaming/audio/${idAudio?.encodeId}/320`);
        for (let i = 0; i < listMusic.length; i++) {
            if (listMusic[i].encodeId === idAudio?.encodeId) {
                dispatch(setCurrentIndex(i));
                break;
            }
        }
        if (activePlay) {
            if (loadMusic) {
                audioRef.current.play();
            } else {
                setTimeout(() => {
                    dispatch(setLoadMusic(true));
                    audioRef.current.play();
                    dispatch(setRecentList(idAudio));
                }, 1000);
            }
        } else {
            audioRef.current.pause();
        }
    }, [idAudio, activePlay]);

    useEffect(() => {
        const time = setTimeout(() => {
            audioRef.current.pause();
            if (timer === -1) {
                dispatch(setActivePlay(false));
            }
            dispatch(setTimer(0));
            // sau timer nhạc sẽ dừng
        }, timer * 1000);
        return () => clearTimeout(time);
    }, [timer]);

    const handleOnEnd = () => {
        repeat ? audioRef.current?.play() : dispatch(setNext(true));
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
                        onClick={() => dispatch(setShuffle(!shuffle))}
                        className={cx('btn', shuffle && 'shuffle')}
                        small
                        content={shuffle ? 'Tắt phát ngẫu nhiên' : 'Bật phát ngẫu nhiên'}
                        iconLeft={<i className="icon ic-shuffle"></i>}
                    />
                    <Button
                        disable={listMusic?.length === 0}
                        onClick={() => {
                            dispatch(setPrev(true));
                        }}
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
                            loadMusic ? (
                                activePlay ? (
                                    <i className="icon ic-pause-circle-outline"></i>
                                ) : (
                                    <i className="icon ic-play-circle-outline"></i>
                                )
                            ) : (
                                <IconLoadControl />
                            )
                        }
                    />
                    <Button
                        disable={listMusic?.length === 0}
                        onClick={() => {
                            dispatch(setNext(true));
                        }}
                        className={cx('btn')}
                        small
                        noContent
                        iconLeft={<i className="icon ic-next"></i>}
                    />
                    <Button
                        onClick={() => dispatch(setRepeat(!repeat))}
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
                        <div className={cx('duration-play')} style={{ width: percent + '%' }}></div>
                    </div>
                    <p className={cx('end')}>
                        {idAudio?.duration ? <Duration duration={idAudio?.duration} /> : '00:00'}
                    </p>
                </div>
                <audio
                    ref={audioRef}
                    src={src}
                    onEnded={handleOnEnd}
                    onTimeUpdate={() => {
                        setPercent((100 * audioRef.current.currentTime) / idAudio?.duration);
                        dispatch(setCurrentTimeAudio(audioRef.current.currentTime));
                    }}
                ></audio>
            </div>
            <ControlRight audioRef={audioRef} />
            <TimeAlarm />
            {openLyric && <Lyric />}
        </div>
    );
}
export default memo(Control);
