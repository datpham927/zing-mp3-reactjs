import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import ButtonAction from '~/components/Button/ButtonAction';
import style from './LeftAlbum.module.scss';
import Follow from '~/components/number/follow/Follow';
import Button from '~/components/Button';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActivePlay, setBooleanEdit, setModalAddPlayList } from '~/redux/action';
import { IconLoadMusic } from '~/components/Icons/Icons';
import { setIdPlayList, setPlayListFavorite } from '~/redux/FavoriteList';
import { setLoadMusic, setOpenControl } from '~/redux/dataControl';
const cx = classNames.bind(style);

function LeftAlbum({ data }) {
    const dispatch = useDispatch();
    const [favorite, setFavorite] = useState([]);
    const { activePlay, booleanKindPlaylist } = useSelector((state) => state.action);
    const { loadMusic } = useSelector((state) => state.dataControl);
    const { playListFavorite } = useSelector((state) => state.Favorite);

    useEffect(() => {
        setFavorite(playListFavorite?.map((e) => e.encodeId));
    }, [playListFavorite]);
    const handleLike = () => {
        dispatch(setPlayListFavorite(data));
    };
    const handlePlay = () => {
        dispatch(setActivePlay(!activePlay));
        dispatch(setLoadMusic(false));
        dispatch(setOpenControl(true));
    };
    const handlePause = () => {
        dispatch(setActivePlay(false));
    };
    return (
        <div className={cx('left') + ' l-4'}>
            <div className={cx('image', activePlay ? 'rotate' : 'rotate-pause')}>
                <img src={data?.thumbnailM} alt="" />

                {activePlay ? (
                    <div className={cx('song-play')} onClick={handlePause}>
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
                    <div className={cx('play')} onClick={handlePlay}>
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
                            iconLeft={<i class="icon ic-edit"></i>}
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
                        <>
                            <span>
                                <Link to={i?.link}>{i?.name}</Link>
                            </span>
                            {index < data?.artists?.length - 1 && ', '}
                        </>
                    ))}
                </div>
                {booleanKindPlaylist && (
                    <div className={cx('like')}>
                        <Follow follow={data?.like} />
                        người yêu thích
                    </div>
                )}
            </div>
            <ButtonAction
                className={cx('btn-album')}
                icon={<i className="icon ic-play"></i>}
                action
                onClick={() => {
                    dispatch(setActivePlay(!activePlay));
                    dispatch(setOpenControl(true));
                    dispatch(setLoadMusic(false));
                }}
            >
                {activePlay ? 'TẠM DỪNG' : 'TIẾP TỤC PHÁT'}
            </ButtonAction>
            <div className={cx('wrapper-icon')}>
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
    );
}

export default LeftAlbum;
