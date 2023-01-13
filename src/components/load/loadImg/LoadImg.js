/* eslint-disable react-hooks/exhaustive-deps */
import classNames from 'classnames/bind';
import { memo, useEffect, useState } from 'react';
import styles from './LoadImg.module.scss';
const cx = classNames.bind(styles);

function LoadImg({ className, radius, children, timeLoad = 1000 }) {
    const [load, setLoad] = useState(false);
    useEffect(() => {
        const interval = setTimeout(() => {
            setLoad(true);
        }, timeLoad);
        return () => setTimeout(interval);
    }, []);
    return load ? (
        children
    ) : (
        <div className={cx('load', radius && 'radius', className)}>
            <span></span>
        </div>
    );
}

export default memo(LoadImg);
