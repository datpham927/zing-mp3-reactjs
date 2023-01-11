/* eslint-disable react-hooks/exhaustive-deps */
import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ButtonAction from '~/components/Button/ButtonAction';
import Container from '~/components/container/Container';
import ContainerSongs from '~/components/container/ContainerSongs';
import toastMessage from '~/components/modal/toast';
import Empty from '~/components/Empty/Empty';
import { setCurrentIndex, setOpenQueueList, setPlayListAudio } from '~/redux/dataControl';
import { setAddPlayList, setSelectionAll } from '~/redux/FavoriteList';

import style from './LibrarySongs.module.scss';

const cx = classNames.bind(style);

function LibrarySongs() {
    const [all, setAll] = useState(false);
    const { songFavorite, addPlayList } = useSelector((state) => state.Favorite);
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

        toastMessage(`Đã ${addPlayList?.length} thêm bài hát vào danh sách`);
    };
    return songFavorite?.length > 0 ? (
        <Container title="Bài hát yêu thích">
            <div className={cx('header')}>
                <div className={cx('left')}>
                    {addPlayList?.length > 0 ? (
                        <div className={cx('add-playlist')}>
                            <div className={cx('action-checkbox', 'active-checkbox')}>
                                <i className="icon ic-song"></i>
                                <div className={cx('checkbox')} onClick={() => setAll((e) => !e)}>
                                    <input
                                        type="checkBox"
                                        checked={songFavorite?.length === addPlayList?.length}
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
        </Container>
    ) : (
        <Empty title="Chưa có bài hát yêu thích trong thư viện cá nhân" link="/moi-phat-hanh" />
    );
}

export default LibrarySongs;
