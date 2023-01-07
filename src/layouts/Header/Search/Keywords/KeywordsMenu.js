/* eslint-disable array-callback-return */
import classNames from 'classnames/bind';
import { memo } from 'react';
import SuggestItem from './KeywordsItem';
import styles from './KeywordsMenu.module.scss';

const cx = classNames.bind(styles);

function KeywordsMenu({ data, onSubmit }) {
    return (
        <div className={cx('Keywords-body')}>
            {data?.map((item, index) => (
                <SuggestItem key={index} data={item.keyword} onSubmit={onSubmit} />
            ))}
        </div>
    );
}

export default memo(KeywordsMenu);
