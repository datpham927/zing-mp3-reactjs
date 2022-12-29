import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '~/components/Button';
import LoadImg from '~/components/load/loadImg/LoadImg';
import styles from './ItemPlayList.module.scss';

const cx = classNames.bind(styles);

function ItemPlayList({ data, timeLoad = 1000, type = '', description, className }) {
    const [like, setLike] = useState(false);
    const navigate = useNavigate();
    const handleLike = () => {
        setLike(!like);
    };
    const handleOnClick = (e) => {
        if (e.target === e.currentTarget || e.target.closest('.ItemPlayList_icon-play__e5DCq')) {
            navigate(data.link);
        }
    };
    return type === 'Single & EP' ? (
        <li className={cx('item', className) + ' l-3 m-4 c-6 col '}>
            <div className={cx('wrapper')}>
                <LoadImg timeLoad={timeLoad}>
                    <div className={cx('image-hover')}>
                        <div className={cx('container-image')}>
                            <img src={data.thumbnailM} alt="" />
                            <div className={cx('modal-image')} onClick={(e) => handleOnClick(e)}>
                                <div className={cx('favorite')}>
                                    <Button
                                        onClick={() => handleLike()}
                                        small
                                        content={like ? 'Đã thêm' : 'Thêm vào Thư viện'}
                                        iconLeft={
                                            like ? (
                                                <i className="icon ic-like-full"></i>
                                            ) : (
                                                <i className="icon ic-like"></i>
                                            )
                                        }
                                    />
                                </div>
                                <div className={cx('icon-play')}>
                                    <Button noContent iconLeft={<i className="icon ic-play-circle-outline"></i>} />
                                </div>
                                <Button
                                    small
                                    content="khác"
                                    // onClick={() => handleLike()}
                                    iconLeft={<i className="icon ic-more"></i>}
                                />
                            </div>
                        </div>
                    </div>
                </LoadImg>
                <div className={cx('content')}>
                    <span className={cx('title')}>
                        <Link to={data.link}>{data.title}</Link>
                    </span>
                    {data.artists &&
                        (data.artists.length > 0 ? (
                            <span className={cx('subtitle')} style={{ color: 'var(--text-secondary)' }}>
                                {data.releaseDate}
                            </span>
                        ) : (
                            <Link to={data.artists.link}>{data.artists.alias}</Link>
                        ))}
                </div>
            </div>
        </li>
    ) : (
        <li className={cx('item', className) + ' l-3 m-4 c-6 col '}>
            <div className={cx('wrapper')}>
                <LoadImg timeLoad={timeLoad}>
                    <div className={cx('image-hover')}>
                        <div className={cx('container-image')}>
                            <img src={data.thumbnailM} alt="" />

                            <div className={cx('modal-image')} onClick={(e) => handleOnClick(e)}>
                                <div className={cx('favorite')}>
                                    <Button
                                        onClick={() => handleLike()}
                                        small
                                        content={like ? 'Đã thêm' : 'Thêm vào Thư viện'}
                                        iconLeft={
                                            like ? (
                                                <i className="icon ic-like-full"></i>
                                            ) : (
                                                <i className="icon ic-like"></i>
                                            )
                                        }
                                    />
                                </div>
                                <div className={cx('icon-play')} onClick={(e) => handleOnClick(e)}>
                                    <Button noContent iconLeft={<i className="icon ic-play-circle-outline"></i>} />
                                </div>
                                <Button small content="khác" iconLeft={<i className="icon ic-more"></i>} />
                            </div>
                        </div>
                    </div>
                </LoadImg>
                <div className={cx('content')}>
                    <span className={cx('title')}>
                        <Link to={data.link}>{data.title}</Link>
                    </span>

                    <span className={cx('subtitle')}>
                        {!description ? (
                            data?.artists?.map((item, index) => (
                                <span key={index}>
                                    <span>
                                        <Link to={item.link}>{item.name}</Link>
                                    </span>
                                    {index < data.artists.length - 1 && ', '}
                                </span>
                            ))
                        ) : (
                            <span>{data?.sortDescription}</span>
                        )}
                    </span>
                </div>
            </div>
        </li>
    );
}

export default ItemPlayList;
