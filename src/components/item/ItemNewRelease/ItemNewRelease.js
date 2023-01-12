import className from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setActivePlay, setIdAudio } from '~/redux/dataControl';
import { v4 as uuidv4 } from 'uuid';
import style from './ItemNewRelease.modul.scss';

const cx = className.bind(style);
function ItemNewRelease({ data, index, col = ' l-4 m-4', onClick }) {
    const dispatch = useDispatch();
    const { idAudio, activePlay } = useSelector((state) => state.dataControl);

    const handleClick = () => {
        dispatch(setIdAudio(data));
        onClick();
    };

    return (
        <li className={cx('new-release') + col}>
            <div className={cx('wrapper')} onDoubleClick={() => handleClick()}>
                <div className={cx('left')}>
                    <img src={data.thumbnailM} alt="" />
                    {activePlay === true && data?.encodeId === idAudio?.encodeId ? (
                        <div className={cx('song-play')} onClick={() => dispatch(setActivePlay(false))}>
                            <img
                                src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                                alt=""
                            />
                        </div>
                    ) : (
                        <div
                            className={cx('play', data?.encodeId === idAudio?.encodeId && 'active')}
                            onClick={() => handleClick()}
                        >
                            <i className="icon action-play ic-play"></i>
                        </div>
                    )}
                </div>
                <div className={cx('right')}>
                    <div className={cx('top')}>
                        <h1>{data?.title}</h1>
                        <span className={cx('singer')}>
                            {data?.artists?.map((i, index) => (
                                <div key={uuidv4()}>
                                    <Link to={i.link}>{i.name}</Link>
                                    {index < data?.artists?.length - 1 && ', '}
                                </div>
                            ))}
                        </span>
                    </div>
                    <div className={cx('order')}>
                        <span>#{index}</span>
                        <small>{data.album?.releaseDate}</small>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default ItemNewRelease;
