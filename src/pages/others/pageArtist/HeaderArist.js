/* eslint-disable react-hooks/exhaustive-deps */
import classNames from 'classnames/bind';
import { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as searchApi from '~/components/Api/Service';
import ButtonAction from '~/components/Button/ButtonAction';
import { zingArtist } from '~/redux/data';
import style from './PageArtist.module.scss';

const cx = classNames.bind(style);

function HeaderArtist() {
    const id = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchApi = async () => {
            const data = await searchApi.artist(id.name);
            dispatch(zingArtist.actions.setDataArtist(data));

            data.sections &&
                data.sections.forEach((i) => {
                    // eslint-disable-next-line no-unused-expressions
                    i.title === 'Bài hát nổi bật'
                        ? dispatch(zingArtist.actions.setArtist_Song(i))
                        : i.title === 'Single & EP'
                        ? dispatch(zingArtist.actions.setArtist_Singer(i))
                        : i.title === 'MV'
                        ? dispatch(zingArtist.actions.setArtist_MV(i))
                        : i.title === 'Album'
                        ? dispatch(zingArtist.actions.setArtist_Album(i))
                        : '';
                });
        };
        fetchApi();
    }, [id.name]);
    const data = useSelector((state) => state.data.dataArtist);
    return (
        <div className={cx('header')}>
            <div className={cx('left') + ' l-7'}>
                <h1 className={cx('name')}>{data?.name}</h1>
                <div className={cx('describe')}>
                    <span className={cx('biography')}>{data.sortBiography}</span>
                    {data.biography && (
                        <span className={cx('more')} onClick={() => dispatch(zingArtist.actions.setModalArtist(true))}>
                            ... XEM THÊM
                        </span>
                    )}
                </div>
                {data.totalFollow && (
                    <div className={cx('actions')}>
                        <ButtonAction icon={<i className="icon ic-play"></i>} action>
                            PHÁT NHẠC
                        </ButtonAction>
                        <ButtonAction>
                            QUAN TÂM • {data?.totalFollow && data?.totalFollow.toString().substring(0, 2) / 10 + 'M'}
                        </ButtonAction>
                    </div>
                )}
                {data.topAlbum && (
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

export default memo(HeaderArtist);
