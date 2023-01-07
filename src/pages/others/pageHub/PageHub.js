import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getHub } from '~/components/Api/Service';
import className from 'classnames/bind';
import style from './PageHub.module.scss';
import ContainerPlayList from '~/components/container/ContainerPlayList';

const cx = className.bind(style);

function PageHub() {
    const [image, setImage] = useState('');
    const [dataPlaylist, setDataPlaylist] = useState([]);
    const path = useParams();
    const id = path.id.split('.')[0];
    useEffect(() => {
        const api = async () => {
            const data = await getHub(id);
            setImage(data.cover);
            setDataPlaylist(data?.sections[0].items);
        };
        api();
    }, [id]);
    return (
        <>
            <div className={cx('header')}>
                <div className={cx('image')}>
                    <img src={image} alt="" />
                </div>
            </div>
            <ContainerPlayList data={dataPlaylist} index={dataPlaylist.length} />
        </>
    );
}

export default PageHub;
