import { useEffect, useState } from 'react';
import { usFollowing } from '~/components/Api/Service';
import ButtonAction from '~/components/Button/ButtonAction';
import ItemFollowing from './ItemFollowing/ItemFollowing';
import className from 'classnames/bind';
import style from './Following.module.scss';
import Container from '~/components/container/Container';
const cx = className.bind(style);
function USFollow() {
    const [data, setData] = useState([]);
    const [index, setIndex] = useState(1);
    const [btn, setBtn] = useState(false);

    useEffect(() => {
        const api = async () => {
            const data = await usFollowing(index);
            setData((e) => [...e, data.items] || []);
            setBtn(false);
        };
        api();
    }, [index]);
    const handelClick = () => {
        setIndex(index + 1);
        setBtn(true);
    };
    return (
        data.length > 0 && (
            <Container>
                {data.map((e) => e.map((i) => <ItemFollowing data={i}></ItemFollowing>))}
                <ButtonAction className={cx('btn-more')} onClick={() => handelClick()}>
                    {btn ? 'Chờ tí nhé :v ' : 'Xem thêm'}
                </ButtonAction>
            </Container>
        )
    );
}

export default USFollow;
