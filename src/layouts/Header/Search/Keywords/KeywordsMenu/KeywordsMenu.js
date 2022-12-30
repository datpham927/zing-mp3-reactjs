/* eslint-disable array-callback-return */
import classNames from 'classnames/bind';
import { memo } from 'react';

import SuggestItem from '../KeywordsItem/KeywordsItem';
import styles from './KeywordsMenu.module.scss';

const cx = classNames.bind(styles);

function KeywordsMenu({ data, onSubmit }) {
    return (
        <div className={cx('Keywords-body')}>
            {data?.map(
                (item, index) => index < 4 && <SuggestItem key={item.encodeId} data={item.title} onSubmit={onSubmit} />,
            )}
        </div>
    );
}

export default memo(KeywordsMenu);
