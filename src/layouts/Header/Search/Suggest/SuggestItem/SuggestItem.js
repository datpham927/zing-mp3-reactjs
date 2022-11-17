import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestItem.module.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { zingCounter } from '~/redux/actionSlice';

const cx = classNames.bind(styles);

function SuggestItem({ data }) {
    const dispatch = useDispatch();
    const handleOnClick = () => {
        dispatch(zingCounter.actions.setOpenInput(false));
    };
    return (
        <Link to={`/tim-kiem/tat-ca/${data.alias}`} className={cx('item')} onClick={handleOnClick}>
            <span>
                <i class="icon ic-trend"></i>
            </span>
            <span className={cx('title')}>{data.title}</span>
        </Link>
    );
}
SuggestItem.propTypes = {
    data: PropTypes.node,
};

export default SuggestItem;
