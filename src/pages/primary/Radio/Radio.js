/* eslint-disable react-hooks/exhaustive-deps */
import className from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRadio } from '~/components/Api/Service';
import Container from '~/components/container/Container';
import ItemPlayList from '~/components/ItemPlayList/ItemPlayList';
import ItemPodcast from '~/components/ItemPodcast/ItemPodcast';

import LoadImg from '~/components/loadImg/LoadImg';
import { zingRadio } from '~/redux/dataRadio';
import Livestream from './Livestream';

import style from './Radio.module.scss';
import RadioBanner from './RadioEpisode';
import PodcastH from './PodcastH';

const cx = className.bind(style);

function Radio() {
    const dispatch = useDispatch();
    const [liveStream, setLiveStream] = useState([]);
    const [category, setCategory] = useState([]);
    const [radioBanner, setRadioBanner] = useState([]);
    const [podcastH, setPodcastH] = useState([]);
    const [xonRadio, setXonRadio] = useState([]);
    const [zingNews, setZingNews] = useState([]);
    const [topPodcast, setTopPodcast] = useState([]);
    const [vietcetera, setVietcetera] = useState([]);
    const [pladio, setPladio] = useState([]);
    const [onAir, setOnAir] = useState([]);
    const [newProgram, setNewProgram] = useState([]);
    const [radPromoteEpisode, setRadPromoteEpisode] = useState([]);
    const [radPromoteProgram, setRadPromoteProgram] = useState([]);
    useEffect(() => {
        const radioApi = async () => {
            const data = await getRadio();
            dispatch(zingRadio.actions.setDataRadio(data.items || []));
        };
        radioApi();
    }, []);
    const dataRadio = useSelector((state) => state.dataRadio.data_Radio);
    useEffect(() => {
        dataRadio?.forEach((i) => {
            if (i.sectionType === 'livestream') {
                setLiveStream(i);
            } else if (i.sectionId === 'radPromoteProgram') {
                setRadPromoteProgram(i);
            } else if (i.sectionType === 'Radio_Banner') {
                setRadioBanner(i);
            } else if (i.sectionId === 'radPromoteCategory') {
                setCategory(i);
            } else if (i.sectionId === 'topPodcast') {
                setTopPodcast(i);
            } else if (i.sectionId === 'radPromoteEpisode') {
                setRadPromoteEpisode(i);
            } else if (i.sectionType === 'podcastH') {
                setPodcastH(i);
            } else if (i.title === 'Nghe lại' && i.subTitle.name === 'XONE Radio') {
                setXonRadio(i);
            } else if (i?.subTitle?.name === 'Zing News') {
                setZingNews(i);
            } else if (i?.subTitle?.name === 'Vietcetera') {
                setVietcetera(i);
            } else if (i?.subTitle?.name === 'Pladio') {
                setPladio(i);
            } else if (i?.subTitle?.name === 'On Air') {
                setOnAir(i);
            } else if (i?.title === 'Chương trình mới') {
                setNewProgram(i);
            }
        });
    }, [dataRadio]);
    return (
        dataRadio.length > 0 && (
            <>
                <Livestream data={liveStream} />
                <Container title={radPromoteProgram.title}>
                    {radPromoteProgram?.items?.map(
                        (item, index) =>
                            index < 4 && <ItemPlayList description key={index} data={item} index={index} />,
                    )}
                </Container>
                <RadioBanner data={radioBanner} />
                <Container title={category.title}>
                    {category?.items?.map(
                        (i, index) =>
                            index < 4 && (
                                <div className="l-3 col">
                                    <div className={cx('episode-item')}>
                                        <LoadImg timeLoad={'2000'} className={cx('padding-img')}>
                                            <img src={i.thumbnail} alt={i.title} />
                                        </LoadImg>
                                    </div>
                                </div>
                            ),
                    )}
                </Container>
                <Container title={topPodcast?.title}>
                    <div className="l-6 col">
                        <div className={cx('box-left')}>
                            {topPodcast?.items?.map(
                                (item, index) =>
                                    index < 3 && (
                                        <ItemPodcast
                                            className={cx('topPodcast')}
                                            index={index + 1}
                                            key={index}
                                            data={item}
                                        />
                                    ),
                            )}
                        </div>
                    </div>
                    <div className="l-6 col">
                        <div className={cx('box-right')}>
                            {topPodcast?.items?.map(
                                (item, index) =>
                                    index >= 3 &&
                                    index < 6 && (
                                        <ItemPodcast
                                            className={cx('topPodcast')}
                                            index={index + 1}
                                            key={index}
                                            data={item}
                                        />
                                    ),
                            )}
                        </div>
                    </div>
                </Container>
                <Container title={radPromoteEpisode.title}>
                    {radPromoteEpisode?.items?.map(
                        (item, index) => index < 6 && <ItemPodcast col={'l-6'} key={index} data={item} />,
                    )}
                </Container>
                <PodcastH data={podcastH} />

                <Container data={xonRadio} spotlight>
                    {xonRadio?.items?.map((item, index) => index < 4 && <ItemPlayList data={item} description />)}
                </Container>
                <Container data={zingNews} spotlight>
                    {zingNews?.items?.map((item, index) => index < 4 && <ItemPlayList data={item} description />)}
                </Container>
                <Container data={vietcetera} spotlight>
                    {vietcetera?.items?.map((item, index) => index < 4 && <ItemPlayList data={item} description />)}
                </Container>
                <Container data={pladio} spotlight>
                    {pladio?.items?.map((item, index) => index < 4 && <ItemPlayList data={item} description />)}
                </Container>
                <Container data={onAir} spotlight>
                    {onAir?.items?.map((item, index) => index < 4 && <ItemPlayList data={item} description />)}
                </Container>
                <Container title={newProgram.title}>
                    {newProgram?.items?.map((item, index) => index < 4 && <ItemPlayList data={item} description />)}
                </Container>
            </>
        )
    );
}

export default Radio;
