import className from 'classnames/bind';
import { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '~/components/Button';
import ButtonAction from '~/components/Button/ButtonAction';
import ItemSong from '~/components/item/ItemSong/ItemSong';
import {
    setActivePlay,
    setModalPortal,
    setModalTimer,
    setModalVip,
    setOpenControl,
    setOpenQueueList,
} from '~/redux/action';
import { deleteDataPlayList, setChangerTime, setCurrentIndex, setIdAudio, setPlayListAudio } from '~/redux/dataControl';
import style from './QueuePlayList.module.scss';

const cx = className.bind(style);

function QueuePlayList() {
    const dispatch = useDispatch();
    const [convertTab, setConvertTab] = useState(true);
    const [other, setOther] = useState(false);
    const listMusic = useSelector((state) => state.dataControl.playListAudio);
    const { currentIndex, recentList } = useSelector((state) => state.dataControl);
    const { booleanQueueList, timer } = useSelector((state) => state.action);
    const { playListTitle } = useSelector((state) => state.Favorite);

    const navigate = useNavigate();

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

    useEffect(() => {
        const close = (e) => {
            if (
                !e.target.closest('.QueuePlayList_other__f6T33') &&
                !e.target.closest('.btn-other') &&
                !e.target.closest('.ModalVip_modal-vip__GyAkv')
            ) {
                setOther(false);
            }
        };
        document.body.addEventListener('click', close);
        return () => {
            document.body.removeEventListener('click', close);
        };
    });

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
                        className={cx('btn-action', timer > 0 && 'active')}
                        iconLeft={<i className="icon ic-20-Clock"></i>}
                        content={'Hẹn giờ đừng phát nhạc'}
                        primary
                        onClick={() => {
                            if (timer > 0) {
                                dispatch(setModalPortal(true));
                            } else {
                                dispatch(setModalTimer(true));
                            }
                        }}
                    />
                    <Button
                        className={cx('btn-action', 'btn-other')}
                        iconLeft={<i className="icon ic-more"></i>}
                        content={'Khác'}
                        primary
                        onClick={() => setOther(true)}
                    />
                    {other && (
                        <div className={cx('other')}>
                            <div
                                className={cx('delete')}
                                onClick={() => {
                                    dispatch(deleteDataPlayList());
                                    setOther(false);
                                    dispatch(setOpenControl(false));
                                    dispatch(setOpenQueueList(false));
                                    dispatch(setChangerTime(0));
                                    dispatch(setActivePlay(false));
                                    dispatch(setIdAudio([]));
                                    dispatch();
                                }}
                            >
                                <i class="icon ic-delete"></i>
                                <span>Xóa danh sách phát</span>
                            </div>
                            <div className={cx('download')} onClick={() => dispatch(setModalVip(true))}>
                                <i class="icon ic-download"></i>
                                <span>Tải danh sách phát</span>
                            </div>
                        </div>
                    )}
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
                                        />
                                    ),
                            )}
                            {currentIndex < listMusic.length - 1 && (
                                <div className={cx('next')}>
                                    <h3>Tiếp theo</h3>
                                    {playListTitle.length > 0 && (
                                        <div>
                                            <span>Từ PlayList </span>
                                            <span onClick={() => navigate(playListTitle[1])}>
                                                <span>{playListTitle[0]}</span>
                                            </span>
                                        </div>
                                    )}
                                </div>
                            )}
                            {listMusic.map(
                                (e, i) =>
                                    i > currentIndex && (
                                        <ItemSong
                                            onClick={() => handleOnClick(i)}
                                            data={e}
                                            key={e.encodeId}
                                            type="player-queue"
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

export default memo(QueuePlayList);
