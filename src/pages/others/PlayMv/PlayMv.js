/* eslint-disable react-hooks/exhaustive-deps */
import className from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getPlayMv } from '~/components/Api/Service';
import Button from '~/components/Button';
import { setOpenControl } from '~/redux/action';
import { setActivePlay, setIdAudio } from '~/redux/dataAudio';
import { setIdMv, setIndexOpenMv, setPlayMv } from '~/redux/dataMV';
import ItemPlayMv from './ItemPlayMv';
import style from './PlayMv.module.scss';
import MvArtist from './MvArtist';
import { setMvFavorite } from '~/redux/FavoriteList';

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

    console.log(data);
    const handleLike = () => {
        dispatch(setMvFavorite(data));
    };

    const handleClose = () => {
        dispatch(setPlayMv(false));
        navigate(-indexOpenMv);
        dispatch(setIndexOpenMv(0));
    };

    const handleListenAudio = () => {
        dispatch(setIdAudio(data?.song));
        dispatch(setPlayMv(false));
        dispatch(setActivePlay(true));
        dispatch(setOpenControl(true));
        navigate(-indexOpenMv);
        dispatch(setIndexOpenMv(0));
    };
    return (
        <div className={cx('wrapper', 'close')}>
            <div className={cx('top')}>
                <div className={cx('header')}>
                    <div className={cx('left')}>
                        <img src={header[0]?.thumbnail} alt="" />
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
                            onClick={() => handleLike()}
                            primary
                            content={favorite.includes(header[0]?.encodeId) ? 'Đã thêm' : 'Thêm vào Thư viện'}
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
                            iconLeft={<i class="icon ic-song"></i>}
                        />
                    </div>
                    <div className={cx('right')}>
                        <Button
                            onClick={handleClose}
                            primary
                            content={'Đóng'}
                            iconLeft={<i class="icon ic-close"></i>}
                        />
                    </div>
                </div>
                <div className={cx('content')}>
                    <div className={cx('video')}>
                        <video src={mp4} autoPlay={true} controls />
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
                {data?.artists && data?.artists?.map((e, i) => <MvArtist value={e.alias} key={i} />)}
            </div>
        </div>
    );
}

export default PlayMv;
