/* eslint-disable react-hooks/exhaustive-deps */
import className from 'classnames/bind';
import style from './ZingChart.module.scss';
import Button from '~/components/Button';
import { useEffect, useState } from 'react';
import { zingChart } from '~/components/Api/Service';
import { useDispatch, useSelector } from 'react-redux';
import { setDataZingChart } from '~/redux/dataZingChart';
import Container from '~/components/container/Container';
import ButtonAction from '~/components/Button/ButtonAction';
import ItemChartBox from './ItemChartBox';
import Loading from '~/components/load/Loading/Loading';
import ContainerSongs from '~/components/container/ContainerSongs';
import { setCurrentIndex } from '~/redux/dataControl';

const cx = className.bind(style);
function ZingChart() {
    const dispatch = useDispatch();
    const [selection, setSelection] = useState(false);
    useEffect(() => {
        const chartApi = async () => {
            const data = await zingChart();
            dispatch(setDataZingChart(data.data));
        };
        chartApi();
    }, []);

    const handleClickPlay = () => {
        if (data?.length > 0) {
            dispatch(setCurrentIndex(Math.floor(Math.random() * 100)));
        } else {
            dispatch(setCurrentIndex(Math.floor(Math.random() * 9)));
        }
    };

    const data = useSelector((state) => state.dataZingChart.dataZingChart);
    return data?.length !== 0 ? (
        <div className={cx('wrapper')}>
            <div className={cx('top')}>
                <h1>#zingchart</h1>
                <Button
                    noContent
                    iconLeft={<i className="icon ic-play"></i>}
                    className={cx('btn')}
                    onClick={handleClickPlay}
                />
            </div>
            <div>
                <Container>
                    {selection ? (
                        <ContainerSongs
                            type="top100"
                            title={'#zingChart'}
                            data={data?.RTChart?.items}
                            index={data?.RTChart?.items?.length}
                            link={'/album/zingchart-DIMZ-TVk-NH4T-Phat-Ho/ZO68OC68.html'}
                        />
                    ) : (
                        <ContainerSongs
                            type="top100"
                            data={data?.RTChart?.items}
                            index={10}
                            title={'#zingChart'}
                            link={'/album/zingchart-DIMZ-TVk-NH4T-Phat-Ho/ZO68OC68.html'}
                        />
                    )}
                    {!selection && (
                        <ButtonAction className={cx('btn-more')} onClick={() => setSelection(!selection)}>
                            Xem top 100
                        </ButtonAction>
                    )}
                </Container>
                <div>
                    <div className={cx('title')}>Bảng Xếp Hạng Tuần</div>
                    <Container>
                        <ItemChartBox title={'Việt Nam'} data={data?.weekChart?.vn?.items} onClick={handleClickPlay} />
                        <ItemChartBox title={'US-UK'} data={data?.weekChart?.us?.items} onClick={handleClickPlay} />
                        <ItemChartBox title={'K-POP'} data={data?.weekChart?.korea?.items} onClick={handleClickPlay} />
                    </Container>
                </div>
            </div>
        </div>
    ) : (
        <Loading />
    );
}

export default ZingChart;
