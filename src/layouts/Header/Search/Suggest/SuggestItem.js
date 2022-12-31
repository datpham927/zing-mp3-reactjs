import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestMenu.module.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setValueSearch } from '~/redux/action';

const cx = classNames.bind(styles);

function SuggestItem({ data, onSubmit }) {
    const dispatch = useDispatch();
    const handleOnClick = () => {
        dispatch(setValueSearch(data?.title));
        onSubmit();
    };
    return (
        <Link to={data.link} className={cx('item')} onClick={handleOnClick}>
            <span>
                <i className="icon ic-trend"></i>
            </span>
            <span className={cx('title')}>{data?.title}</span>
        </Link>
    );
}
SuggestItem.propTypes = {
    data: PropTypes.node,
};

export default SuggestItem;
