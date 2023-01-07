import classNames from 'classnames/bind';
import styles from './NoConTent.module.scss';

const cx = classNames.bind(styles);

function NoContent() {
    return (
        <div className={cx('no-content-box')}>
            <img
                src="https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.7.64/static/media/dics-music-icon.3925fc01.svg"
                alt=""
            />
            <span>Không có kết quả được tìm thấy</span>
        </div>
    );
}

export default NoContent;
