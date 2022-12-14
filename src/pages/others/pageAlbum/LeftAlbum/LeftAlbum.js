import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import ButtonAction from '~/components/Button/ButtonAction';
import style from './LeftAlbum.module.scss';
import Follow from '~/components/number/follow/Follow';
import Button from '~/components/Button';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActivePlay } from '~/redux/action';
import { IconLoadMusic } from '~/components/Icons/Icons';
import { setPlayListFavorite } from '~/redux/FavoriteList';
import { setLoadMusic, setOpenControl } from '~/redux/dataControl';
const cx = classNames.bind(style);

function LeftAlbum({ data }) {
    const dispatch = useDispatch();
    const [favorite, setFavorite] = useState([]);
    const { activePlay } = useSelector((state) => state.action);
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
                <h3>{data?.title}</h3>
                <div className={cx('artist')}>
                    {data?.artists?.map((i, index) => (
                        <>
                            <span>
                                <Link to={i.link}>{i.name}</Link>
                            </span>
                            {index < data.artists.length - 1 && ', '}
                        </>
                    ))}
                </div>
                <div className={cx('like')}>
                    <Follow follow={data.like} />
                    ng?????i y??u th??ch
                </div>
            </div>
            <ButtonAction
                className={cx('btn-album')}
                icon={<i className="icon ic-play"></i>}
                action
                onClick={() => {
                    dispatch(setActivePlay(!activePlay));
                }}
            >
                {activePlay ? 'T???M D???NG' : 'TI???P T???C PH??T'}
            </ButtonAction>
            <div className={cx('wrapper-icon')}>
                <Button
                    onClick={() => handleLike()}
                    primary
                    content={favorite.includes(data.encodeId) ? 'X??a kh???i th?? vi???n' : 'Th??m v??o Th?? vi???n'}
                    iconLeft={
                        favorite.includes(data.encodeId) ? (
                            <i className="icon ic-like-full"></i>
                        ) : (
                            <i className="icon ic-like"></i>
                        )
                    }
                />
                <Button primary content="Kh??c" iconLeft={<i className="icon ic-more"></i>} />
            </div>
        </div>
    );
}

export default LeftAlbum;
