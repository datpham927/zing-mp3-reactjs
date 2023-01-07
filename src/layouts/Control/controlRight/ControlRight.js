/* eslint-disable react-hooks/exhaustive-deps */
import className from 'classnames/bind';
import { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '~/components/Button';
import { setOpenLyric } from '~/redux/action';
import { setChangerVolume, setCurrentVolume, setOpenQueueList, setVolume } from '~/redux/dataControl';
import style from './ControlRight.module.scss';
const cx = className.bind(style);

function ControlRight({ audioRef }) {
    const { changerVolume, volume, currentVolume } = useSelector((state) => state.dataControl);

    const [queueList, setQueueList] = useState(false);
    const dispatch = useDispatch();

    const handleDuration = (e) => {
        const newVolume = (e.nativeEvent.offsetX / e.currentTarget.clientWidth) * 100;
        audioRef.current.volume = newVolume / 100;
        dispatch(setCurrentVolume(newVolume));
        dispatch(setChangerVolume(newVolume));
    };
    useEffect(() => {
        audioRef.current.volume = changerVolume / 100;
    }, [changerVolume]);
    useEffect(() => {
        queueList ? dispatch(setOpenQueueList(true)) : dispatch(setOpenQueueList(false));
    }, [queueList]);
    return (
        <div className={cx('right') + ' l-3'}>
            <Button
                onClick={() => dispatch(setOpenLyric(true))}
                className={cx('btn')}
                small
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
                        audioRef.current.volume = 1;
                        dispatch(setChangerVolume(currentVolume));
                    } else {
                        audioRef.current.volume = 0;
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
                onClick={() => setQueueList(!queueList)}
                small
                className={cx('playlist', 'btn', queueList && 'active')}
                noContent={'Danh sách phát'}
                iconLeft={<i className="icon ic-list-music"></i>}
            />
        </div>
    );
}
export default memo(ControlRight);
