/* eslint-disable no-unused-vars */
import className from 'classnames/bind';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import Follow from '~/components/number/follow/Follow';
import { Icon } from '~/components/Icons';
import { setModalFollow } from '~/redux/action';
import style from './ModalFollow.module.scss';
import FormatDate from '~/components/number/time/FormatDate';
import ModalWrapper from '../ModalWrapper/ModalWrapper';
const cx = className.bind(style);
function ModalFollow() {
    const [selection, setSelection] = useState(false);

    const [like, setLike] = useState(false);
    const handleLike = () => {
        setLike(!like);
    };
    const dispatch = useDispatch();

    const { booleanModalFollow } = useSelector((state) => state.action);
    const data = useSelector((state) => state.dataVideo.dataVideoFl);
    var Video;
    if (data?.content?.type === 'feedVideo') {
        Video = Object.values(data?.content?.source)[0];
    }
    return (
        booleanModalFollow && (
            <ModalWrapper>
                {' '}
                <div className={cx('body')}>
                    <div className={cx('left') + ' l-7'}>
                        {data?.content?.type === 'album' ? (
                            <img src={data?.content?.photos[0].url} alt="" />
                        ) : (
                            <video controls src={Video} />
                        )}
                    </div>
                    <div className={cx('right') + ' l-5'}>
                        <div className={cx('top')}>
                            <div className={cx('image')}>
                                <img src={data?.publisher.thumbnail} alt="" />
                            </div>
                            <div className={cx('info')}>
                                <div>
                                    <Link to={data?.publisher.link}>
                                        {data?.publisher.name} onClick={() => dispatch(setModalFollow(false))}
                                    </Link>
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
                        <div className={cx('content')}>
                            <div className={cx('title')}>{data?.description}</div>
                            <div className={cx('actions')}>
                                <Button
                                    onClick={() => handleLike()}
                                    className={cx('footer-btn')}
                                    noContent
                                    iconLeft={
                                        like ? <i className="icon ic-like-full"></i> : <i className="icon ic-like"></i>
                                    }
                                >
                                    Thích
                                </Button>
                            </div>
                            <p className={cx('like')}>
                                <span>
                                    <Follow follow={like ? data?.like + 1 : data?.like} /> lược thích
                                </span>
                                <span>•</span>
                                <span>
                                    <Follow follow={data?.commend} /> bình luận
                                </span>
                            </p>
                        </div>

                        <div className={cx('footer')}>
                            <i className="icon ic-info"></i> Vào ứng dụng Zing MP3 để bình luận
                        </div>
                    </div>
                </div>
                <Button
                    noContent
                    className={cx('close')}
                    iconLeft={<Icon.IconClose />}
                    onClick={() => dispatch(setModalFollow(false))}
                />
            </ModalWrapper>
        )
    );
}

export default ModalFollow;
