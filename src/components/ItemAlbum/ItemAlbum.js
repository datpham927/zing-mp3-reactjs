import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Button from '../Button';
import LoadImg from '../loadImg/LoadImg';
import styles from './ItemAlbum.module.scss';

const cx = classNames.bind(styles);

function ItemAlbum({ data }) {
    return (
        <li className={cx('item') + ' l-3 m-4 c-6 col '}>
            <div className={cx('wrapper')}>
                {!data.thumbnail && <LoadImg />}
                {data.thumbnail && (
                    <div className={cx('image-hover')}>
                        <div className={cx('container-image')}>
                            <img src={data.thumbnail} alt="" />

                            <div className={cx('modal-image')}>
                                <div className={cx('favorite')}>
                                    <Button small content="Thêm vào Thư viện" iconLeft={<i class="icon ic-like"></i>} />
                                    {/* <i class="icon ic-like-full"></i> */}
                                </div>
                                <div className={cx('icon-play')}>
                                    <Button noContent iconLeft={<i class="icon ic-play-circle-outline"></i>} />
                                </div>
                                <Button small content="khác" iconLeft={<i class="icon ic-more"></i>} />
                            </div>
                        </div>
                    </div>
                )}
                <div className={cx('content')}>
                    <span className={cx('title')}>
                        <Link to={`playlist/${data.title}/${data.encodeId} +.html`}>{data.title}</Link>
                    </span>
                    {data.artists &&
                        (data.artists.length > 0 ? (
                            <span className={cx('subtitle')}>
                                {data.artists.map((item, index) => (
                                    <>
                                        <span>
                                            <Link to={`/${item.name}`}>{item.name}</Link>
                                        </span>
                                        <span>{index < data.artists.length - 1 && ', '}</span>
                                    </>
                                ))}
                            </span>
                        ) : (
                            <Link to={`/${data.artists.name}`}>{data.artists.name}</Link>
                        ))}
                </div>
            </div>
        </li>
    );
}

export default ItemAlbum;
