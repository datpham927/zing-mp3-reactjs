import classNames from 'classnames/bind';
import { memo } from 'react';
import { Link } from 'react-router-dom';
import styles from './Container.module.scss';
const cx = classNames.bind(styles);
function Container({
    children,
    data,
    title = '',
    all,
    link = '',
    onClick,
    className,
    spotlight,
    subtitle = 'PLAYLIST NỔI BẬT',
    swiper,
    scroll,
}) {
    return spotlight ? (
        <div className={cx('wrapper', { scroll })}>
            <div className={cx('header-spotlight')}>
                <div className={cx('image')}>
                    <img src={data?.top?.thumbnail || data?.subTitle?.thumbnail} alt="" />
                </div>
                <div className={cx('content')}>
                    <p className={cx('subtitle')}>{data?.title ? data?.title : subtitle}</p>
                    <h1 className={cx('title')}>
                        <Link to={data?.top?.link || data?.subTitle?.link}>
                            {data?.top?.artists?.name || data?.subTitle?.name}
                        </Link>
                    </h1>
                </div>
            </div>
            <div className={cx('container', className)}>
                <div className={cx('body') + ' row'}>{children}</div>
            </div>
        </div>
    ) : swiper ? (
        <div className={cx('container', className)}>
            {title && (
                <div className={cx('header')}>
                    <h1 className={cx('title')}>{title}</h1>
                    {all && (
                        <div className={cx('all')} onClick={onClick}>
                            <Link to={link}>
                                TẤT CẢ <i className="icon ic-go-right"></i>
                            </Link>
                        </div>
                    )}
                </div>
            )}
            {children}
        </div>
    ) : (
        <div className={cx('container', className, { scroll })}>
            {title && (
                <div className={cx('header')}>
                    <h1 className={cx('title')}>{title}</h1>
                    {all && (
                        <div className={cx('all')} onClick={onClick}>
                            <Link to={link}>
                                TẤT CẢ <i className="icon ic-go-right"></i>
                            </Link>
                        </div>
                    )}
                </div>
            )}
            <div className={cx('body') + ' row'}>{children}</div>
        </div>
    );
}

export default memo(Container);
