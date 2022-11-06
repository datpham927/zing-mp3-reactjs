import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import styles from './KeywordsItem.module.scss';
import config from '~/components/config';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function SuggestItem({ data }) {
    return (
        <Link to={config.routes.resultSearch} className={cx('item')}>
            <span>
                <i className="fa-solid fa-arrow-trend-up"></i>
            </span>
            <span className={cx('title')}>{data}</span>
        </Link>
    );
}
SuggestItem.propTypes = {
    data: PropTypes.string,
};

export default SuggestItem;
