import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import styles from './SuggestItem.module.scss';
import { Link } from 'react-router-dom';
import config from '~/components/config';

const cx = classNames.bind(styles);

function SuggestItem({ data }) {
    return (
        <Link to={config.routes.resultSearch} className={cx('item')}>
            <span>
                <i className="fa-solid fa-arrow-trend-up"></i>
            </span>
            <span className={cx('title')}>{data.title}</span>
        </Link>
    );
}
SuggestItem.propTypes = {
    data: PropTypes.node,
};

export default SuggestItem;
