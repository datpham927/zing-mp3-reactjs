/* eslint-disable no-implied-eval */
import classNames from 'classnames/bind';
import styles from './ArtistOverview.module.scss';
import { useSelector } from 'react-redux';
import NoContent from '~/components/noContent/NoConTent';
import ContainerPlaylist from '~/components/container/ContainerPlayList';
import ContainerVideos from '~/components/container/ContainerVideos';
import ContainerArtists from '~/components/container/ContainerArtists';
import SongSpotlight from './SongSpotlight';
import Loading from '~/components/load/Loading/Loading';

const cx = classNames.bind(styles);

function ArtistOverview() {
    const data = useSelector((state) => state.dataArtist.dataArtist);
    return data?.length !== 0 ? (
        <div className={cx('wrapper')}>
            {data?.sections ? (
                <>
                    {data?.sections?.map((e) =>
                        e.sectionType === 'song' ? (
                            e.items?.length > 3 && <SongSpotlight data={e} />
                        ) : e.sectionType === 'playlist' ? (
                            <ContainerPlaylist data={e.items} title={e.title} scroll />
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
    ) : (
        <Loading />
    );
}

export default ArtistOverview;
