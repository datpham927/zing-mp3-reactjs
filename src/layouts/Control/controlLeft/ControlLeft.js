import className from 'classnames/bind';
import { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import { setSongFavorite } from '~/redux/FavoriteList';
import style from './ControlLeft.module.scss';
const cx = className.bind(style);

function ControlLeft() {
    const idAudio = useSelector((state) => state.dataControl.idAudio);
    const { songFavorite } = useSelector((state) => state.Favorite);
    const [favorite, setFavorite] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        setFavorite(songFavorite.map((e) => e.encodeId));
    }, [songFavorite]);
    const handleLike = () => {
        dispatch(setSongFavorite(idAudio));
    };

    return (
        <div className={cx('left') + ' l-3'}>
            <div className={cx('image', 'action')}>
                <img src={idAudio?.thumbnail} alt="" />
            </div>
            <div className={cx('info')}>
                <h3>{idAudio?.title}</h3>
                <p>
                    {idAudio?.artists?.map((i, index) => (
                        <span key={index}>
                            <Link to={i.link}>{i.name}</Link>
                            {index < idAudio?.artists.length - 1 && ', '}
                        </span>
                    ))}
                </p>
            </div>
            <Button
                onClick={() => handleLike()}
                small
                content={favorite.includes(idAudio?.encodeId) ? 'Xóa khỏi thư viện' : 'Thêm vào Thư viện'}
                iconLeft={
                    favorite.includes(idAudio?.encodeId) ? (
                        <i className="icon ic-like-full"></i>
                    ) : (
                        <i className="icon ic-like"></i>
                    )
                }
            />
        </div>
    );
}

export default memo(ControlLeft);
