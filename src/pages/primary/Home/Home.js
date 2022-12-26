/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import className from 'classnames/bind';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Api from '~/components/Api/Service';
import { zingHome } from '~/redux/dataHome';
import style from './Home.module.scss';
import HomeGallery from './HomeGallery';
import HomeRelease from './HomeRelease';
import HomeSpotlight from './HomeSpotlight';
import HomeNewSong from './HomeNewSong';
import HomeLiveRadio from './HomeLiveRadio';
import HomeEvent from './HomeEvent';
import ContainerPlaylist from '~/components/container/ContainerPlayList';
import Loading from '~/components/Loading/Loading';

const cx = className.bind(style);
function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        const getTodoItems = async () => {
            const response = await Api.getHome();
            dispatch(zingHome.actions.setDataHome(response.items));
        };
        getTodoItems();
    }, []);
    const { data_Home } = useSelector((state) => state.dataHome);
    console.log(data_Home);
    return data_Home.length !== 0 ? (
        <div className={cx('wrapper')}>
            {data_Home?.map((i) =>
                i.sectionType === 'banner' ? (
                    <HomeGallery data={i} />
                ) : i.sectionType === 'playlist' && i.sectionId === 'h100' ? (
                    <ContainerPlaylist data={i?.items} title={i?.title} link={i.link} all />
                ) : i.sectionType === 'playlist' ? (
                    <ContainerPlaylist data={i?.items} title={i?.title} />
                ) : i.sectionType === 'livestream' ? (
                    <HomeLiveRadio data={i} />
                ) : i.sectionType === 'new-release' ? (
                    <HomeRelease data={i} />
                ) : i.sectionType === 'artistSpotlight' ? (
                    <HomeSpotlight data={i} />
                ) : i.sectionType === 'newReleaseChart' ? (
                    <HomeNewSong data={i} />
                ) : i.sectionType === 'event' ? (
                    <HomeEvent data={i} />
                ) : (
                    ''
                ),
            )}
        </div>
    ) : (
        <Loading />
    );
}
export default Home;
// : i.sectionType === 'RTChart' ? (
//     <HomeChart />
// )
