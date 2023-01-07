/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRadio } from '~/components/Api/Service';
import { zingRadio } from '~/redux/dataRadio';
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
                    <RadioLivestream data={i} />
                ) : i?.sectionType === 'podcast' && i?.sectionId === 'radPromoteProgram' ? (
                    <ContainerPlaylist data={i?.items} title={i?.title} link={i?.link} all description />
                ) : i?.sectionType === 'podcast' && i?.sectionId === 'radReplay' ? (
                    <ContainerPlaylist data={i} spotlight title={i?.title} link={i?.link} description />
                ) : i?.sectionType === 'podcast' ? (
                    <ContainerPlaylist data={i?.items} title={i?.title} link={i?.link} all description />
                ) : i?.sectionType === 'podcast_category' ? (
                    <RadioCategory data={i} />
                ) : i?.sectionType === 'podcastH' ? (
                    <RadioPodcastH data={i} />
                ) : i?.sectionType === 'episode' ? (
                    <RadioRadPromoteEpisode data={i} />
                ) : i?.sectionType === 'top_episode' ? (
                    <RadioTopPodcast data={i} />
                ) : i?.sectionType === 'Radio_Banner' ? (
                    <RadioBanner data={i} />
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
