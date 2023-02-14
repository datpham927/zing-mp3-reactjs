import className from 'classnames/bind';
import style from './ItemFollowing.module.scss';
import Button from '~/components/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setDataFollow } from '~/redux/dataFollow';
import { setModalFollow } from '~/redux/action';

import Follow from '~/components/hooks/follow/Follow';
import FormatDate from '~/components/hooks/time/FormatDate';
import LoadImg from '~/components/load/loadImg/LoadImg';

const cx = className.bind(style);

function ItemFollowing({ data }) {
    const [selection, setSelection] = useState(false);
    const [like, setLike] = useState(false);

    var img = '';
    if (data.content.type === 'album') {
        img = data.content?.photos[0].url;
    } else if (data.content.type === 'feedVideo') {
        img = data.content?.thumbnail;
    }
    const dispatch = useDispatch();
    const handelClick = (e) => {
        dispatch(setDataFollow(e));
        dispatch(setModalFollow(true));
    };

    return (
        <div className="l-6 m-6 c-12 col">
            <div className={cx('feed-card')}>
                <div className={cx('top')}>
                    <div className={cx('image')}>
                        <LoadImg>
                            <img src={data?.publisher?.thumbnail} alt="" />
                        </LoadImg>
                    </div>
                    <div className={cx('info')}>
                        <div>
                            <Link to={data?.publisher?.link}>{data?.publisher?.name}</Link>
                            <span>•</span>
                            <span
                                className={cx('btn', !selection && 'active')}
                                onClick={() => setSelection(!selection)}
                            >
                                {selection ? 'Đã quan tâm' : 'Quan Tâm'}
                            </span>
                        </div>
                        <p className={cx('subtitle')}>
                            <FormatDate time={data?.createdTime} />
                        </p>
                    </div>
                </div>
                <div className={cx('body')}>
                    <div className={cx('title')}>{data?.shortDescription}</div>
                    <div className={cx('main')} onClick={() => handelClick(data)}>
                        <LoadImg>
                            {img ? (
                                <img src={img} alt="" />
                            ) : (
                                <LoadImg>
                                    <img src={img} alt="" />
                                </LoadImg>
                            )}
                        </LoadImg>
                        {data.content.type === 'feedVideo' && (
                            <div className={cx('modal-image')}>
                                <div className={cx('icon-play')}>
                                    <Button noContent iconLeft={<i className="icon ic-play-circle-outline"></i>} />
                                </div>
                            </div>
                        )}
                    </div>
                    <div className={cx('footer')}>
                        <Button
                            onClick={() => setLike(!like)}
                            className={cx('footer-btn')}
                            noContent
                            iconLeft={like ? <i className="icon ic-like-full"></i> : <i className="icon ic-like"></i>}
                        >
                            <Follow follow={like ? data?.like + 1 : data?.like} />
                        </Button>

                        <Button noContent className={cx('footer-btn')} iconLeft={<i className="icon ic-comment"></i>}>
                            {data?.commend}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemFollowing;
