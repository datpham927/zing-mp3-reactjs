import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import styles from './SuggestItem.module.scss';

const cx = classNames.bind(styles);

function SuggestItem({ data }) {
    return (
        <li className={cx('item')}>
            <span>
                <i className="fa-solid fa-arrow-trend-up"></i>
            </span>
            <span className={cx('title')}>{data.title}</span>
        </li>
    );
}
SuggestItem.propTypes = {
    children: PropTypes.node.isRequired,
};

export default SuggestItem;
