/* eslint-disable react-hooks/exhaustive-deps */
import className from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getPlayMv } from '~/components/Api/Service';
import Button from '~/components/Button';
import { setIdAudio, setLoadMusic, setOpenControl } from '~/redux/dataControl';
import { setIdMv, setIndexOpenMv, setPlayMv } from '~/redux/dataMV';
import ItemPlayMv from './ItemPlayMv';
import style from './PlayMv.module.scss';
import MvArtist from './MvArtist';
import { setMvFavorite } from '~/redux/FavoriteList';
import { setActivePlay } from '~/redux/action';
import LoadImg from '~/components/load/loadImg/LoadImg';

const cx = className.bind(style);
function PlayMv() {
    const navigate = useNavigate();
    const [mp4, setMp4] = useState('');
    const [data, setData] = useState('');
    const [header, setHeader] = useState([]);
    const [favorite, setFavorite] = useState([]);
    const { mvFavorite } = useSelector((state) => state.Favorite);
    const { changerDataMv, indexOpenMv } = useSelector((state) => state.dataMv);
    const { pathname } = useLocation();
    const dispatch = useDispatch();

    const idMv = pathname.split('/').pop().split('.')[0];

    useEffect(() => {
        setFavorite(mvFavorite.map((e) => e.encodeId));
    }, [mvFavorite]);

    useEffect(() => {
        setMp4('');
        setHeader([]);
        const api = async () => {
            dispatch(setIdMv(idMv));
            const data = await getPlayMv(idMv);
            setMp4(data?.streaming?.mp4['720p']);
            setHeader([
                {
                    title: data?.title,
                    thumbnail: data?.artists[0].thumbnail,
                    artists: data?.artists,
                    encodeId: data?.encodeId,
                },
            ]);
            if (!changerDataMv) {
                setData(data);
            }
        };
        api();
    }, [idMv, changerDataMv]);

    const handleLike = () => {
        dispatch(setMvFavorite(data));
    };

    const handleClose = () => {
        dispatch(setPlayMv(false));
        if (indexOpenMv < 1) {
            navigate('/the-loai-video/Viet-Nam/IWZ9Z08I.html');
        } else {
            navigate(-indexOpenMv);
        }

        dispatch(setIndexOpenMv(0));
    };

    const handleListenAudio = () => {
        if (data.song) {
            dispatch(setIdAudio(data?.song));
            dispatch(setPlayMv(false));
            dispatch(setActivePlay(true));
            dispatch(setOpenControl(true));
            dispatch(setLoadMusic(false));
            navigate(-indexOpenMv);
            dispatch(setIndexOpenMv(0));
        } else {
            alert('Video này không có audio');
        }
    };
    return (
        <div className={cx('wrapper', 'close')}>
            <div className={cx('top')}>
                <div className={cx('header')}>
                    <div className={cx('left')}>
                        <div className={cx('image')}>
                            {header[0]?.thumbnail ? <img src={header[0]?.thumbnail} alt="" /> : <LoadImg />}
                        </div>

                        <div className={cx('info')}>
                            <h3>{header[0]?.title}</h3>
                            {header[0]?.artists?.map((i, index) => (
                                <>
                                    <span>
                                        <Link to={i.link}>{i.name}</Link>
                                    </span>
                                    {index < header[0]?.artists?.length - 1 && ', '}
                                </>
                            ))}
                        </div>
                        <Button
                            onClick={handleLike}
                            primary
                            content={favorite.includes(header[0]?.encodeId) ? 'Xóa khỏi thư viện' : 'Thêm vào Thư viện'}
                            iconLeft={
                                favorite.includes(header[0]?.encodeId) ? (
                                    <i className="icon ic-like-full"></i>
                                ) : (
                                    <i className="icon ic-like"></i>
                                )
                            }
                        />
                        <Button
                            onClick={handleListenAudio}
                            primary
                            content={'Nghe Audio'}
                            iconLeft={<i className="icon ic-song"></i>}
                        />
                    </div>
                    <div className={cx('right')}>
                        <Button
                            onClick={handleClose}
                            primary
                            content={'Đóng'}
                            iconLeft={<i className="icon ic-close"></i>}
                        />
                    </div>
                </div>
                <div className={cx('content')}>
                    <div className={cx('video')}>
                        <video
                            src={mp4}
                            autoPlay={true}
                            controls
                            onPlay={() => {
                                dispatch(setActivePlay(false));
                            }}
                        />
                    </div>
                    <div className={cx('list')}>
                        <h3>Danh Sách Phát</h3>
                        <div className={cx('list-wrapper')}>
                            {data?.recommends?.map((e, i) => (
                                <ItemPlayMv data={e} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('body')}>
                {data?.artists && data?.artists?.map((e, i) => <MvArtist value={e.alias} key={e.encodeId} />)}
            </div>
        </div>
    );
}

export default PlayMv;
