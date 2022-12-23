/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getMv } from '~/components/Api/Service';
import ContainerVideos from '~/components/container/ContainerVideos';

function MvVietNam() {
    const [data, setData] = useState([]);
    const [index, setIndex] = useState(1);
    const id = useLocation().pathname.split('/').pop().split('.')[0];

    useEffect(() => {
        const api = async () => {
            const datas = await getMv(id, index);
            if (data === []) {
                setData((e) => [...e, datas]);
            } else {
                setData((e) => [...e, datas]);
            }
        };
        api();
    }, [index]);
    console.log(data);
    return data?.map((e) => <ContainerVideos data={e.items} index={e.items.length} />);
}

export default MvVietNam;
