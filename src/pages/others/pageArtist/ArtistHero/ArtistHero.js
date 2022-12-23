/* eslint-disable no-implied-eval */
import classNames from 'classnames/bind';
import styles from './ArtistHero.module.scss';
import ArtistHeroTop from './ArtistHeroTop';
import ContainerSongs from '~/components/container/ContainerSongs';
import ContainerPlaylist from '~/components/container/ContainerPlayList';
import ContainerVideos from '~/components/container/ContainerVideos';
import ContainerArtists from '~/components/container/ContainerArtists';
import NoContent from '~/components/noContent/NoConTent';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { artist } from '~/components/Api/Service';

const cx = classNames.bind(styles);

function ArtistHero() {
    const [data, setData] = useState([]);
    const id = useParams();
    useEffect(() => {
        const fetchApi = async () => {
            const data = await artist(id.name);
            setData(data);
        };
        fetchApi();
    }, [id.name]);
    return (
        <div className={cx('wrapper')}>
            {data?.sections ? (
                <>
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
                </>
            ) : (
                <NoContent />
            )}
        </div>
    );
}

export default ArtistHero;
