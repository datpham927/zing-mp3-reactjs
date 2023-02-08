/* eslint-disable no-useless-concat */
import classNames from 'classnames/bind';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import LoadImg from '~/components/load/loadImg/LoadImg';
import Duration from '~/components/hooks/Duration';
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
                    <LoadImg className={cx('load-video')}>
                        <div className={cx('video-img')} onClick={handleOnclick}>
                            <img src={data.thumbnailM} alt="" />
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
                    </LoadImg>

                    <div className={cx('video-info')}>
                        <div className={cx('info-img')}>
                            <LoadImg radius>
                                <img src={data.thumbnailM} alt="" />
                            </LoadImg>
                        </div>
                        <div className={cx('content')}>
                            <h3 className={cx('title')} onClick={handleOnclick}>
                                {data.title}
                            </h3>
                            <div className={cx('singer')}>
                                {data?.artists?.map((i, index) => (
                                    <span key={uuidv4()}>
                                        <Link onClick={handleClickArtist} to={i.link}>
                                            {i.name}
                                        </Link>
                                        {index < data?.artists?.length - 1 && ', '}
                                    </span>
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
