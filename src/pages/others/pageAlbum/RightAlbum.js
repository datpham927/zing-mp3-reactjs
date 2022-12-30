/* eslint-disable react-hooks/exhaustive-deps */
import classNames from 'classnames/bind';
import style from './PageAlbum.module.scss';
import Container from '~/components/container/Container';
import { useEffect, useState } from 'react';
import ContainerSongs from '~/components/container/ContainerSongs';
import { setCurrentIndex, setPlayListAudio } from '~/redux/dataAudio';
import { useDispatch } from 'react-redux';
const cx = classNames.bind(style);

function RightAlbum({ data }) {
    const [newDataSong, setDateSong] = useState(data.song.items);
    const [openMenu, setOpenMenu] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPlayListAudio(newDataSong));
        dispatch(setCurrentIndex(0));
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
    window.onclick = (e) => {
        if (!e.target.closest('.Album_menu__4gae5') && !e.target.closest('.PageAlbum_icon-sort__JN9TM')) {
            setOpenMenu(false);
        }
    };
    return (
        <div className={cx('right') + ' l-8'}>
            {data?.description && (
                <div className={cx('description')}>
                    <span>Lời tựa</span>
                    <span>{data?.description}</span>
                </div>
            )}
            {!data.sections ? (
                <>
                    <div className={cx('header')}>
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
                        <span>ALBUM</span>
                        <span>THỜI GIAN</span>
                    </div>
                    <div className={cx('list') + ' row'}>
                        <ContainerSongs type="add" data={newDataSong} index={newDataSong.length} />
                    </div>
                    <h1 className={cx('bottom')}>
                        <span>{data.song?.total + ' bài hát •'} </span>
                        <span>
                            {data.song?.totalDuration > 3600
                                ? Math.floor(data.song?.totalDuration / 3600) +
                                  ' giờ ' +
                                  (data.song?.totalDuration % 3600 !== 0 &&
                                      Math.floor((data.song?.totalDuration % 3600) / 60) + ' phút')
                                : Math.floor(data.song?.totalDuration / 60) + ' phút'}
                        </span>
                    </h1>
                </>
            ) : (
                <>
                    {data.song && (
                        <>
                            <div className={cx('header')}>
                                <span>BÀI HÁT</span>
                                <span>THỜI GIAN</span>
                            </div>
                            <div className={cx('list') + ' row'}>
                                <ContainerSongs type="add" data={data.song?.items} index={data.song?.items.length} />
                            </div>
                        </>
                    )}
                    {data?.sections[0] && (
                        <Container title={data?.sections[0]?.title} className={cx('container')}>
                            <div className={cx('list') + ' row'}>
                                <ContainerSongs
                                    type="add"
                                    data={data?.sections[0].items}
                                    index={data?.sections[0].items.length}
                                />
                            </div>
                        </Container>
                    )}
                </>
            )}
        </div>
    );
}

export default RightAlbum;
