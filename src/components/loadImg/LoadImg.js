import classNames from 'classnames/bind';
import { memo, useEffect, useState } from 'react';
import styles from './LoadImg.module.scss';
const cx = classNames.bind(styles);

function LoadImg({ className, radius, children, timeLoad = 500 }) {
    const [load, setLoad] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setLoad(true);
        }, timeLoad);
    }, [timeLoad]);
    return load ? (
        <> {children}</>
    ) : (
        <div className={cx('load', radius && 'radius', className)}>
            <span></span>
        </div>
    );
}

export default memo(LoadImg);
