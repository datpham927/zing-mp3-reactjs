import className from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCategory } from '~/components/Api/Service';
import ButtonAction from '~/components/Button/ButtonAction';
import Container from '~/components/container/Container';
import ContainerPlaylist from '~/components/container/ContainerPlayList';
import ItemTopic from '~/components/item/ItemTopic/ItemTopic';
import Loading from '~/components/load/Loading/Loading';
import style from './Category.module.scss';

const cx = className.bind(style);

function Category() {
    const [datas, setDatas] = useState([]);
    const [banner, setBanner] = useState([]);
    const [indexTopic, setIndexTopic] = useState(6);
    const [indexNations, setIndexNations] = useState(3);
    useEffect(() => {
        const api = async () => {
            const data = await getCategory();
            setDatas(data);
            setBanner(data.banners[0]);
        };
        api();
    }, []);
    const topic = datas?.topic;
    const nations = datas?.nations;
    const genre = datas?.genre;
    return datas.length !== 0 ? (
        <div>
            <div className={cx('header')}>
                <Link to={banner?.link}>
                    <img src={banner?.cover} alt="" />
                </Link>
            </div>
            <div className={cx('body')}>
                <Container title={'Tâm Trạng Và Hoạt Động'}>
                    {topic?.map((e, i) => i < indexTopic && <ItemTopic data={e} key={e.encodeId} />)}
                    {indexTopic === 6 && (
                        <ButtonAction className={cx('btn')} onClick={() => setIndexTopic(topic?.length)}>
                            Tất cả
                        </ButtonAction>
                    )}
                </Container>
                <Container title={'Quốc Gia'}>
                    {nations?.map(
                        (e, i) =>
                            i < indexNations && (
                                <div className={cx('nations-item') + ' l-4 col'}>
                                    <Link to={e.link}>
                                        <div className={cx('nations-image')}>
                                            <img src={e.thumbnail} alt="" />
                                        </div>
                                        <h3 className={cx('title')}>{e.title}</h3>
                                    </Link>
                                </div>
                            ),
                    )}
                    {indexNations === 3 && (
                        <ButtonAction className={cx('btn')} onClick={() => setIndexNations(nations?.length)}>
                            Tất cả
                        </ButtonAction>
                    )}
                </Container>
                {genre?.map((e, i) => (
                    <ContainerPlaylist key={i} data={e.playlists} title={e.title} all link={e.link} />
                ))}
            </div>
        </div>
    ) : (
        <Loading />
    );
}

export default Category;
