import classNames from 'classnames/bind';
import style from './Search.module.scss';
const cx = classNames.bind(style);

function search() {
    return (
        <div className={cx('search')}>
            <div className={cx('icon-search')}>
                <ion-icon name="search-outline"></ion-icon>
            </div>
            <input class="color-main" type="text" placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..." />
        </div>
    );
}

export default search;
