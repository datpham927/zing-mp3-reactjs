/* eslint-disable react-hooks/exhaustive-deps */
import classNames from 'classnames/bind';
import style from './TimeAlbum.module.scss';
const cx = classNames.bind(style);

function TimeAlbum({ data }) {
    return (
        <h1 className={cx('wrapper')}>
            <span>{data.song?.total + ' bài hát •'} </span>
            <span>
                {data.song?.totalDuration > 3600
                    ? Math.floor(data.song?.totalDuration / 3600) +
                      ' giờ ' +
                      (data.song?.totalDuration % 3600 !== 0 &&
                          Math.floor((data.song?.totalDuration % 3600) / 60) + ' phút')
                    : Math.floor(data.song?.totalDuration / 60) + ' phút'}
            </span>
        </h1>
    );
}

export default TimeAlbum;
