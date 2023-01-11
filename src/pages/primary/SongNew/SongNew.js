import Button from '~/components/Button';
import className from 'classnames/bind';
import style from './SongNew.module.scss';
import Container from '~/components/container/Container';
import { useEffect, useState } from 'react';
import { getNewSongs } from '~/components/Api/Service';
import Loading from '~/components/load/Loading/Loading';
import ContainerSongs from '~/components/container/ContainerSongs';

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
    return data?.length !== 0 ? (
        <div>
            <div className={cx('top')}>
                <h1>{data.title}</h1>
                <Button noContent iconLeft={<i className="icon ic-play"></i>} className={cx('btn')} />
            </div>
            <Container>
                <ContainerSongs
                    type="top100"
                    data={data?.items}
                    index={data?.items?.length}
                    title={'Nhạc mới'}
                    link={'/moi-phat-hanh'}
                />
            </Container>
        </div>
    ) : (
        <Loading />
    );
}

export default SongNew;
