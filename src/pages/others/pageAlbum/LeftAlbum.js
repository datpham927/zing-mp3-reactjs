import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import ButtonAction from '~/components/Button/ButtonAction';
import LoadImg from '~/components/loadImg/LoadImg';
import style from './PageAlbum.module.scss';
import Follow from '~/components/follow/Follow';
import Button from '~/components/Button';

const cx = classNames.bind(style);

function LeftAlbum({ data }) {
    return (
        <div className={cx('left') + ' l-4'}>
            <LoadImg>
                {/* 'rotate' */}
                <div className={cx('image')}>
                    <img src={data?.thumbnailM} alt="" />

                    <div className={cx('play')}>
                        <i className="icon ic-play-circle-outline"></i>
                    </div>
                    <div className={cx('song-play')}>
                        <img src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif" alt="" />
                    </div>
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
            <ButtonAction icon={<i className="icon ic-play"></i>} action>
                TIẾP TỤC PHÁT
            </ButtonAction>
            <div className={cx('wrapper-icon')}>
                <Button primary content="Thêm vào thư viện" iconLeft={<i className="icon ic-like"></i>} />
                {/* <Button primary content="Xóa khỏi thư viện" iconLeft={<i className="icon ic-like-full"></i>} /> */}
                <Button primary content="Khác" iconLeft={<i className="icon ic-more"></i>} />
            </div>
        </div>
    );
}

export default LeftAlbum;
