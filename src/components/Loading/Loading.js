import className from 'classnames/bind';
import { iconLoad } from '~/assets/icon/IconLoad';
import style from './Loading.module.scss';

const cx = className.bind(style);
function Loading({ image = iconLoad[0].path, className }) {
    return (
        <div className={cx('load', className)}>
            <img src={image} alt="" />
        </div>
    );
}

export default Loading;
