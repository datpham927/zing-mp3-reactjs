import className from 'classnames/bind';
import style from './PageAdmin.module.scss';

const cx = className.bind(style);
function PageAdmin() {
    return (
        <div className={cx('wrapper')}>
            <a href="https://www.facebook.com/profile.php?id=100012882123870">
                <img
                    className={cx('avatar')}
                    src="https://tse2.mm.bing.net/th?id=OIP.h1faQamasIyBou06GErD0gHaJd&pid=Api&P=0"
                    alt=""
                />
            </a>
            <h1>Đạt Phạm</h1>
        </div>
    );
}

export default PageAdmin;
