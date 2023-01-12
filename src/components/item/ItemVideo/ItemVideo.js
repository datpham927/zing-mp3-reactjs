/* eslint-disable no-useless-concat */
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import LoadImg from '~/components/load/loadImg/LoadImg';

import Duration from '~/components/number/time/Duration';
import { setActivePlay } from '~/redux/dataControl';
import { setChangerDataMv, setIndexOpenMv, setPlayMv } from '~/redux/dataMV';
import styles from './ItemVideo.module.scss';

const cx = classNames.bind(styles);
function ItemVideo({ data }) {
    const dispatch = useDispatch();
    const { playMv, indexOpenMv } = useSelector((state) => state.dataMv);
    const navigate = useNavigate();
    const handleOnclick = () => {
        navigate(data?.link);
        dispatch(setActivePlay(false));
        dispatch(setChangerDataMv(false));
        dispatch(setPlayMv(true));
        dispatch(setIndexOpenMv(indexOpenMv + 1));
    };
    const handleClickArtist = () => {
        dispatch(setPlayMv(false));
    };
    const id = useSelector((state) => state.dataMv.idMv);
    return (
        data && (
            <li className={cx('item') + ' l-4 m-4 c-12 col'}>
                <div className={cx('wrapper')}>
                    <div className={cx('video-img')} onClick={handleOnclick}>
                        {data?.thumbnailM ? (
                            <img src={data?.thumbnailM} alt="" />
                        ) : (
                            <LoadImg className={cx('load-video')} />
                        )}
                        <div className={cx('play', id === data.encodeId && 'active')}>
                            {playMv && id === data.encodeId ? (
                                <p style={{ fontSize: '1.4rem' }}>Đang phát </p>
                            ) : (
                                <i className="icon ic-play-circle-outline"></i>
                            )}
                        </div>
                        <div className={cx('time')}>
                            <span>{<Duration duration={data?.duration} />}</span>
                        </div>
                    </div>
                    <div className={cx('video-info')}>
                        <div className={cx('info-img')}>
                            {data?.thumbnail ? <img src={data?.thumbnail} alt="" /> : <LoadImg radius />}
                        </div>
                        <div className={cx('content')}>
                            <h3 className={cx('title')} onClick={handleOnclick}>
                                {data.title}
                            </h3>
                            <div className={cx('singer')}>
                                {data?.artists?.map((i, index) => (
                                    <>
                                        <Link onClick={handleClickArtist} to={i.link}>
                                            {i.name}
                                        </Link>
                                        {index < data?.artists?.length - 1 && ', '}
                                    </>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        )
    );
}

export default ItemVideo;
