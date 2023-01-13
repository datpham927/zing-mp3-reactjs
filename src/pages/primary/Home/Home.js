/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import className from 'classnames/bind';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Api from '~/components/Api/Service';
import { zingHome } from '~/redux/dataHome';
import style from './Home.module.scss';
import HomeGallery from './HomeGallery/HomeGallery';
import HomeRelease from './HomeRelease/HomeRelease';
import HomeSpotlight from './HomeSpotlight/HomeSpotlight';
import HomeNewSong from './HomeNewSong/HomeNewSong';
import { v4 as uuidv4 } from 'uuid';
import HomeLiveRadio from './HomeLiveRadio/HomeLiveRadio';
import HomeEvent from './HomeEvent/HomeEvent';
import ContainerPlaylist from '~/components/container/ContainerPlayList';
import Loading from '~/components/load/Loading/Loading';
import { memo } from 'react';

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
    const { dataHome } = useSelector((state) => state.dataHome);
    console.log(dataHome);
    return dataHome?.length !== 0 ? (
        <div className={cx('wrapper')}>
            {dataHome?.map((i) =>
                i.sectionType === 'banner' ? (
                    <HomeGallery data={i} key={uuidv4()} />
                ) : i.sectionType === 'playlist' && i.sectionId === 'h100' ? (
                    <ContainerPlaylist key={uuidv4()} data={i?.items} title={i?.title} link={i.link} all scroll />
                ) : i.sectionType === 'playlist' ? (
                    <ContainerPlaylist key={uuidv4()} data={i?.items} title={i?.title} scroll />
                ) : i.sectionType === 'livestream' ? (
                    <HomeLiveRadio key={uuidv4()} data={i} />
                ) : i.sectionType === 'new-release' ? (
                    <HomeRelease key={uuidv4()} data={i} />
                ) : i.sectionType === 'artistSpotlight' ? (
                    <HomeSpotlight key={uuidv4()} data={i} />
                ) : i.sectionType === 'newReleaseChart' ? (
                    <HomeNewSong key={uuidv4()} data={i} />
                ) : i.sectionType === 'event' ? (
                    <HomeEvent key={uuidv4()} data={i} />
                ) : (
                    ''
                ),
            )}
        </div>
    ) : (
        <Loading />
    );
}
export default memo(Home);
// : i.sectionType === 'RTChart' ? (
//     <HomeChart />
// )
