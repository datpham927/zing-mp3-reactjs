import className from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setChangerDataMv, setIndexOpenMv, setPlayMv } from '~/redux/dataMV';
import style from './PlayMv.module.scss';

const cx = className.bind(style);

function ItemPlayMv({ data }) {
    const { idMv, playMv, indexOpenMv } = useSelector((state) => state.dataMv);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleOnclick = () => {
        dispatch(setChangerDataMv(true));
        dispatch(setPlayMv(true));
        navigate(data.link);
        dispatch(setIndexOpenMv(indexOpenMv + 1));
    };
    const handleClickArtist = () => {
        dispatch(setPlayMv(false));
    };
    return (
        <div className={cx('item', data?.encodeId === idMv && 'active')}>
            <div className={cx('include')}>
                <div className={cx('image')} onClick={handleOnclick}>
                    <img src={data?.thumbnail} alt="" />
                    <div className={cx('play')}>
                        {playMv && data?.encodeId === idMv ? (
                            <p style={{ fontSize: '1.4rem' }}>Đang phát </p>
                        ) : (
                            <i className="icon action-play ic-play"></i>
                        )}
                    </div>
                </div>
                <div className={cx('info')}>
                    <p onClick={handleOnclick}>{data?.title}</p>
                    <span>
                        {data?.artists?.map((i, index) => (
                            <>
                                <Link onClick={handleClickArtist} to={i.link}>
                                    {i.name}
                                </Link>
                                {index < data?.artists?.length - 1 && ', '}
                            </>
                        ))}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ItemPlayMv;
