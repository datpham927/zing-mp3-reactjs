import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import style from './Button.module.scss';
const cx = classNames.bind(style);

function ButtonAction({ icon, iconRight, children, action, className, onClick, btnItem, link }) {
    return (
        <button className={cx('btn', { action, [className]: className, btnItem })} onClick={onClick}>
            {icon && <span>{icon}</span>}
            {link ? <Link to={link}>{children}</Link> : <p>{children}</p>}
            {iconRight && <span>{iconRight}</span>}
        </button>
    );
}

export default ButtonAction;
