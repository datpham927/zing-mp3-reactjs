/* eslint-disable react-hooks/exhaustive-deps */
import className from 'classnames/bind';
import style from './Control.module.scss';
import ControlLeft from './ControlLeft';
import ControlRight from './ControlRigth';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '~/components/Button';
import { setActivePlay, setCurrentIndex, setIdAudio } from '~/redux/dataAudio';
import Duration from '~/components/time/Duration';
const cx = className.bind(style);
function Control() {
    const [repeat, setRepeat] = useState(false);
    const [shuffle, setShuffle] = useState(false);
    const [dataAudio, setDataAudio] = useState(false);
    const [changerTime, setChangerTime] = useState('');
    const dispatch = useDispatch();
    const listMusic = useSelector((state) => state.dataControl.playListAudio);
    const idAudio = useSelector((state) => state.dataControl.idAudio);
    const play = useSelector((state) => state.dataControl.activePlay);
    const currentIndex = useSelector((state) => state.dataControl.currentIndex);
    const audioRef = useRef();

    useEffect(() => {
        setDataAudio(listMusic.filter((e) => e.encodeId === idAudio));
    }, [idAudio]);

    useEffect(() => {
        if (play) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [play]);
    const handlePev = () => {
        if (shuffle) {
            const shuffle = Math.floor(Math.random() * listMusic.length - 1);
            dispatch(setCurrentIndex(shuffle));
        } else {
            if (listMusic[currentIndex - 1]?.streamingStatus === 2) {
                dispatch(setCurrentIndex(currentIndex - 2));
            } else {
                currentIndex < 0
                    ? dispatch(setCurrentIndex(listMusic.length - 1))
                    : dispatch(setCurrentIndex(currentIndex - 1));
            }
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
        setRepeat(!repeat);
    };
    const handleShuffle = () => {
        setShuffle(!shuffle);
    };

    const handleOnEnd = () => {
        repeat ? audioRef.current.play() : handleNext();
    };
    useEffect(() => {
        for (let i = 0; i < listMusic.length; i++) {
            if (i === currentIndex) {
                dispatch(setIdAudio(listMusic[i].encodeId));
                break;
            }
        }
    }, [currentIndex]);

    const handleDuration = (e) => {
        const newTime = (e.nativeEvent.offsetX / e.currentTarget.clientWidth) * 100;
        audioRef.current.currentTime = (newTime * audioRef.current.duration) / 100;
    };
    return (
        <div className={cx('wrapper')}>
            <ControlLeft data={dataAudio} />
            <div className={cx('main') + ' l-6'}>
                <div className={cx('action')}>
                    <Button
                        onClick={() => handleShuffle()}
                        className={cx('btn', shuffle && 'shuffle')}
                        small
                        content={shuffle ? 'Tắt phát ngẫu nhiên' : 'Bật phát ngẫu nhiên'}
                        iconLeft={<i class="icon ic-shuffle"></i>}
                    />
                    <Button
                        onClick={() => handlePev()}
                        className={cx('btn')}
                        small
                        noContent
                        iconLeft={<i class="icon ic-pre"></i>}
                    />
                    <Button
                        onClick={() => dispatch(setActivePlay(!play))}
                        className={cx('btn', 'btn-play')}
                        small
                        noContent
                        iconLeft={
                            play ? (
                                <i class="icon ic-pause-circle-outline"></i>
                            ) : (
                                <i class="icon ic-play-circle-outline"></i>
                            )
                        }
                    />
                    <Button
                        onClick={() => handleNext()}
                        className={cx('btn')}
                        small
                        noContent
                        iconLeft={<i class="icon ic-next"></i>}
                    />
                    <Button
                        onClick={() => handleRepeat()}
                        className={cx('btn')}
                        small
                        content={repeat ? 'Tắt phát lại một bài' : 'bật phát lại một bài'}
                        iconLeft={repeat ? <i class="icon ic-repeat-one"></i> : <i class="icon ic-repeat"></i>}
                    />
                </div>
                <div className={cx('time')}>
                    <p className={cx('start')}>
                        {('0' + Math.floor(audioRef?.current?.currentTime / 60)).slice(-2) +
                            ':' +
                            ('0' + Math.floor(audioRef?.current?.currentTime % 60)).slice(-2)}
                    </p>
                    <div className={cx('duration')} onClick={(e) => handleDuration(e)}>
                        <div className={cx('duration-play')} style={{ width: changerTime }}></div>
                    </div>
                    <p className={cx('end')}>
                        {listMusic[currentIndex]?.duration ? (
                            <Duration duration={listMusic[currentIndex]?.duration} />
                        ) : (
                            '00:00'
                        )}
                    </p>
                </div>
                <audio
                    ref={audioRef}
                    src={`http://api.mp3.zing.vn/api/streaming/audio/${idAudio}/320`}
                    autoPlay={play}
                    onEnded={handleOnEnd}
                    onTimeUpdate={() =>
                        setChangerTime((100 * audioRef.current.currentTime) / listMusic[currentIndex]?.duration + '%')
                    }
                ></audio>
            </div>
            <ControlRight audioRef={audioRef} />
        </div>
    );
}
export default Control;
