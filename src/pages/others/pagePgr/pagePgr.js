import className from 'classnames/bind';
import style from './PagePgr.module.scss';

const cx = className.bind(style);
function PagePgr() {
    return (
        <div className={cx('wrapper')}>
            <h1>Phần này không gọi api được v:</h1>
            <img src="https://blog.uhm.vn/emo/hocon/12.gif" alt="" />
        </div>
    );
}

export default PagePgr;
