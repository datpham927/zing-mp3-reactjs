import { ImgTop100 } from '~/components/Icons/Icons';
import className from 'classnames/bind';
import style from './Top100.module.scss';
import { useEffect, useState } from 'react';
import { getTop100 } from '~/components/Api/Service';
import ContainerPlayList from '~/components/container/ContainerPlayList';

const cx = className.bind(style);
function Top100() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const api = async () => {
            const data = await getTop100();
            setData(data);
        };
        api();
    }, []);
    console.log(data);
    return (
        <>
            <div className={cx('header')}>
                <ImgTop100 />
            </div>

            {data.map((e, i) => (
                <ContainerPlayList
                    key={i}
                    data={e?.items}
                    title={e.title}
                    index={e?.items.length}
                    className={cx('item')}
                />
            ))}
        </>
    );
}

export default Top100;
