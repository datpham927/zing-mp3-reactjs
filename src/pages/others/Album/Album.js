import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { playList } from '~/components/Api/Service';
import style from './Album.module.scss';
import TopAlum from './TopAlbum';
const cx = classNames.bind(style);

function Album() {
    const id = useSelector((state) => state.counter.idPlayList);
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const data = await playList(id);
            setData(data || []);
        };
        fetchApi();
    }, [id]);
    return data && <div className={cx('wrapper')}>{data.song && <TopAlum data={data} />}</div>;
}

export default Album;
