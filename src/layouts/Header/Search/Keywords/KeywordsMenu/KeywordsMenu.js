/* eslint-disable array-callback-return */
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import SuggestItem from '../KeywordsItem/KeywordsItem';
import styles from './KeywordsMenu.module.scss';

const cx = classNames.bind(styles);

function KeywordsMenu({ data }) {
    return (
        <div className={cx('Keywords')}>
            <div className={cx('Keywords-header')}>
                <h1>Từ Khóa Liên Quan</h1>
            </div>
            <div className={cx('Keywords-body')}>
                {data.map((item, index) => (
                    <SuggestItem key={index} data={item.title} />
                ))}
            </div>
        </div>
    );
}
KeywordsMenu.propTypes = {
    data: PropTypes.object,
};
export default KeywordsMenu;
