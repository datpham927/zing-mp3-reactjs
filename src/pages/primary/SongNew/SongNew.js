import Button from '~/components/Button';
import className from 'classnames/bind';
import style from './SongNew.module.scss';
import Container from '~/components/container/Container';
import { useEffect, useState } from 'react';
import { getNewSongs } from '~/components/Api/Service';
import ItemSong from '~/components/ItemSong/ItemSong';

const cx = className.bind(style);

function SongNew() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const api = async () => {
            const data = await getNewSongs();
            setData(data || []);
        };
        api();
    }, []);
    return (
        data?.items?.length > 0 && (
            <div>
                <div className={cx('top')}>
                    <h1>{data.title}</h1>
                    <Button noContent iconLeft={<i className="icon ic-play"></i>} className={cx('btn')} />
                </div>
                <Container>
                    {data?.items?.map((i, index) => (
                        <ItemSong type="top100" key={index} data={i} index={index + 1} />
                    ))}
                </Container>
            </div>
        )
    );
}

export default SongNew;
