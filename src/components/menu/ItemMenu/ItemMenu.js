/* eslint-disable react/jsx-pascal-case */
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import style from './ItemMenu.module.scss';
import { zingCounter } from '~/redux/actionSlice';
import { Icon } from '../../Icons';
const cx = classNames.bind(style);

function ItemMenu({ type, iconLeft, iconRight, children, to, id, onClick, onChange }) {
    let Comp = 'div';
    if (!!to) {
        Comp = Link;
    }
    const quality = useSelector((state) => state.counter.qualitySong);
    const dispatch = useDispatch();
    const handleSQ = () => {
        onChange();
        dispatch(zingCounter.actions.BooleanQualitySong(false));
    };
    const handleHQ = () => {
        onChange();
        dispatch(zingCounter.actions.BooleanQualitySong(true));
    };
    return type === 'quality' ? (
        <Comp to={to} className={cx('item')} onClick={onClick}>
            <div className={cx('wrapper')}>
                <span className={cx('iconLeft')}>{quality === true ? <Icon.iconHQ /> : iconLeft}</span>
                <span className={cx('title')}>{children}</span>
                {iconRight && <span className={cx('iconRight')}>{iconRight}</span>}
            </div>
        </Comp>
    ) : type === 'separate' ? (
        <Comp to={to} className={cx('item', 'log-out')} onClick={onClick}>
            <div className={cx('wrapper')}>
                <span className={cx('iconLeft')}>{quality === true ? <Icon.iconHQ /> : iconLeft}</span>
                <span className={cx('title')}>{children}</span>
                {iconRight && <span className={cx('iconRight')}>{iconRight}</span>}
            </div>
        </Comp>
    ) : (
        <div
            className={cx('item')}
            onClick={() => (type === 'SQ' ? handleSQ() : type === 'HQ' ? handleHQ() : onClick())}
        >
            <Comp to={to}>
                <div className={cx('wrapper')}>
                    <span className={cx('iconLeft')}>{iconLeft}</span>
                    <span className={cx('title')}>{children}</span>
                    {((type === 'SQ' && !quality) || (type === 'HQ' && quality)) && (
                        <span
                            className={cx(
                                'iconRight',
                                ((type === 'SQ' && !quality) || (type === 'HQ' && quality)) && 'quality',
                            )}
                        >
                            {<Icon.iconCheck />}
                        </span>
                    )}
                </div>
            </Comp>
        </div>
    );
}

export default ItemMenu;
