import className from 'classnames/bind';
import { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Slide, toast } from 'react-toastify';
import Button from '~/components/Button';
import ButtonAction from '~/components/Button/ButtonAction';
import ItemSong from '~/components/item/ItemSong/ItemSong';
import { setActivePlay, setModalPortal, setModalTimer, setModalVip } from '~/redux/action';
import { setCurrentTimeAudio } from '~/redux/currentTimeAudio';
import { deleteDataPlayList, setIdAudio, setOpenQueueList, setPlayListAudio } from '~/redux/dataControl';
import style from './QueuePlayList.module.scss';

const cx = className.bind(style);

function QueuePlayList() {
    const dispatch = useDispatch();
    const [convertTab, setConvertTab] = useState(true);
    const { currentIndex, recentList, playListAudio, booleanQueueList } = useSelector((state) => state.dataControl);
    const [other, setOther] = useState(false);
    const { timer } = useSelector((state) => state.action);
    const { playListTitle } = useSelector((state) => state.Favorite);

    const navigate = useNavigate();

    const handleOnClick = (e) => {
        if (convertTab) {
            dispatch(setIdAudio(e));
        } else {
            const listNew = [...playListAudio];
            const arrId = listNew.map((e) => e.encodeId);
            const check = arrId.includes(e.encodeId);
            if (!check) {
                listNew.unshift(e);
            }
            dispatch(setIdAudio(e));
            dispatch(setPlayListAudio(listNew));
            setConvertTab(true);
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
    useEffect(() => {
        const songPlayView = document.querySelector('.ItemSong_queue-active__pGHaU');
        if (songPlayView) {
            songPlayView?.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
        }
    }, [currentIndex]);

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
                        Danh s??ch ph??t
                    </ButtonAction>
                    <ButtonAction
                        className={cx('btn', !convertTab && 'active')}
                        onClick={() => {
                            setConvertTab(false);
                        }}
                    >
                        Nghe g???n ????y
                    </ButtonAction>
                </div>
                <div className={cx('action')}>
                    <Button
                        className={cx('btn-action', timer > 0 && 'active')}
                        iconLeft={<i className="icon ic-20-Clock"></i>}
                        content={'H???n gi??? ?????ng ph??t nh???c'}
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
                        content={'Kh??c'}
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
                                    dispatch(setCurrentTimeAudio(0));
                                    dispatch(setActivePlay(false));
                                    toast('X??a danh s??ch th??nh c??ng', {
                                        position: 'bottom-left',
                                        autoClose: 1000,
                                        hideProgressBar: true,
                                        closeOnClick: true,
                                        pauseOnHover: true,
                                        draggable: true,
                                        transition: Slide,
                                    });
                                }}
                            >
                                <i className="icon ic-delete"></i>
                                <span>X??a danh s??ch ph??t</span>
                            </div>
                            <div className={cx('download')} onClick={() => dispatch(setModalVip(true))}>
                                <i className="icon ic-download"></i>
                                <span>T???i danh s??ch ph??t</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className={cx('body')}>
                <div className={cx('list')}>
                    {convertTab ? (
                        <>
                            {playListAudio.map((e, i) =>
                                i < currentIndex ? (
                                    <ItemSong
                                        className={cx('is-pre')}
                                        onClick={() => handleOnClick(e)}
                                        data={e}
                                        key={e.encodeId}
                                        type="player-queue"
                                    />
                                ) : (
                                    i === currentIndex && (
                                        <ItemSong
                                            onClick={() => handleOnClick(e)}
                                            data={e}
                                            key={e.encodeId}
                                            type="player-queue"
                                        />
                                    )
                                ),
                            )}
                            {currentIndex < playListAudio.length - 1 && (
                                <div className={cx('next')}>
                                    <h3>Ti???p theo</h3>
                                    {playListTitle.length > 0 && (
                                        <div>
                                            <span>T??? PlayList </span>
                                            <span onClick={() => navigate(playListTitle[1])}>
                                                <span>{playListTitle[0]}</span>
                                            </span>
                                        </div>
                                    )}
                                </div>
                            )}
                            {playListAudio.map(
                                (e, i) =>
                                    i > currentIndex && (
                                        <ItemSong
                                            onClick={() => handleOnClick(e)}
                                            data={e}
                                            key={e.encodeId}
                                            type="player-queue"
                                        />
                                    ),
                            )}
                        </>
                    ) : (
                        recentList.map((e) => (
                            <ItemSong
                                onClick={() => handleOnClick(e)}
                                data={e}
                                key={e?.encodeId}
                                type="player-queue-recent"
                            />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default memo(QueuePlayList);
