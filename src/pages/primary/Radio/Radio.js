/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRadio } from '~/components/Api/Service';
import { zingRadio } from '~/redux/dataRadio';
import { v4 as uuidv4 } from 'uuid';
import RadioBanner from './RadioEpisode';
import RadioCategory from './RadioCategory';
import ContainerPlaylist from '~/components/container/ContainerPlayList';
import RadioTopPodcast from './RadioTopPodcast';
import RadioRadPromoteEpisode from './RadioRadPromoteEpisode';
import RadioPodcastH from './RadioPodcastH';
import RadioLivestream from './RadioLivestream';
import Loading from '~/components/load/Loading/Loading';

function Radio() {
    const dispatch = useDispatch();
    useEffect(() => {
        const radioApi = async () => {
            const data = await getRadio();
            dispatch(zingRadio.actions.setDataRadio(data.items || []));
        };
        radioApi();
    }, []);
    const data = useSelector((state) => state.dataRadio.data_Radio);

    return data?.length !== 0 ? (
        <>
            {data?.map((i) =>
                i?.sectionType === 'livestream' ? (
                    <RadioLivestream key={uuidv4()} data={i} />
                ) : i?.sectionType === 'podcast' && i?.sectionId === 'radPromoteProgram' ? (
                    <ContainerPlaylist data={i?.items} title={i?.title} link={'/'} all description />
                ) : i?.sectionType === 'podcast' && i?.sectionId === 'radReplay' ? (
                    <ContainerPlaylist key={uuidv4()} data={i} spotlight title={i?.title} link={'/'} description />
                ) : i?.sectionType === 'podcast' ? (
                    <ContainerPlaylist data={i?.items} title={i?.title} link={'/'} all description />
                ) : i?.sectionType === 'podcast_category' ? (
                    <RadioCategory key={uuidv4()} data={i} />
                ) : i?.sectionType === 'podcastH' ? (
                    <RadioPodcastH key={uuidv4()} data={i} />
                ) : i?.sectionType === 'episode' ? (
                    <RadioRadPromoteEpisode key={uuidv4()} data={i} />
                ) : i?.sectionType === 'top_episode' ? (
                    <RadioTopPodcast key={uuidv4()} data={i} />
                ) : i?.sectionType === 'Radio_Banner' ? (
                    <RadioBanner key={uuidv4()} data={i} />
                ) : (
                    ''
                ),
            )}
        </>
    ) : (
        <Loading />
    );
}

export default Radio;
