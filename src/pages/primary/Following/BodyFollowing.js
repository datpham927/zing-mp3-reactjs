/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from 'react';
import { getFollowing } from '~/components/Api/Service';
import ButtonAction from '~/components/Button/ButtonAction';
import ItemFollowing from './ItemFollowing/ItemFollowing';
import className from 'classnames/bind';
import style from './Following.module.scss';
import Container from '~/components/container/Container';
import { useLocation } from 'react-router-dom';
const cx = className.bind(style);
function BodyFollowing() {
    const [data, setData] = useState([]);
    const [index, setIndex] = useState(1);
    const [btn, setBtn] = useState(false);

    const id = useLocation().pathname.split('/').pop().split('.')[0];

    useEffect(() => {
        const api = async () => {
            const datas = await getFollowing(id, index);
            console.log('hihi');
            setData(datas);
            setBtn(false);
        };
        api();
    }, [index]);
    // const handelClick = () => {
    //     setIndex(index + 1);
    //     setBtn(true);
    // };
    console.log(data);
    return (
        data?.length > 0 && (
            <Container>
                {/* {data?.map((e, i) => (
                    <ItemFollowing data={e} key={i}></ItemFollowing>
                ))}
                <ButtonAction className={cx('btn-more')} onClick={() => handelClick()}>
                    {btn ? 'Chờ tí nhé :v ' : 'Xem thêm'}
                </ButtonAction> */}
            </Container>
        )
    );
}

export default BodyFollowing;
