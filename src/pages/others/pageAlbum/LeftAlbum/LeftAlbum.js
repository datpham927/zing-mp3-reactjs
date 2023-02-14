import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import classNames from 'classnames/bind';
import ButtonAction from '~/components/Button/ButtonAction';
import style from './LeftAlbum.module.scss';
import Follow from '~/components/hooks/follow/Follow';
import Button from '~/components/Button';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBooleanEdit, setModalAddPlayList } from '~/redux/action';
import { IconLoadMusic } from '~/components/Icons/Icons';
import { setIdPlayList, setPlayListFavorite } from '~/redux/FavoriteList';
import { setActivePlay, setLoadMusic, setOpenControl } from '~/redux/dataControl';
import toastMessage from '~/components/modal/toast';
import TimeAlbum from '../TimeAlbum/TimeAlbum';
const cx = classNames.bind(style);

function LeftAlbum({ data }) {
    const dispatch = useDispatch();
    const [favorite, setFavorite] = useState([]);
    const { booleanKindPlaylist } = useSelector((state) => state.action);
    const { loadMusic, activePlay } = useSelector((state) => state.dataControl);
    const { playListFavorite } = useSelector((state) => state.Favorite);
    const { user } = useSelector((state) => state.action);
    useEffect(() => {
        setFavorite(playListFavorite?.map((e) => e.encodeId));
    }, [playListFavorite]);
    const handleLike = () => {
        user ? dispatch(setPlayListFavorite(data)) : toastMessage('Bạn vui lòng đăng nhập');
    };
    const handlePlay = () => {
        dispatch(setActivePlay(!activePlay));
    };
    const handlePause = () => {
        dispatch(setActivePlay(false));
    };
    return (
        <div className={cx('left') + ' l-4 m-4 c-12'}>
            <div className={cx('image', activePlay ? 'rotate' : 'rotate-pause')}>
                <img src={data?.thumbnailM} alt="" />

                {activePlay ? (
                    <div className={cx('song-play') + ' c-0'} onClick={handlePause}>
                        {loadMusic ? (
                            <img
                                src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                                alt=""
                            />
                        ) : (
                            <IconLoadMusic font={50} />
                        )}
                    </div>
                ) : (
                    <div className={cx('play') + ' c-0'} onClick={handlePlay}>
                        <i className="icon ic-play-circle-outline"></i>
                    </div>
                )}
            </div>
            <div className={cx('content')}>
                <h3>
                    {data?.title}
                    {!booleanKindPlaylist && (
                        <Button
                            small
                            noContent
                            iconLeft={<i className="icon ic-edit"></i>}
                            onClick={() => {
                                dispatch(setModalAddPlayList(true));
                                dispatch(setIdPlayList(data.encodeId));
                                dispatch(setBooleanEdit(true));
                            }}
                        />
                    )}
                </h3>
                <div className={cx('artist')}>
                    {data?.artists?.map((i, index) => (
                        <span key={uuidv4}>
                            <span>
                                <Link to={i?.link}>{i?.name}</Link>
                            </span>
                            {index < data?.artists?.length - 1 && ', '}
                        </span>
                    ))}
                </div>
                {booleanKindPlaylist && (
                    <div className={cx('like')}>
                        <Follow follow={data?.like} />
                        người yêu thích
                    </div>
                )}

                <ButtonAction
                    className={cx('btn-album')}
                    icon={<i className="icon ic-play"></i>}
                    action
                    onClick={() => {
                        dispatch(setActivePlay(!activePlay));
                        dispatch(setOpenControl(true));
                        dispatch(setLoadMusic(true));
                    }}
                >
                    {activePlay ? 'TẠM DỪNG' : 'TIẾP TỤC PHÁT'}
                </ButtonAction>
                <div className={cx('wrapper-icon') + ' c-0'}>
                    {booleanKindPlaylist && (
                        <Button
                            onClick={() => handleLike()}
                            primary
                            content={favorite.includes(data.encodeId) ? 'Xóa khỏi thư viện' : 'Thêm vào Thư viện'}
                            iconLeft={
                                favorite.includes(data.encodeId) ? (
                                    <i className="icon ic-like-full"></i>
                                ) : (
                                    <i className="icon ic-like"></i>
                                )
                            }
                        />
                    )}
                    <Button primary content="Khác" iconLeft={<i className="icon ic-more"></i>} />
                </div>
            </div>
            {data.song?.totalDuration && (
                <div className="m-0 l-0">
                    <TimeAlbum data={data} />
                </div>
            )}
        </div>
    );
}

export default LeftAlbum;
