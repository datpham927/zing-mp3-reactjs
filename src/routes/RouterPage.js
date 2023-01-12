import { memo } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import LibraryPlaylist from '~/pages/others/Library/LibraryPlaylist/LibraryPlaylist';
import LibraryRecent from '~/pages/others/Library/LibraryRecent/LibraryRecent';
import LibrarySongs from '~/pages/others/Library/LibrarySongs/LibrarySongs';
import PageAlbum from '~/pages/others/pageAlbum/PageAlbum';
import ArtistAlbum from '~/pages/others/pageArtist/ArtistAlbum/ArtistAlbum';
import ArtistHero from '~/pages/others/pageArtist/ArtistHero/ArtistHero';
import ArtistMv from '~/pages/others/pageArtist/ArtistMv/ArtistMv';
import ArtistOverview from '~/pages/others/pageArtist/ArtistOverview/ArtistOverview';
import ArtistSinger from '~/pages/others/pageArtist/ArtistSinger/ArtistSinger';
import ArtistSong from '~/pages/others/pageArtist/ArtistSong/ArtistSong';
import PageArtist from '~/pages/others/pageArtist/pageArtist';
import PageHub from '~/pages/others/pageHub/PageHub';
import AlbumAll from '~/pages/others/PageNewRelease/AlbumNewRelease/AlbumAll';
import AlbumKpop from '~/pages/others/PageNewRelease/AlbumNewRelease/AlbumKpop';
import AlbumOther from '~/pages/others/PageNewRelease/AlbumNewRelease/AlbumOther';
import AlbumUsuk from '~/pages/others/PageNewRelease/AlbumNewRelease/AlbumUsuk';
import AlbumVpop from '~/pages/others/PageNewRelease/AlbumNewRelease/AlbumVpop';
import PageNewRelease from '~/pages/others/PageNewRelease/PageNewRelease';
import SongAll from '~/pages/others/PageNewRelease/SongNewRelease/SongAll';
import SongKpop from '~/pages/others/PageNewRelease/SongNewRelease/SongKpop';
import SongOther from '~/pages/others/PageNewRelease/SongNewRelease/SongOther';
import SongUsuk from '~/pages/others/PageNewRelease/SongNewRelease/SongUsuk';
import SongVpop from '~/pages/others/PageNewRelease/SongNewRelease/SongVpop';
import PageResultSearch from '~/pages/others/PageResultSearch/PageResultSearch';
import ResultAlbum from '~/pages/others/PageResultSearch/ResultAlbum';
import ResultAll from '~/pages/others/PageResultSearch/ResultAll';
import ResultArtist from '~/pages/others/PageResultSearch/ResultArtist';
import ResultMv from '~/pages/others/PageResultSearch/ResultMv';
import ResultSongs from '~/pages/others/PageResultSearch/ResultSongs';
import TopPodcast from '~/pages/others/TopPodcast/TopPodcast';
import Category from '~/pages/primary/Category/Category';
import Following from '~/pages/primary/Following/Following';
import Home from '~/pages/primary/Home';
import Mv from '~/pages/primary/Mv/Mv';
import Private from '~/pages/primary/Private';
import Radio from '~/pages/primary/Radio/Radio';
import { v4 as uuidv4 } from 'uuid';
import SongNew from '~/pages/primary/SongNew/SongNew';
import Top100 from '~/pages/primary/Top100';
import ZingChart from '~/pages/primary/ZingChart';

const RouterPage = () => {
    const location = useLocation();

    return (
        <Routes location={location} key={uuidv4()}>
            <Route path={'mymusic'} element={<Private />}></Route>
            <Route path={''} element={<Home />}></Route>
            <Route path={'zing-chart'} element={<ZingChart />}></Route>
            <Route path={`radio`} element={<Radio />}></Route>
            {/* theo dõi */}
            <Route path={`the-loai-nghe-si/:name/:id`} element={<Following />}></Route>
            {/* nhạc mới */}
            <Route path={'moi-phat-hanh'} element={<SongNew />}></Route>
            <Route path={'hub'} element={<Category />}></Route>
            <Route path={'top100'} element={<Top100 />}></Route>
            {/* mv */}
            <Route path={'the-loai-video/:name/:id'} element={<Mv />}></Route>

            {/* ===============page other =============*/}
            <Route path={'/top-podcast'} element={<TopPodcast />}></Route>
            {/* ----------------- */}
            <Route path={'nghe-si/:name'} element={<PageArtist />}>
                <Route path="" element={<ArtistOverview />}></Route>
                <Route path="bai-hat" element={<ArtistSong />}></Route>
                <Route path="single" element={<ArtistSinger />}></Route>
                <Route path="album" element={<ArtistAlbum />}></Route>
                <Route path="video" element={<ArtistMv />}></Route>
            </Route>
            <Route path="/:name" element={<ArtistHero />}></Route>
            {/* ----------------- */}
            <Route path={'new-release/song'} element={<PageNewRelease />}>
                <Route path={'all'} element={<SongAll />}></Route>
                <Route path={'vpop'} element={<SongVpop />}></Route>
                <Route path={'kpop'} element={<SongKpop />}></Route>
                <Route path={'usuk'} element={<SongUsuk />}></Route>
                <Route path={'other'} element={<SongOther />}></Route>
            </Route>
            <Route path={'new-release/album'} element={<PageNewRelease />}>
                <Route path={'all'} element={<AlbumAll />}></Route>
                <Route path={'vpop'} element={<AlbumVpop />}></Route>
                <Route path={'kpop'} element={<AlbumKpop />}></Route>
                <Route path={'usuk'} element={<AlbumUsuk />}></Route>
                <Route path={'other'} element={<AlbumOther />}></Route>
            </Route>
            {/* ----------------- */}
            <Route path="tim-kiem" element={<PageResultSearch />}>
                <Route path="tat-ca/:id" element={<ResultAll />}></Route>
                <Route path="bai-hat/:id" element={<ResultSongs />}></Route>
                <Route path="playlist/:id" element={<ResultAlbum />}></Route>
                <Route path="artist/:id" element={<ResultArtist />}></Route>
                <Route path="video/:id" element={<ResultMv />}></Route>
            </Route>
            {/* ----------------- */}
            <Route path={'album/:name/:id'} element={<PageAlbum />}></Route>
            <Route path={'playlist/:name/:id'} element={<PageAlbum />}></Route>
            <Route path={'bai-hat/:name/:id'} element={<PageAlbum />}></Route>
            {/* ------------------ page hub -------------------- */}
            <Route path={'hub/:name/:id'} element={<PageHub />}></Route>
            <Route path={'/library/songs'} element={<LibrarySongs />}></Route>
            <Route path={'/library/play-list'} element={<LibraryPlaylist />}></Route>
            <Route path={'/library/recently'} element={<LibraryRecent />}></Route>
        </Routes>
    );
};

export default memo(RouterPage);
