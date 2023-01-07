import classNames from 'classnames/bind';
import { memo } from 'react';
import styles from './LoadImg.module.scss';
const cx = classNames.bind(styles);

function LoadImg({ className, radius }) {
    return (
        <div className={cx('load', radius && 'radius', className)}>
            <span></span>
        </div>
    );
}

export default memo(LoadImg);
