/* eslint-disable react-hooks/exhaustive-deps */
import className from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as Api from '~/components/Api/Service';
import Container from '~/components/container/Container';
import ItemPlayList from '~/components/ItemPlayList/ItemPlayList';
import { zingHome } from '~/redux/dataHome';
import style from './Home.module.scss';
import HomeGallery from './HomeGallery';
import HomeRelease from './HomeRelease';
import HomeAutoTheme from './HomeAutoTheme';
import HomeWeekChart from './HomeWeekChart';
import HomeTop100 from './HomeTop100';
import HomeSpotlight from './HomeSpotlight';
import HomeNewSong from './HomeNewSong';
import HomeLiveRadio from './HomeLiveRadio';
import HomeEvent from './HomeEvent';
import { setDataNewRelease } from '~/redux/newRelease';

const cx = className.bind(style);
function Home() {
    const [slider, setSlider] = useState([]);
    const [newRelease, setNewRelease] = useState([]);
    const [event, setEvent] = useState([]);
    const [hAlbum, sethAlbum] = useState([]);
    const [hXone, sethXone] = useState([]);
    const [hLiveRadio, sethLiveRadio] = useState([]);
    const [newSong, setNewSong] = useState([]);
    const [hAutoTheme1, sethAutoTheme1] = useState([]);
    const [hAutoTheme2, sethAutoTheme2] = useState([]);
    const [artist, setArtist] = useState([]);
    const [weekChart, setWeekChart] = useState([]);
    const [h100, seth100] = useState([]);

    const dispatch = useDispatch();
    useEffect(() => {
        const getTodoItems = async () => {
            const response = await Api.getHome();
            dispatch(zingHome.actions.setDataHome(response.items));
        };
        getTodoItems();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const { data_Home } = useSelector((state) => state.dataHome);
    useEffect(() => {
        data_Home?.forEach((item) => {
            if (item.sectionType === 'banner' && item.sectionId === 'hSlider') {
                setSlider(item);
            } else if (item.sectionType === 'new-release') {
                setNewRelease(item);
                dispatch(setDataNewRelease(item.items));
            } else if (item.sectionId === 'hAutoTheme1') {
                sethAutoTheme1(item);
            } else if (item.sectionId === 'hAutoTheme2') {
                sethAutoTheme2(item);
            } else if (item.sectionType === 'weekChart') {
                setWeekChart(item);
            } else if (item.sectionId === 'h100') {
                seth100(item);
            } else if (item.sectionType === 'artistSpotlight') {
                setArtist(item);
            } else if (item.sectionType === 'newReleaseChart') {
                setNewSong(item);
            } else if (item.sectionId === 'hAlbum') {
                sethAlbum(item);
            } else if (item.sectionId === 'hXone') {
                sethXone(item);
            } else if (item.sectionId === 'hLiveRadio') {
                sethLiveRadio(item);
            } else if (item.sectionType === 'event') {
                setEvent(item);
            }
        });
    }, [data_Home]);
    return (
        <div className={cx('wrapper')}>
            <HomeGallery data={slider} />
            <HomeRelease data={newRelease} />
            <HomeAutoTheme data={hAutoTheme1} />
            <HomeAutoTheme data={hAutoTheme2} />
            <HomeWeekChart data={weekChart} />
            <HomeTop100 data={h100} />
            <HomeSpotlight data={artist} />
            <HomeNewSong data={newSong} />
            <Container title>
                {hAlbum?.items?.map(
                    (item, index) => index < 4 && <ItemPlayList key={index} data={item} index={index} />,
                )}
            </Container>
            <Container title={hXone.title}>
                {hXone?.items?.map(
                    (item, index) => index < 4 && <ItemPlayList description key={index} data={item} index={index} />,
                )}
            </Container>
            <HomeLiveRadio data={hLiveRadio} />
            <HomeEvent data={event} />
        </div>
    );
}
export default Home;
