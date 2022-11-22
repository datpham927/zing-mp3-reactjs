import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './LoadImg.module.scss';
const cx = classNames.bind(styles);

function LoadImg({ className, radius }) {
    const [load, setLoad] = useState(false);
    setInterval(() => {
        setLoad(true);
    }, 4000);
    return (
        load && (
            <div className={cx('load', radius && 'radius', className)}>
                <span></span>
            </div>
        )
    );
}

export default LoadImg;
