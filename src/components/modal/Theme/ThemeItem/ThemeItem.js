import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import style from './ThemeItem.module.scss';
import { zingAction } from '~/redux/action';
import LoadImg from '~/components/load/loadImg/LoadImg';

const cx = classNames.bind(style);

function ThemeItem({ data }) {
    const dispatch = useDispatch();
    const index = useSelector((state) => state.action.bgrIndex);
    const handleSelection = (id) => {
        dispatch(zingAction.actions.backgroundIndex(id));
        dispatch(zingAction.actions.booleanPreview(false));
    };
    const handlePreview = (id) => {
        dispatch(zingAction.actions.previewBgrIndex(id));
        dispatch(zingAction.actions.booleanPreview(true));
    };
    return (
        <div className={cx('topic-theme') + ' l-2-4 c-6 m-2-4 '}>
            <div className={cx('topic-theme-img', data.id === index && 'border')}>
                {data.link ? <img src={data.link} alt="" /> : <LoadImg className={cx('image')} />}
                <div className={cx('action-theme') + ' m-0 c-0 '}>
                    <button className={cx('theme-btn', 'primary')} onClick={() => handleSelection(data.id)}>
                        Áp dụng
                    </button>
                    <button className={cx('theme-btn')} onClick={() => handlePreview(data.id)}>
                        Xem Trước
                    </button>
                </div>
                {data.id === index && (
                    <div className={cx('check')}>
                        <i className="fa-solid fa-check"></i>
                    </div>
                )}
            </div>
            <small>{data.title}</small>
        </div>
    );
}
ThemeItem.prototype = {
    img: PropTypes.string,
};
export default ThemeItem;
