/* eslint-disable react-hooks/exhaustive-deps */
import classNames from 'classnames/bind';
import { memo } from 'react';
import { useDispatch } from 'react-redux';
import ButtonAction from '~/components/Button/ButtonAction';
import Follow from '~/components/number/follow/Follow';
import { zingArtist } from '~/redux/dataArtist';
import style from './PageArtist.module.scss';

const cx = classNames.bind(style);

function ArtistHeader({ data }) {
    const dispatch = useDispatch();
    return (
        <div className={cx('header')}>
            <div className={cx('left') + ' l-7'}>
                <h1 className={cx('name')}>{data?.name}</h1>
                <div className={cx('describe')}>
                    {data?.sortBiography && (
                        <>
                            <span className={cx('biography')}>{data?.sortBiography}</span>
                            <span
                                className={cx('more')}
                                onClick={() => dispatch(zingArtist.actions.setModalArtist(true))}
                            >
                                ... XEM THÊM
                            </span>
                        </>
                    )}
                </div>
                {data?.totalFollow && (
                    <div className={cx('actions')}>
                        <ButtonAction icon={<i className="icon ic-play"></i>} action>
                            PHÁT NHẠC
                        </ButtonAction>
                        <ButtonAction>
                            QUAN TÂM • <Follow follow={data?.totalFollow} />
                        </ButtonAction>
                    </div>
                )}
                {data?.topAlbum && (
                    <div className={cx('top')}>
                        <div className={cx('thumb')}>
                            <img src={data?.topAlbum.thumbnail} alt="" />
                            <div className={cx('play')}>
                                <i className="icon action-play ic-play"></i>
                            </div>
                            <div className={cx('song-play')}>
                                <img
                                    src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className={cx('content')}>
                            <span>MỚI NHẤT</span>
                            <h4>{data?.topAlbum.title}</h4>
                            <h3>{data?.topAlbum.releaseDate}</h3>
                        </div>
                    </div>
                )}
            </div>
            <div className={cx('right')}>{data?.thumbnailM && <img src={data?.thumbnailM} alt="" />}</div>
        </div>
    );
}

export default memo(ArtistHeader);
