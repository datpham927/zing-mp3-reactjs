import className from 'classnames/bind';

import ButtonAction from '../Button/ButtonAction';
import style from './ItemEvent.module.scss';
const cx = className.bind(style);
function ItemEvent({ data }) {
    return (
        <li className={cx('event') + ' l-4 col'}>
            <div className={cx('wrapper-image')}>
                <img src={data.coverHM} alt="" />
                <div className={cx('describe')}>
                    <span className={cx('tag')}>{data.label}</span>
                    <h3 className={cx('title')}>{data.title}</h3>
                </div>
            </div>
            <div className={cx('info')}>
                <div className={cx('left') + ' l-7'}>
                    <h3>Lượt quan tâm</h3>
                    <div className={cx('avatar')}>
                        {data?.followers?.map((item, index) => (
                            <div key={index} className={cx('avatar-item')}>
                                <img src={item.avatar} alt="" />
                            </div>
                        ))}

                        <span className={cx('text')}>+ {data.totalFollow}</span>
                    </div>
                </div>
                <div className={cx('right') + ' l-5'}>
                    <ButtonAction className={cx('btn')}>QUAN TÂM</ButtonAction>
                </div>
            </div>
        </li>
    );
}

export default ItemEvent;
