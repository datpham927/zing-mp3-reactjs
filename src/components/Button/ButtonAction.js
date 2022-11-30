import classNames from 'classnames/bind';
import style from './Button.module.scss';
const cx = classNames.bind(style);

function ButtonAction({ icon, children, action, className }) {
    return (
        <button className={cx('btn', { action, [className]: className })}>
            <span>{icon}</span>
            {children}
        </button>
    );
}

export default ButtonAction;
