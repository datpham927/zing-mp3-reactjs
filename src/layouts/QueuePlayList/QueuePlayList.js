import className from 'classnames/bind';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '~/components/Button';
import ButtonAction from '~/components/Button/ButtonAction';
import ItemSong from '~/components/item/ItemSong/ItemSong';
import { setModalTimer, setOpenControl } from '~/redux/action';
import { setCurrentIndex, setPlayListAudio } from '~/redux/dataAudio';
import style from './QueuePlayList.module.scss';

const cx = className.bind(style);

function QueuePlayList() {
    const dispatch = useDispatch();
    const [convertTab, setConvertTab] = useState(true);
    const listMusic = useSelector((state) => state.dataControl.playListAudio);
    const { currentIndex, recentList } = useSelector((state) => state.dataControl);
    const { booleanQueueList } = useSelector((state) => state.action);

    const handleOnClick = (i) => {
        if (convertTab) {
            dispatch(setCurrentIndex(i));
            dispatch(setOpenControl(true));
        } else {
            dispatch(setCurrentIndex(i));
            setConvertTab(true);
            dispatch(setPlayListAudio(recentList));
        }
    };
    return (
        <div className={cx('container', booleanQueueList ? 'open' : 'close')}>
            <div className={cx('header')}>
                <div className={cx('tab')}>
                    <ButtonAction
                        className={cx('btn', convertTab && 'active')}
                        onClick={() => {
                            setConvertTab(true);
                        }}
                    >
                        Danh sách phát
                    </ButtonAction>
                    <ButtonAction
                        className={cx('btn', !convertTab && 'active')}
                        onClick={() => {
                            setConvertTab(false);
                        }}
                    >
                        Nghe gần đây
                    </ButtonAction>
                </div>
                <div className={cx('action')}>
                    <Button
                        className={cx('btn-action')}
                        iconLeft={<i className="icon ic-20-Clock"></i>}
                        content={'Hẹn giờ đừng phát nhạc'}
                        primary
                        onClick={() => dispatch(setModalTimer(true))}
                    />
                    <Button
                        className={cx('btn-action')}
                        iconLeft={<i className="icon ic-more"></i>}
                        content={'Khác'}
                        primary
                    />
                </div>
            </div>
            <div className={cx('body')}>
                <div className={cx('list')}>
                    {convertTab ? (
                        <>
                            {listMusic.map(
                                (e, i) =>
                                    i <= currentIndex && (
                                        <ItemSong
                                            onClick={() => handleOnClick(i)}
                                            data={e}
                                            key={e.encodeId}
                                            type="player-queue"
                                            timeLoad={500}
                                        />
                                    ),
                            )}
                            {currentIndex < listMusic.length - 1 && <div className={cx('next')}>Tiếp theo</div>}
                            {listMusic.map(
                                (e, i) =>
                                    i > currentIndex && (
                                        <ItemSong
                                            onClick={() => handleOnClick(i)}
                                            data={e}
                                            key={e.encodeId}
                                            type="player-queue"
                                            timeLoad={500}
                                        />
                                    ),
                            )}
                        </>
                    ) : recentList.length > 0 ? (
                        recentList.map((e, i) => (
                            <ItemSong
                                onClick={() => handleOnClick(i)}
                                data={e}
                                key={e.encodeId}
                                type="player-queue-recent"
                                timeLoad={500}
                            />
                        ))
                    ) : (
                        <p>không có dữ liệu</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default QueuePlayList;
