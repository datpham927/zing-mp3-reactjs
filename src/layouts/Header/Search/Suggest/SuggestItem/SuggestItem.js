import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestItem.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function SuggestItem({ data, setValue, onSubmit }) {
    const handleOnClick = (value) => {
        setValue(value);
        onSubmit();
    };
    return (
        <Link to={`/tim-kiem/tat-ca/${data?.alias}`} className={cx('item')} onClick={() => handleOnClick(data?.title)}>
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
