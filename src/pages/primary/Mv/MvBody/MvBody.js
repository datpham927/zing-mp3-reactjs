/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
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
    const [hideBtn, setHideBtn] = useState(true);
    const id = useLocation().pathname.split('/').pop().split('.')[0];

    useEffect(() => {
        setData([]);
        setIndex(1);
        setHideBtn(true);
    }, [id]);

    useEffect(() => {
        const api = async () => {
            const datas = await getMv(id, index);

            if (data?.length === 0) {
                setData(datas?.items || []);
            } else {
                if (datas?.items) {
                    setData((e) => [...e, ...datas?.items]);
                } else {
                    setHideBtn(false);
                }
            }
        };
        api();
    }, [index, id]);
    useEffect(() => {
        const onScroll = (e) => {
            const scrollTop = e.target.scrollTop;
            const scrollHeight = e?.target?.scrollHeight;
            const clientHeight = e?.target?.clientHeight;

            if (scrollTop + clientHeight >= scrollHeight - 200) {
                setIndex(index + 1);
            }
        };
        document.getElementById('main')?.addEventListener('scroll', onScroll);

        return () => document.getElementById('main')?.removeEventListener('scroll', onScroll);
    }, [data?.length]);
    return data?.length > 0 ? (
        <div className={cx('body')}>
            <KindMusic />
            <ContainerVideos data={data} index={data?.length} />
            {hideBtn && (
                <div className={cx('btn')}>
                    <Loading image={iconLoad[1]?.path} className={cx('load-img')} />
                </div>
            )}
        </div>
    ) : (
        <Loading />
    );
}

export default MvBody;
