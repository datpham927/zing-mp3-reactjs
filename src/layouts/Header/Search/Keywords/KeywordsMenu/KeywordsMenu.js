/* eslint-disable array-callback-return */
import classNames from 'classnames/bind';
import SuggestItem from '../KeywordsItem/KeywordsItem';
import styles from './KeywordsMenu.module.scss';

const cx = classNames.bind(styles);

function KeywordsMenu({ data }) {
    return (
        <div className={cx('Keywords-body')}>
            {data.map((item, index) => index < 4 && <SuggestItem key={index} data={item.title} />)}
        </div>
    );
}

export default KeywordsMenu;
