/* eslint-disable no-implied-eval */
import classNames from 'classnames/bind';
import styles from './ArtistHero.module.scss';
import ArtistHeroTop from './ArtistHeroTop';
import ContainerSongs from '~/components/container/ContainerSongs';
import ContainerPlaylist from '~/components/container/ContainerPlayList';
import ContainerVideos from '~/components/container/ContainerVideos';
import ContainerArtists from '~/components/container/ContainerArtists';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { artist } from '~/components/Api/Service';
import Loading from '~/components/load/Loading/Loading';

const cx = classNames.bind(styles);

function ArtistHero() {
    const [data, setData] = useState([]);
    const [kt, setKt] = useState(false);

    const id = useParams();
    useEffect(() => {
        const fetchApi = async () => {
            const data = await artist(id.name);
            setData(data);
            setKt(true);
        };
        fetchApi();
    }, [id.name]);
    return kt && data?.length !== 0 ? (
        <div className={cx('wrapper')}>
            <ArtistHeroTop />
            {data?.sections.map((e, i) =>
                e.sectionType === 'song' ? (
                    <ContainerSongs data={e.items} title={e.title} index={6} all link={e.link} />
                ) : e.sectionType === 'playlist' ? (
                    <ContainerPlaylist data={e.items} title={e.title} />
                ) : e.sectionType === 'video' ? (
                    <ContainerVideos data={e.items} title={e.title} />
                ) : e.sectionType === 'artist' ? (
                    <ContainerArtists data={e.items} title={e.title} />
                ) : (
                    ''
                ),
            )}
        </div>
    ) : (
        <Loading />
    );
}

export default ArtistHero;
