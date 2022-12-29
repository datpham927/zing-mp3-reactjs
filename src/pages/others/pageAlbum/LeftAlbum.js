import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import ButtonAction from '~/components/Button/ButtonAction';
import LoadImg from '~/components/load/loadImg/LoadImg';
import style from './PageAlbum.module.scss';
import Follow from '~/components/follow/Follow';
import Button from '~/components/Button';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActivePlay } from '~/redux/dataAudio';
import { setOpenControl } from '~/redux/action';
const cx = classNames.bind(style);
function LeftAlbum({ data }) {
    const dispatch = useDispatch();
    const { activePlay } = useSelector((state) => state.dataControl);
    const [like, setLike] = useState(false);
    const handleLike = () => {
        setLike(!like);
    };
    const handlePlay = () => {
        dispatch(setActivePlay(true));
        dispatch(setActivePlay(!activePlay));
        dispatch(setOpenControl(true));
    };
    const handlePause = () => {
        dispatch(setActivePlay(false));
    };

    return (
        <div className={cx('left') + ' l-4'}>
            <LoadImg>
                <div className={cx('image', activePlay ? 'rotate' : 'rotate-pause')}>
                    <img src={data?.thumbnailM} alt="" />

                    {activePlay ? (
                        <div className={cx('song-play')} onClick={handlePause}>
                            <img
                                src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                                alt=""
                            />
                        </div>
                    ) : (
                        <div className={cx('play')} onClick={handlePlay}>
                            <i className="icon ic-play-circle-outline"></i>
                        </div>
                    )}
                </div>
            </LoadImg>
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
                    người yêu thích
                </div>
            </div>
            <ButtonAction
                className={cx('btn-album')}
                icon={<i className="icon ic-play"></i>}
                action
                onClick={() => {
                    dispatch(setActivePlay(!activePlay));
                    dispatch(setOpenControl(true));
                }}
            >
                {activePlay ? 'TẠM DỪNG' : 'TIẾP TỤC PHÁT'}
            </ButtonAction>
            <div className={cx('wrapper-icon')}>
                <Button
                    onClick={() => handleLike()}
                    small
                    content={like ? 'Đã thêm' : 'Thêm vào Thư viện'}
                    iconLeft={like ? <i className="icon ic-like-full"></i> : <i className="icon ic-like"></i>}
                />
                <Button primary content="Khác" iconLeft={<i className="icon ic-more"></i>} />
            </div>
        </div>
    );
}

export default LeftAlbum;
