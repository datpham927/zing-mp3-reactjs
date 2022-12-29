/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import ButtonAction from '~/components/Button/ButtonAction';
import className from 'classnames/bind';
import style from './MvBody.module.scss';
import { useLocation } from 'react-router-dom';
import { getMv } from '~/components/Api/Service';
import ContainerVideos from '~/components/container/ContainerVideos';
import Loading from '~/components/load/Loading/Loading';
import { iconLoad } from '~/assets/icon/IconLoad';
import KindMusic from './KindMusic';
const cx = className.bind(style);

function MvBody() {
    const [data, setData] = useState([]);
    const [index, setIndex] = useState(1);
    const [btn, setBtn] = useState(false);
    const [hideBtn, setHideBtn] = useState(false);
    const id = useLocation().pathname.split('/').pop().split('.')[0];

    useEffect(() => {
        const api = async () => {
            const datas = await getMv(id, index);
            setBtn(false);
            if (data?.length === 0) {
                setData(datas?.items || []);
            } else {
                if (datas?.items) {
                    setData((e) => [...e, ...datas?.items]);
                } else {
                    setHideBtn(true);
                }
            }
        };
        api();
    }, [index]);
    const handelClick = () => {
        setIndex(index + 1);
        setBtn(true);
    };
    return data?.length > 0 ? (
        <div className={cx('body')}>
            <KindMusic />
            <ContainerVideos data={data} index={data?.length} />
            {!hideBtn && (
                <div className={cx('btn')}>
                    {btn ? (
                        <Loading image={iconLoad[1]?.path} className={cx('load-img')} />
                    ) : (
                        <ButtonAction className={cx('btn-more')} onClick={() => handelClick()}>
                            Xem thêm
                        </ButtonAction>
                    )}
                </div>
            )}
        </div>
    ) : (
        <Loading />
    );
}

export default MvBody;
