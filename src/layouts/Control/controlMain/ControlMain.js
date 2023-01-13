/* eslint-disable react-hooks/exhaustive-deps */
import className from 'classnames/bind';
import style from './ControlMain.module.scss';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '~/components/Button';
import {
    setActivePlay,
    setCurrentIndex,
    setLoadMusic,
    setNext,
    setPrev,
    setRecentList,
    setRepeat,
    setShuffle,
} from '~/redux/dataControl';
import { setTimer } from '~/redux/action';
import Duration from '~/components/number/time/Duration';
import { IconLoadControl } from '~/components/Icons/Icons';
import { setCurrentTimeAudio } from '~/redux/currentTimeAudio';
import { useLayoutEffect } from 'react';
import { forwardRef } from 'react';
const cx = className.bind(style);

function ControlMain() {
    const [src, setSrc] = useState('');
    const [percent, setPercent] = useState(0);
    const dispatch = useDispatch();
    const listMusic = useSelector((state) => state.dataControl.playListAudio);
    const { idAudio, repeat, shuffle, loadMusic, activePlay } = useSelector((state) => state.dataControl);
    const { timer } = useSelector((state) => state.action);
    const { currentTimeAudio } = useSelector((state) => state.currentTimeAudio);
    const { openLyric } = useSelector((state) => state.action);
    const audioRef = useRef();
    useEffect(() => {
        if (currentTimeAudio) {
            audioRef.current.currentTime = currentTimeAudio;
        }
    }, []);

    useEffect(() => {
        setSrc(`http://api.mp3.zing.vn/api/streaming/audio/${idAudio?.encodeId}/320`);
        for (let i = 0; i < listMusic?.length; i++) {
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
                    dispatch(setRecentList(idAudio));
                    dispatch(setLoadMusic(true));
                    audioRef.current.play();
                }, 1000);
            }
        } else {
            audioRef?.current.pause();
            dispatch(setActivePlay(false));
        }
    }, [idAudio, activePlay]);

    useLayoutEffect(() => {
        const time = setTimeout(() => {
            audioRef?.current.pause();
            if (timer !== 0) {
                dispatch(setActivePlay(false));
            }
            dispatch(setTimer(0));
            // sau timer nhạc sẽ dừng
        }, timer * 1000);
        return () => clearTimeout(time);
    }, [timer]);

    const handleOnEnd = () => {
        if (listMusic?.length === 1) {
            audioRef?.current?.play();
        } else {
            repeat ? audioRef?.current?.play() : dispatch(setNext(true));
        }
    };

    const handleDuration = (e) => {
        const newTime = (e.nativeEvent.offsetX / e.currentTarget.clientWidth) * 100;
        audioRef.current.currentTime = (newTime * audioRef?.current.duration) / 100;
    };
    return (
        <div className={cx('main', openLyric && 'active-lyric') + ' l-6 m-6 ' + (!openLyric ? 'c-4' : 'c-12')}>
            <div className={cx('action')}>
                <Button
                    onClick={() => dispatch(setShuffle(!shuffle))}
                    className={cx('btn', shuffle && 'shuffle') + (!openLyric ? ' c-0' : '')}
                    small
                    disable={listMusic?.length === 1}
                    content={shuffle ? 'Tắt phát ngẫu nhiên' : 'Bật phát ngẫu nhiên'}
                    iconLeft={<i className="icon ic-shuffle"></i>}
                />
                <Button
                    disable={listMusic?.length === 1}
                    onClick={() => {
                        dispatch(setPrev(true));
                    }}
                    className={cx('btn') + (!openLyric ? ' c-0' : '')}
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
                            <IconLoadControl className={cx('icon-load')} />
                        )
                    }
                />
                <Button
                    disable={listMusic?.length === 1}
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
                    className={cx('btn') + (!openLyric ? ' c-0' : '')}
                    small
                    content={repeat ? 'Tắt phát lại một bài' : 'bật phát lại một bài'}
                    iconLeft={repeat ? <i className="icon ic-repeat-one"></i> : <i className="icon ic-repeat"></i>}
                />
            </div>
            <div className={cx('time') + (!openLyric ? ' c-0' : '')}>
                <p className={cx('start')}>
                    {('0' + Math.floor(audioRef?.current?.currentTime / 60)).slice(-2) +
                        ':' +
                        ('0' + Math.floor(audioRef?.current?.currentTime % 60)).slice(-2)}
                </p>
                <div className={cx('duration')} onClick={(e) => handleDuration(e)}>
                    <div className={cx('duration-play')} style={{ width: percent + '%' }}></div>
                </div>
                <p className={cx('end')}>{idAudio?.duration ? <Duration duration={idAudio?.duration} /> : '00:00'}</p>
            </div>
            <audio
                ref={audioRef}
                src={src}
                autoPlay={activePlay}
                onEnded={handleOnEnd}
                onTimeUpdate={() => {
                    setPercent((100 * audioRef?.current.currentTime) / idAudio?.duration);
                    dispatch(setCurrentTimeAudio(audioRef?.current.currentTime));
                }}
            ></audio>
        </div>
    );
}

export default forwardRef(ControlMain);
