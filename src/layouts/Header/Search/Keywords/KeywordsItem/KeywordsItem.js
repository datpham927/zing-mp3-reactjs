import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import styles from './KeywordsItem.module.scss';
import { Link } from 'react-router-dom';
import { zingCounter } from '~/redux/actionSlice';
import { useDispatch } from 'react-redux';
const cx = classNames.bind(styles);

function SuggestItem({ data }) {
    const dispatch = useDispatch();
    const handleOnClick = () => {
        dispatch(zingCounter.actions.setOpenInput(false));
    };
    return (
        <Link to={`/tim-kiem/tat-ca/${data}`} className={cx('item')} onClick={handleOnClick}>
            <span>
                <i class="icon ic-search"></i>
            </span>
            <span className={cx('title')}>{data}</span>
        </Link>
    );
}
SuggestItem.propTypes = {
    data: PropTypes.string,
};

export default SuggestItem;
