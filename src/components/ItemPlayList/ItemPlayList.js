import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Button from '../Button';
import styles from './ItemPlayList.module.scss';

const cx = classNames.bind(styles);

function ItemPlayList({ data }) {
    return (
        <li className={cx('item') + ' l-3 m-4 c-6 col '}>
            <div className={cx('wrapper')}>
                <div className={cx('image-hover')}>
                    <div className={cx('container-image')}>
                        <img src="https://datpham927.github.io/ZingMp3/img/discover/ctn3/1.webp" alt="" />
                        <div className={cx('modal-image')}>
                            <div className={cx('favorite')}>
                                <Button small content="Thêm vào Thư viện" iconLeft={<i class="icon ic-like"></i>} />
                                {/* <i class="icon ic-like-full"></i> */}
                            </div>
                            <div className={cx('icon-play')}>
                                <Button play iconLeft={<i class="icon ic-play-circle-outline"></i>} />
                            </div>
                            <Button small content="khác" iconLeft={<i class="icon ic-more"></i>} />
                        </div>
                    </div>
                </div>
                <div className={cx('content')}>
                    <span className={cx('title')}>
                        <Link to={'/hihi'}>Cùng Trang nhìn lại những câu chuyện phía sau album</Link>
                    </span>
                    <span className={cx('subtitle')}>
                        <Link to={'/hihi'}>Cùng Trang nhìn lại những câu chuyện phía sau album</Link>
                    </span>
                </div>
            </div>
        </li>
    );
}

export default ItemPlayList;
