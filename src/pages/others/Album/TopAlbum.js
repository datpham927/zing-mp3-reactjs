import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import ButtonAction from '~/components/Button/ButtonAction';
import ItemSongAdd from '~/components/ItemSong/ItemSongAdd';
import LoadImg from '~/components/loadImg/LoadImg';
import style from './Album.module.scss';
import Container from '~/components/container/container';
import { useState } from 'react';

const cx = classNames.bind(style);

function TopAlum({ data }) {
    const [newDataSong, setDateSong] = useState(data.song.items);
    const [openMenu, setOpenMenu] = useState(false);
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
        if (!e.target.closest('.Album_menu__4gae5') && !e.target.closest('.Album_icon-sort__Wfq4Z')) {
            setOpenMenu(false);
        }
    };
    return (
        <div className={cx('top')}>
            <div className={cx('left') + ' l-4'}>
                <LoadImg>
                    {/* 'rotate' */}
                    <div className={cx('image')}>
                        <img src={data?.thumbnailM} alt="" />

                        <div className={cx('play')}>
                            <i class="icon ic-play-circle-outline"></i>
                        </div>
                        <div className={cx('song-play')}>
                            <img
                                src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                                alt=""
                            />
                        </div>
                    </div>
                </LoadImg>
                <div className={cx('content')}>
                    <h3>{data?.title}</h3>
                    <div className={cx('artist')}>
                        {data?.artists?.map((i, index) => (
                            <>
                                <span>
                                    <Link to={`/nghesi/${i.alias}`}>{i.name}</Link>
                                </span>
                                {index < data.artists.length - 1 && ', '}
                            </>
                        ))}
                    </div>
                    <div className={cx('like')}>{data.like + ' người yêu thích'} </div>
                </div>
                <ButtonAction icon={<i class="icon ic-play"></i>} action>
                    TIẾP TỤC PHÁT
                </ButtonAction>
            </div>

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
                                        <i class="icon ic-24-Sort"></i>
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
                            {newDataSong?.map((item, index) => (
                                <ItemSongAdd key={index} data={item} />
                            ))}
                        </div>
                        <h1 className={cx('bottom')}>
                            <span>{data.song?.total + ' bài hát •'} </span>
                            <span>
                                {data.song?.totalDuration > 3600
                                    ? Math.floor(data.song?.totalDuration / 3600) +
                                      ' giờ ' +
                                      Math.floor((data.song?.totalDuration % 3600) / 60) +
                                      ' phút'
                                    : Math.floor(data.song?.totalDuration / 60) + ' phút'}
                            </span>
                        </h1>
                    </>
                ) : (
                    <>
                        <div className={cx('header')}>
                            <span>BÀI HÁT</span>
                            <span>THỜI GIAN</span>
                        </div>
                        <div className={cx('list') + ' row'}>
                            {data.song?.items.map((item, index) => (
                                <ItemSongAdd key={index} data={item} />
                            ))}
                        </div>

                        <Container title={data?.sections[0]?.title} className={cx('container')}>
                            <div className={cx('list') + ' row'}>
                                {data?.sections[0].items?.map((item, index) => (
                                    <ItemSongAdd key={index} data={item} />
                                ))}
                            </div>
                        </Container>
                    </>
                )}
            </div>
        </div>
    );
}

export default TopAlum;
