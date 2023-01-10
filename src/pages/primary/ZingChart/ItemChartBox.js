/* eslint-disable react-hooks/exhaustive-deps */
import className from 'classnames/bind';
import style from './ZingChart.module.scss';
import Button from '~/components/Button';
import ButtonAction from '~/components/Button/ButtonAction';
import ContainerSongs from '~/components/container/ContainerSongs';

const cx = className.bind(style);

function ItemChartBox({ data, title = '' }) {
    return (
        <div className={cx('item') + ' l-4 m-6 col'}>
            <div className={cx('wrapper')}>
                <div className={cx('header')}>
                    <h1>{title}</h1>
                    <Button noContent iconLeft={<i className="icon ic-play"></i>} className={cx('btn')} />
                </div>

                <ContainerSongs type="top100-small" data={data} index={5} title={'#zingChart'} link={'/zing-chart'} />
                <div className={cx('wrapper-btn')}>
                    <ButtonAction
                        link={'/album/zingchart-DIMZ-TVk-NH4T-Phat-Ho/ZO68OC68.html'}
                        className={cx('btn-more')}
                    >
                        Xem tất cả
                    </ButtonAction>
                </div>
            </div>
        </div>
    );
}

export default ItemChartBox;
