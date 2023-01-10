import className from 'classnames/bind';
import { useState } from 'react';
import ButtonAction from '~/components/Button/ButtonAction';

import style from './ItemEvent.module.scss';
const cx = className.bind(style);
function ItemEvent({ data, col = 'l-4 m-4' }) {
    const [care, setCare] = useState(false);

    return (
        <li className={cx('event') + ' col ' + col}>
            <div className={cx('wrapper-image')}>
                <img src={data.coverHM} alt="" />
                <div className={cx('describe')}>
                    <span className={cx('tag')}>{data.label}</span>
                    <h3 className={cx('title')}>{data.shortTitle}</h3>
                    <small className={cx('endText')}> {data.startText}</small>
                </div>
            </div>
            <div className={cx('info')}>
                <div className={cx('left') + ' l-6'}>
                    <small>Lượt quan tâm</small>
                    <div className={cx('avatar')}>
                        {data?.followers?.map((item, index) => (
                            <div key={index} className={cx('avatar-item')}>
                                <img src={item.avatar} alt="" />
                            </div>
                        ))}

                        <span className={cx('text')}>+ {data.totalFollow}</span>
                    </div>
                </div>
                <div className={cx('right') + ' l-6'}>
                    <ButtonAction className={cx('btn', !care && 'care')} onClick={() => setCare(!care)}>
                        {care ? data.unsubscribeText : data.subscribeText}
                    </ButtonAction>
                </div>
            </div>
        </li>
    );
}

export default ItemEvent;
