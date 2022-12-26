import className from 'classnames/bind';
import { useState } from 'react';
import Button from '~/components/Button';
import style from './Control.module.scss';
const cx = className.bind(style);
function ControlRight({ audioRef }) {
    const [volume, setVolume] = useState(false);
    const [changerVolume, setChangerVolume] = useState(100);
    const handleDuration = (e) => {
        const newVolume = (e.nativeEvent.offsetX / e.currentTarget.clientWidth) * 100;
        audioRef.current.volume = newVolume / 100;
        setChangerVolume(newVolume);
    };
    return (
        <div className={cx('right') + ' l-3'}>
            <Button
                // onClick={() => handleLike()}
                className={cx('btn')}
                small
                content={'Xem lời bài hát'}
                iconLeft={<i class="icon ic-karaoke"></i>}
            />
            <Button
                // onClick={() => handleLike()}
                className={cx('btn')}
                small
                content={'Chế độ cửa sổ'}
                iconLeft={<i class="icon ic-restore"></i>}
            />
            <Button
                onClick={() => {
                    setVolume(!volume);
                    if (volume) {
                        audioRef.current.volume = 1;
                        setChangerVolume(100);
                    } else {
                        audioRef.current.volume = 0;
                        setChangerVolume(0);
                    }
                }}
                small
                className={cx('btn')}
                noContent
                iconLeft={volume ? <i class="icon ic-volume-mute"></i> : <i class="icon ic-volume"></i>}
            />
            <div className={cx('volume')} onClick={(e) => handleDuration(e)}>
                <div className={cx('volume-play')} style={{ width: `${changerVolume}%` }}></div>
            </div>
            <Button
                // onClick={() => setVolume(!volume)}
                small
                className={cx('playlist', 'btn')}
                noContent={'Danh sách phát'}
                iconLeft={<i class="icon ic-list-music"></i>}
            />
        </div>
    );
}
export default ControlRight;
