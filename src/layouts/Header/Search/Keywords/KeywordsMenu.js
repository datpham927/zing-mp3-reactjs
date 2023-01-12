/* eslint-disable array-callback-return */
import classNames from 'classnames/bind';
import { memo } from 'react';
import SuggestItem from './KeywordsItem';
import { v4 as uuidv4 } from 'uuid';
import styles from './KeywordsMenu.module.scss';

const cx = classNames.bind(styles);

function KeywordsMenu({ data, onSubmit }) {
    return (
        <div className={cx('Keywords-body')}>
            {data?.map((item, index) => (
                <SuggestItem key={uuidv4()} data={item.keyword} onSubmit={onSubmit} />
            ))}
        </div>
    );
}

export default memo(KeywordsMenu);
