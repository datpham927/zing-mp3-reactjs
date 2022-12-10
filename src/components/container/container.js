import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import LoadImg from '../loadImg/LoadImg';
import styles from './Container.module.scss';
const cx = classNames.bind(styles);
function Container({ children, data, title = '', all, link = '', onClick, className, spotlight }) {
    return spotlight ? (
        <div className={cx('wrapper')}>
            <div className={cx('header-spotlight')}>
                <div className={cx('image')}>
                    <LoadImg timeLoad={2000}>
                        <img src={data.top.thumbnail} alt="" />
                    </LoadImg>
                </div>
                <div className={cx('content')}>
                    <p className={cx('subtitle')}>PLAYLIST NỔI BẬT</p>
                    <h1 className={cx('title')}>
                        <Link to={`/nghesi/${data.top.alias}`}>{data.top.name}</Link>
                    </h1>
                </div>
            </div>
            <div className={cx('container', className)}>
                <div className={cx('header')}>
                    {title && <h1 className={cx('title')}>{title}</h1>}
                    {all && (
                        <div className={cx('all')} onClick={onClick}>
                            <Link to={link}>
                                TẤT CẢ <i className="icon ic-go-right"></i>
                            </Link>
                        </div>
                    )}
                </div>
                <div className={cx('body') + ' row'}>{children}</div>
            </div>
        </div>
    ) : (
        <div className={cx('container', className)}>
            <div className={cx('header')}>
                {title && <h1 className={cx('title')}>{title}</h1>}
                {all && (
                    <div className={cx('all')} onClick={onClick}>
                        <Link to={link}>
                            TẤT CẢ <i className="icon ic-go-right"></i>
                        </Link>
                    </div>
                )}
            </div>
            <div className={cx('body') + ' row'}>{children}</div>
        </div>
    );
}

export default Container;
