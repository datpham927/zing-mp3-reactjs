/* eslint-disable array-callback-return */
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import SuggestItem from '../SuggestItem/SuggestItem';
import styles from './SuggestItem.module.scss';

const cx = classNames.bind(styles);

function SuggestMenu({ data }) {
    console.log(data);
    return (
        <div className={cx('Keywords')}>
            <div className={cx('Keywords-header')}>
                <h1></h1>
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
    data: PropTypes.node.isRequired,
};
export default SuggestMenu;
