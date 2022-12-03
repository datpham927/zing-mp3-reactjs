import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { zingCounter } from '~/redux/action';
import Button from '../Button';
import LoadImg from '../loadImg/LoadImg';
import styles from './ItemPlayList.module.scss';

const cx = classNames.bind(styles);

function ItemPlayList({ data, timeLoad = 2000, type = '' }) {
    const dispatch = useDispatch();

    const handleClick = (id) => {
        dispatch(zingCounter.actions.setIdPlayList(id));
    };
    return type === 'Single & EP' ? (
        <li className={cx('item') + ' l-3 m-4 c-6 col '}>
            <div className={cx('wrapper')}>
                <LoadImg timeLoad={timeLoad}>
                    <Link to={data.link} onClick={() => handleClick(data.encodeId)}>
                        <div className={cx('image-hover')}>
                            <div className={cx('container-image')}>
                                <img src={data.thumbnailM} alt="" />

                                <div className={cx('modal-image')}>
                                    <div className={cx('favorite')}>
                                        <Button
                                            small
                                            content="Thêm vào Thư viện"
                                            iconLeft={<i className="icon ic-like"></i>}
                                        />
                                        {/* <i className="icon ic-like-full"></i> */}
                                    </div>
                                    <div className={cx('icon-play')}>
                                        <Button noContent iconLeft={<i className="icon ic-play-circle-outline"></i>} />
                                    </div>
                                    <Button small content="khác" iconLeft={<i className="icon ic-more"></i>} />
                                </div>
                            </div>
                        </div>
                    </Link>
                </LoadImg>
                <div className={cx('content')}>
                    <span className={cx('title')}>
                        <Link to={data.link} onClick={() => handleClick(data.encodeId)}>
                            {data.title}
                        </Link>
                    </span>
                    {data.artists &&
                        (data.artists.length > 0 ? (
                            <span className={cx('subtitle')} style={{ color: 'var(--text-secondary)' }}>
                                {data.releaseDate}
                            </span>
                        ) : (
                            <Link to={`/nghesi/${data.artists.alias}`}>{data.artists.alias}</Link>
                        ))}
                </div>
            </div>
        </li>
    ) : (
        <li className={cx('item') + ' l-3 m-4 c-6 col '}>
            <div className={cx('wrapper')}>
                <LoadImg timeLoad={timeLoad}>
                    <Link to={data.link} onClick={() => handleClick(data.encodeId)}>
                        <div className={cx('image-hover')}>
                            <div className={cx('container-image')}>
                                <img src={data.thumbnailM} alt="" />

                                <div className={cx('modal-image')}>
                                    <div className={cx('favorite')}>
                                        <Button
                                            small
                                            content="Thêm vào Thư viện"
                                            iconLeft={<i className="icon ic-like"></i>}
                                        />
                                        {/* <i className="icon ic-like-full"></i> */}
                                    </div>
                                    <div className={cx('icon-play')}>
                                        <Button noContent iconLeft={<i className="icon ic-play-circle-outline"></i>} />
                                    </div>
                                    <Button small content="khác" iconLeft={<i className="icon ic-more"></i>} />
                                </div>
                            </div>
                        </div>
                    </Link>
                </LoadImg>
                <div className={cx('content')}>
                    <span className={cx('title')}>
                        <Link to={data.link} onClick={() => handleClick(data.encodeId)}>
                            {data.title}
                        </Link>
                    </span>
                    {data.artists &&
                        (data.artists.length > 0 ? (
                            <span className={cx('subtitle')}>
                                {data.artists.map((item, index) => (
                                    <>
                                        <span>
                                            <Link to={`/nghesi/${item.alias}`}>{item.name}</Link>
                                        </span>
                                        {index < data.artists.length - 1 && ', '}
                                    </>
                                ))}
                            </span>
                        ) : (
                            <Link to={`/nghesi/${data.artists.alias}`}>{data.artists.alias}</Link>
                        ))}
                </div>
            </div>
        </li>
    );
}

export default ItemPlayList;
