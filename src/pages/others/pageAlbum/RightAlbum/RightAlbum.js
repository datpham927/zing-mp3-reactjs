/* eslint-disable react-hooks/exhaustive-deps */
import classNames from 'classnames/bind';
import style from './RightAlbum.module.scss';
import Container from '~/components/container/Container';
import { useEffect, useState } from 'react';
import ContainerSongs from '~/components/container/ContainerSongs';
import { setCurrentIndex, setLoadMusic, setOpenQueueList, setPlayListAudio } from '~/redux/dataControl';
import { useDispatch, useSelector } from 'react-redux';
import ButtonAction from '~/components/Button/ButtonAction';
import { setAddPlayList, setSelectionAll } from '~/redux/FavoriteList';
import toastMessage from '~/components/modal/toast';
import TimeAlbum from '../TimeAlbum/TimeAlbum';
const cx = classNames.bind(style);

function RightAlbum({ data }) {
    const [newDataSong, setDateSong] = useState(data.song.items);
    const [openMenu, setOpenMenu] = useState(false);
    const [all, setAll] = useState(false);
    const { addPlayList } = useSelector((state) => state.Favorite);
    const { booleanKindPlaylist } = useSelector((state) => state.action);
    const { playListAudio, activePlay } = useSelector((state) => state.dataControl);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPlayListAudio(newDataSong));
        const index = Math.floor(Math.random() * newDataSong?.length - 1);
        dispatch(setCurrentIndex(index));
        if (activePlay) {
            dispatch(setLoadMusic(false));
        }
    }, []);
    const handleSort = (value) => {
        const newArr = [...newDataSong];
        if (value === 'song') {
            newArr.sort((a, b) => {
                return a.title.localeCompare(b.title);
            });
            setDateSong(newArr);
        } else if (value === 'singer') {
            newArr.sort((a, b) => {
                return a.artistsNames.localeCompare(b.artistsNames);
            });
            setDateSong(newArr);
        } else {
            setDateSong(data.song.items);
        }
        setOpenMenu(false);
    };
    useEffect(() => {
        const close = (e) => {
            if (!e.target.closest('.Album_menu__4gae5') && !e.target.closest('.RightAlbum_icon-sort__q26X1')) {
                setOpenMenu(false);
            }
        };
        document.body.addEventListener('click', close);
        return () => {
            document.body.removeEventListener('click', close);
        };
    });
    useEffect(() => {
        if (all) {
            dispatch(setSelectionAll(true));
            newDataSong.forEach((e) => {
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
        dispatch(setPlayListAudio(listNew));
        dispatch(setOpenQueueList(true));
        toastMessage(`Đã ${addPlayList?.length} thêm bài hát vào danh sách`);
    };
    return (
        <div className={cx('right') + ' l-8 m-8'}>
            {data?.description && (
                <div className={cx('description')}>
                    <span>Lời tựa</span>
                    <span>{data?.description}</span>
                </div>
            )}
            {!data.sections ? (
                <>
                    <div className={cx('header')}>
                        <div className={cx('left')}>
                            {addPlayList?.length > 0 ? (
                                <div className={cx('add-playlist')}>
                                    <div className={cx('action-checkbox', 'active-checkbox')}>
                                        <i className="icon ic-song"></i>
                                        <div className={cx('checkbox')} onClick={() => setAll((e) => !e)}>
                                            <input
                                                type="checkBox"
                                                checked={newDataSong?.length === addPlayList?.length}
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
                                <div className={cx('song')}>
                                    <div className={cx('sort')}>
                                        <div className={cx('icon-sort')} onClick={() => setOpenMenu(!openMenu)}>
                                            <i className="icon ic-24-Sort"></i>
                                        </div>
                                        {openMenu && (
                                            <div className={cx('menu')}>
                                                <div onClick={() => handleSort('default')}>Mặc định</div>
                                                <div onClick={() => handleSort('song')}>Tên bài hát (A-Z)</div>
                                                <div onClick={() => handleSort('singer')}>Tên ca sĩ (A-Z) </div>
                                            </div>
                                        )}
                                    </div>
                                    BÀI HÁT
                                </div>
                            )}
                        </div>
                        <div className={cx('main') + ' c-0'}>ALBUM</div>
                        <div className={cx('right-time')}>THỜI GIAN</div>
                    </div>
                    <div className={cx('list') + ' row'}>
                        <ContainerSongs
                            type="add"
                            data={newDataSong}
                            index={newDataSong?.length}
                            checkBox
                            link={data.link}
                        />
                    </div>
                    {booleanKindPlaylist && (
                        <div className={cx('bottom') + ' c-0'}>
                            <TimeAlbum data={data} />
                        </div>
                    )}
                </>
            ) : (
                <>
                    {data?.song && (
                        <>
                            <div className={cx('header')}>
                                <span>BÀI HÁT</span>
                                <span>THỜI GIAN</span>
                            </div>
                            <div className={cx('list') + ' row'}>
                                <ContainerSongs
                                    type="add"
                                    data={data.song?.items}
                                    index={data.song?.items?.length}
                                    link={data.link}
                                />
                            </div>
                        </>
                    )}
                    {data?.sections[0] && (
                        <Container title={data?.sections[0]?.title} className={cx('list')}>
                            <ContainerSongs
                                type="add"
                                data={data?.sections[0]?.items}
                                index={data?.sections[0]?.items?.length}
                                link={data.link}
                            />
                        </Container>
                    )}
                </>
            )}
        </div>
    );
}

export default RightAlbum;
