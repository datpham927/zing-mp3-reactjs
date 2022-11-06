/* eslint-disable array-callback-return */
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import SuggestItem from '../SuggestItem/SuggestItem';
import styles from './SuggestMenu.module.scss';

const cx = classNames.bind(styles);

function SuggestMenu({ data }) {
    return (
        <div className={cx('Keywords')}>
            <div className={cx('Keywords-header')}>
                <h1>Đề Xuất Cho Bạn</h1>
            </div>
            <div className={cx('Keywords-body')}>
                {data.map((item, index) => (
                    <SuggestItem key={index} data={item} />
                ))}
            </div>
        </div>
    );
}
SuggestMenu.propTypes = {
    data: PropTypes.object.isRequired,
};
export default SuggestMenu;
