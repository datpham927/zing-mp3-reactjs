/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { getFollowing } from '~/components/Api/Service';
import ItemFollowing from './ItemFollowing/ItemFollowing';
import className from 'classnames/bind';
import style from './Following.module.scss';
import Container from '~/components/container/Container';
import { useLocation } from 'react-router-dom';
import Loading from '~/components/load/Loading/Loading';
import { iconLoad } from '~/assets/icon/IconLoad';
const cx = className.bind(style);
function BodyFollowing() {
    const [data, setData] = useState([]);
    const [index, setIndex] = useState(1);
    const [hideBtn, setHideBtn] = useState(true);

    const id = useLocation().pathname.split('/').pop().split('.')[0];

    useEffect(() => {
        const api = async () => {
            const datas = await getFollowing(id, index);
            if (data?.length === 0) {
                setData(datas.items);
            } else {
                if (datas?.items) {
                    setData((e) => [...e, ...datas?.items]);
                } else {
                    setHideBtn(false);
                }
            }
        };
        api();
    }, [index]);
    useEffect(() => {
        const onScroll = (e) => {
            const scrollTop = e.target.scrollTop;
            const scrollHeight = e?.target?.scrollHeight;
            const clientHeight = e?.target?.clientHeight;
            if (scrollTop + clientHeight >= scrollHeight - 200) {
                setIndex(index + 1);
            }
        };
        document.querySelector('.AppLayout_main__Dvwp4')?.addEventListener('scroll', onScroll);
    }, [data?.length]);

    return data?.length !== 0 ? (
        <div className={cx('body')}>
            <Container>
                {data?.map((e, i) => (
                    <ItemFollowing data={e} key={uuidv4()}></ItemFollowing>
                ))}
            </Container>
            {hideBtn && (
                <div className={cx('btn')}>
                    <Loading image={iconLoad[1].path} className={cx('load-img')} />
                </div>
            )}
        </div>
    ) : (
        <Loading />
    );
}

export default BodyFollowing;
