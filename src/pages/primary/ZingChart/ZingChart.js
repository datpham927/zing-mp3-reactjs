/* eslint-disable react-hooks/exhaustive-deps */
import className from 'classnames/bind';
import style from './ZingChart.module.scss';
import Button from '~/components/Button';
import { useEffect, useState } from 'react';
import { zingChart } from '~/components/Api/Service';
import { useDispatch, useSelector } from 'react-redux';
import { setDataZingChart } from '~/redux/dataZingChart';
import ItemSong from '~/components/ItemSong/ItemSong';
import Container from '~/components/container/Container';
import ButtonAction from '~/components/Button/ButtonAction';
import ItemChartBox from './ItemChartBox';

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
    const data = useSelector((state) => state.dataZingChart.data_zingChart);
    return (
        data?.RTChart && (
            <div>
                <div className={cx('top')}>
                    <h1>#zingchart</h1>
                    <Button noContent iconLeft={<i className="icon ic-play"></i>} className={cx('btn')} />
                </div>
                <div>
                    <Container>
                        {data?.RTChart?.items?.map((item, index) =>
                            selection ? (
                                <ItemSong key={index} type="top100" data={item} index={index + 1} />
                            ) : (
                                index < 10 && <ItemSong key={index} type="top100" data={item} index={index + 1} />
                            ),
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
                            <ItemChartBox title={'Việt Nam'} data={data?.weekChart?.vn?.items} />
                            <ItemChartBox title={'US-UK'} data={data?.weekChart?.us?.items} />
                            <ItemChartBox title={'K-POP'} data={data?.weekChart?.korea?.items} />
                        </Container>
                    </div>
                </div>
            </div>
        )
    );
}

export default ZingChart;
