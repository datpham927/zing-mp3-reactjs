/* eslint-disable react-hooks/exhaustive-deps */
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Slide, toast } from 'react-toastify';
import ButtonAction from '~/components/Button/ButtonAction';
import Container from '~/components/container/Container';
import ContainerSongs from '~/components/container/ContainerSongs';
import ContainerVideos from '~/components/container/ContainerVideos';
import { setCurrentIndex, setOpenQueueList, setPlayListAudio } from '~/redux/dataControl';
import { setAddPlayList, setSelectionAll } from '~/redux/FavoriteList';
import Empty from '../Empty/Empty';
import style from './Bottom.module.scss';

const cx = classNames.bind(style);

function Bottom() {
    const [covertTap, setCovetTap] = useState(false);
    const [all, setAll] = useState(false);
    const { songFavorite, mvFavorite, addPlayList } = useSelector((state) => state.Favorite);
    const { playListAudio } = useSelector((state) => state.dataControl);
    const dispatch = useDispatch();
    useEffect(() => {
        if (all) {
            dispatch(setSelectionAll(true));
            songFavorite.forEach((e) => {
                dispatch(setAddPlayList(e));
            });
        } else {
            dispatch(setSelectionAll(true));
        }
    }, [all]);

    const handleAddPlayList = () => {
        const listNew = [...playListAudio];
        const arrId = listNew.map((e) => e.encodeId);
        addPlayList.forEach((e) => {
            const check = arrId.includes(e.encodeId);
            if (!check) {
                listNew.unshift(e);
            }
        });
        dispatch(setCurrentIndex(1));
        dispatch(setPlayListAudio(listNew));
        dispatch(setOpenQueueList(true));
        toast(`Đã ${addPlayList.length} thêm bài hát vào danh sách`, {
            position: 'bottom-left',
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            transition: Slide,
        });
    };
    return (
        <div className={cx('bottom')}>
            <div className={cx('select-menu')}>
                <ButtonAction onClick={() => setCovetTap(false)} className={cx('btn', !covertTap && 'active')} btnItem>
                    BÀI HÁT
                </ButtonAction>
                <ButtonAction onClick={() => setCovetTap(true)} className={cx('btn', covertTap && 'active')} btnItem>
                    MV
                </ButtonAction>
            </div>
            {covertTap ? (
                mvFavorite.length > 0 ? (
                    <ContainerVideos data={mvFavorite} />
                ) : (
                    <Empty
                        title="Chưa có MV nào trong thư viện cá nhân"
                        link="/the-loai-video/Viet-Nam/IWZ9Z08I.html"
                    />
                )
            ) : songFavorite.length > 0 ? (
                <>
                    <div className={cx('header')}>
                        <div className={cx('left')}>
                            {addPlayList.length > 0 ? (
                                <div className={cx('add-playlist')}>
                                    <div className={cx('action-checkbox', 'active-checkbox')}>
                                        <i className="icon ic-song"></i>
                                        <div className={cx('checkbox')} onClick={() => setAll((e) => !e)}>
                                            <input
                                                type="checkBox"
                                                checked={songFavorite.length === addPlayList.length}
                                            ></input>
                                        </div>
                                    </div>
                                    <ButtonAction
                                        btnItem
                                        className={cx('btn-add')}
                                        icon={<i className="icon ic-add-play-now"></i>}
                                        onClick={handleAddPlayList}
                                    >
                                        Thêm vào danh sách phát
                                    </ButtonAction>
                                </div>
                            ) : (
                                <div className={cx('song')}>BÀI HÁT</div>
                            )}
                        </div>
                        <div className={cx('main')}>ALBUM</div>
                        <div className={cx('right')}>THỜI GIAN</div>
                    </div>
                    <Container className={cx('body')}>
                        <ContainerSongs data={songFavorite} type="add" kind="private" checkBox />
                    </Container>
                </>
            ) : (
                <Empty title="Chưa có bài hát yêu thích trong thư viện cá nhân" link="/moi-phat-hanh" />
            )}
        </div>
    );
}

export default Bottom;
