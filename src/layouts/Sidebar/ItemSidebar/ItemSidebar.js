import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import style from './ItemSidebar.module.scss';
const cx = classNames.bind(style);

function ItemSidebar({ data }) {
    return (
        <NavLink end title={data.title} className={(nav) => cx('navbar', { active: nav.isActive })} to={data.path}>
            <div className={cx('wrapper')}>
                {data.icon}
                <h1>{data.title}</h1>
                {data.type && (
                    <div className={cx('play')}>
                        <i className="icon ic-20-Play-Outline"></i>
                    </div>
                )}
            </div>
            {data.title === 'Radio' && <span className={cx('m-0')}>LIVE</span>}
        </NavLink>
    );
}

export default ItemSidebar;
