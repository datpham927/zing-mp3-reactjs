/* eslint-disable react-hooks/exhaustive-deps */
import className from 'classnames/bind';
import style from './ZingChart.module.scss';
import Button from '~/components/Button';
import ItemSong from '~/components/ItemSong/ItemSong';
import ButtonAction from '~/components/Button/ButtonAction';

const cx = className.bind(style);

function ItemChartBox({ data, title = '' }) {
    return (
        <div className="l-4 col">
            <div className={cx('wrapper')}>
                <div className={cx('header')}>
                    <h1>{title}</h1>
                    <Button noContent iconLeft={<i className="icon ic-play"></i>} className={cx('btn')} />
                </div>
                {data?.map(
                    (item, index) =>
                        index < 5 && <ItemSong key={index} type="top100-small" data={item} index={index + 1} />,
                )}
                <div className={cx('wrapper-btn')}>
                    <ButtonAction link={'/moi-phat-hanh'} className={cx('btn-more')}>
                        Xem tất cả
                    </ButtonAction>
                </div>
            </div>
        </div>
    );
}

export default ItemChartBox;
