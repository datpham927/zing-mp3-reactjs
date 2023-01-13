/* eslint-disable react-hooks/exhaustive-deps */
import className from 'classnames/bind';
import { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '~/components/Button';
import { setOpenLyric } from '~/redux/action';
import { setChangerVolume, setCurrentVolume, setOpenQueueList, setVolume } from '~/redux/dataControl';
import style from './ControlRight.module.scss';
const cx = className.bind(style);

function ControlRight() {
    const { changerVolume, volume, currentVolume, idAudio, booleanQueueList } = useSelector(
        (state) => state.dataControl,
    );
    const dispatch = useDispatch();
    var audioRef = document.querySelector('audio');
    const handleDuration = (e) => {
        const newVolume = (e.nativeEvent.offsetX / e.currentTarget.clientWidth) * 100;
        audioRef.volume = newVolume / 100;
        dispatch(setCurrentVolume(newVolume / 100));
        dispatch(setChangerVolume(newVolume));
    };
    useEffect(() => {
        if (audioRef?.volume) {
            audioRef.volume = changerVolume / 100;
        }
    }, [changerVolume]);
    return (
        <div className={cx('right') + ' l-3 m-3 c-0'}>
            <Button
                onClick={() => dispatch(setOpenLyric(true))}
                className={cx('btn')}
                small
                disable={!idAudio?.hasLyric}
                content={'Xem lời bài hát'}
                iconLeft={<i className="icon ic-karaoke"></i>}
            />
            <Button
                // onClick={() => handleLike()}
                className={cx('btn')}
                small
                content={'Chế độ cửa sổ'}
                iconLeft={<i className="icon ic-restore"></i>}
            />
            <Button
                onClick={() => {
                    dispatch(setVolume(!volume));
                    if (volume) {
                        audioRef.volume = currentVolume;
                        dispatch(setChangerVolume(currentVolume * 100));
                    } else {
                        audioRef.volume = 0;
                        dispatch(setChangerVolume(0));
                    }
                }}
                small
                className={cx('btn')}
                noContent
                iconLeft={volume ? <i className="icon ic-volume-mute"></i> : <i className="icon ic-volume"></i>}
            />
            <div className={cx('volume')} onClick={(e) => handleDuration(e)}>
                <div className={cx('volume-play')} style={{ width: `${changerVolume}%` }}></div>
            </div>
            <Button
                onClick={() => dispatch(setOpenQueueList(!booleanQueueList))}
                small
                className={cx('playlist', 'btn', booleanQueueList && 'active')}
                noContent={'Danh sách phát'}
                iconLeft={<i className="icon ic-list-music"></i>}
            />
        </div>
    );
}
export default memo(ControlRight);
