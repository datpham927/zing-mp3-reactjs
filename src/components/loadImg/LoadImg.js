import classNames from 'classnames/bind';
import { memo, useState } from 'react';
import styles from './LoadImg.module.scss';
const cx = classNames.bind(styles);

function LoadImg({ className, radius, children, timeLoad }) {
    const [load, setLoad] = useState(false);
    setTimeout(() => {
        setLoad(true);
    }, timeLoad);
    return load ? (
        <> {children}</>
    ) : (
        <div className={cx('load', radius && 'radius', className)}>
            <span></span>
        </div>
    );
}

export default memo(LoadImg);
