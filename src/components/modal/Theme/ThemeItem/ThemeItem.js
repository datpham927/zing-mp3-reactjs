import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';
import { zingCounter } from '~/redux/features/actionSlice';
import style from './ThemeItem.module.scss';

const cx = classNames.bind(style);

function ThemeItem({ data }) {
    const dispatch = useDispatch();

    const handleSelection = () => {
        dispatch(zingCounter.actions.backgroundIndex(data.id));
        dispatch(zingCounter.actions.booleanPreview(false));
    };
    const handlePreview = () => {
        dispatch(zingCounter.actions.booleanPreview(true));
        dispatch(zingCounter.actions.previewBgrIndex(data.id));
    };
    return (
        <div className={cx('topic-theme') + ' l-2-4 c-6 m-2-4 '}>
            <div className={cx('topic-theme-img')}>
                <img src={data.link} alt="" />
                <div className={cx('action-theme') + ' m-0 c-0 '}>
                    <button className={cx('theme-btn', 'primary')} onClick={handleSelection}>
                        Áp dụng
                    </button>
                    <button className={cx('theme-btn')} onClick={() => handlePreview(data.id)}>
                        Xem Trước
                    </button>
                </div>
            </div>
            <small>{data.title}</small>
        </div>
    );
}
ThemeItem.prototype = {
    img: PropTypes.string,
};
export default ThemeItem;
