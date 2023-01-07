import { memo, useEffect, useState } from 'react';
import { artist } from '~/components/Api/Service';
import ContainerVideos from '~/components/container/ContainerVideos';

function MvArtist({ value }) {
    const [data, setData] = useState([]);
    const [singer, setSinger] = useState('');
    useEffect(() => {
        const api = async () => {
            const data = await artist(value);
            setSinger(data?.name);
            setData(data?.sections.find((e) => e.sectionType === 'video'));
        };
        api();
    }, [value]);

    return (
        <>
            <ContainerVideos data={data?.items} title={`MV của  ${singer}`} index={data?.items?.length} />
        </>
    );
}

export default memo(MvArtist);
