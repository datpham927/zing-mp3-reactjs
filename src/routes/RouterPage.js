import { memo } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Home, Following, Radio, ZingChart } from '~/pages';
import Album from '~/pages/others/Album/Album';
import AlbumAll from '~/pages/others/NewRelease/AlbumNewRelease/AlbumAll';
import AlbumKpop from '~/pages/others/NewRelease/AlbumNewRelease/AlbumKpop';
import AlbumOther from '~/pages/others/NewRelease/AlbumNewRelease/AlbumOther';
import AlbumUsuk from '~/pages/others/NewRelease/AlbumNewRelease/AlbumUsuk';
import AlbumVpop from '~/pages/others/NewRelease/AlbumNewRelease/AlbumVpop';
import NewRelease from '~/pages/others/NewRelease/NewRelease';
import SongAll from '~/pages/others/NewRelease/SongNewRelease/SongAll';
import SongKpop from '~/pages/others/NewRelease/SongNewRelease/SongKpop';
import SongOther from '~/pages/others/NewRelease/SongNewRelease/SongOther';
import SongUsuk from '~/pages/others/NewRelease/SongNewRelease/SongUsuk';
import SongVpop from '~/pages/others/NewRelease/SongNewRelease/SongVpop';
import AlbumArtist from '~/pages/others/pageArtist/AlbumArtist/AlbumArtist';
import MvArtist from '~/pages/others/pageArtist/MvArtist/MvArtist';
import Overview from '~/pages/others/pageArtist/Overview/Overview';
import PageArtist from '~/pages/others/pageArtist/pageArtist';
import SingerArtist from '~/pages/others/pageArtist/SingerArtist/SingerArtist';
import SongArtist from '~/pages/others/pageArtist/SongArtist/SongArtist';
import ResultSearch from '~/pages/others/ResultSearch';
import AlbumPages from '~/pages/others/ResultSearch/AlbumPages/AlbumPages';
import Artist from '~/pages/others/ResultSearch/Artist/Artist';
import MvSearch from '~/pages/others/ResultSearch/MvSearch/MvSearch';
import PagesAll from '~/pages/others/ResultSearch/PagesAll/PagesAll';
import SongPages from '~/pages/others/ResultSearch/SongPages/SongPages';
import Category from '~/pages/primary/Category';
import Mv from '~/pages/primary/Mv';
import Private from '~/pages/primary/Private';
import SongNew from '~/pages/primary/SongNew';
import Top100 from '~/pages/primary/Top100';

const RouterPage = () => {
    const location = useLocation();

    return (
        <Routes location={location} key={location.pathname}>
            <Route path={'mymusic'} element={<Private />}></Route>
            <Route path={''} element={<Home />}></Route>
            <Route path={'zing-chart'} element={<ZingChart />}></Route>
            <Route path={`radio`} element={<Radio />}></Route>
            <Route path={`the-loai-nghe-si`} element={<Following />}></Route>
            <Route path={'moi-phat-hanh'} element={<SongNew />}></Route>
            <Route path={'hub'} element={<Category />}></Route>
            <Route path={'top100'} element={<Top100 />}></Route>
            <Route path={'the-loai-video'} element={<Mv />}></Route>

            {/* ----------------- */}
            <Route path="tim-kiem" element={<ResultSearch />}>
                <Route path="tat-ca/:id" element={<PagesAll />}></Route>
                <Route path="bai-hat/:id" element={<SongPages />}></Route>
                <Route path="playlist/:id" element={<AlbumPages />}></Route>
                <Route path="artist/:id" element={<Artist />}></Route>
                <Route path="video/:id" element={<MvSearch />}></Route>
            </Route>
            <Route path={'nghesi/:name'} element={<PageArtist />}>
                <Route path="" element={<Overview />}></Route>
                <Route path="bai-hat" element={<SongArtist />}></Route>
                <Route path="single" element={<SingerArtist />}></Route>
                <Route path="album" element={<AlbumArtist />}></Route>
                <Route path="video" element={<MvArtist />}></Route>
            </Route>
            <Route path={'album/:name/:id'} element={<Album />}></Route>
            <Route path={'playlist/:name/:id'} element={<Album />}></Route>
            <Route path={'new-release/song'} element={<NewRelease />}>
                <Route path={'all'} element={<SongAll />}></Route>
                <Route path={'vpop'} element={<SongVpop />}></Route>
                <Route path={'kpop'} element={<SongKpop />}></Route>
                <Route path={'usuk'} element={<SongUsuk />}></Route>
                <Route path={'other'} element={<SongOther />}></Route>
            </Route>
            <Route path={'new-release/album'} element={<NewRelease />}>
                <Route path={'all'} element={<AlbumAll />}></Route>
                <Route path={'vpop'} element={<AlbumVpop />}></Route>
                <Route path={'kpop'} element={<AlbumKpop />}></Route>
                <Route path={'usuk'} element={<AlbumUsuk />}></Route>
                <Route path={'other'} element={<AlbumOther />}></Route>
            </Route>
        </Routes>
    );
};

export default memo(RouterPage);
