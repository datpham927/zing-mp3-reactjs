/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { getFollowing } from '~/components/Api/Service';
import ButtonAction from '~/components/Button/ButtonAction';
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
    const [btn, setBtn] = useState(false);
    const [hideBtn, setHideBtn] = useState(false);

    const id = useLocation().pathname.split('/').pop().split('.')[0];

    useEffect(() => {
        const api = async () => {
            const datas = await getFollowing(id, index);
            setBtn(false);
            if (data.length === 0) {
                setData(datas.items);
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
    return data?.length !== 0 ? (
        <div className={cx('body')}>
            <Container>
                {data?.map((e, i) => (
                    <ItemFollowing data={e} key={i}></ItemFollowing>
                ))}
            </Container>
            {!hideBtn && (
                <div className={cx('btn')}>
                    {btn ? (
                        <Loading image={iconLoad[1].path} className={cx('load-img')} />
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

export default BodyFollowing;
