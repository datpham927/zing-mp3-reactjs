import { memo } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Discover, Following, Radio, ZingChart } from '~/pages';
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
import config from './config';

const RouterPage = () => {
    const location = useLocation();

    return (
        <div className="container">
            <Routes location={location} key={location.pathname}>
                <Route path={config.routes.private} element={<Private />}></Route>
                <Route path={config.routes.discover} element={<Discover />}></Route>
                <Route path={config.routes.zingchart} element={<ZingChart />}></Route>
                <Route path={config.routes.radio} element={<Radio />}></Route>
                <Route path={config.routes.following} element={<Following />}></Route>
                <Route path={config.routes.songNew} element={<SongNew />}></Route>
                <Route path={config.routes.category} element={<Category />}></Route>
                <Route path={config.routes.top100} element={<Top100 />}></Route>
                <Route path={config.routes.mv} element={<Mv />}></Route>

                {/* ----------------- */}
                <Route path="tim-kiem" element={<ResultSearch />}>
                    <Route path="tat-ca/:id" element={<PagesAll />}></Route>
                    <Route path="bai-hat/:id" element={<SongPages />}></Route>
                    <Route path="playlist/:id" element={<AlbumPages />}></Route>
                    <Route path="artist/:id" element={<Artist />}></Route>
                    <Route path="video/:id" element={<MvSearch />}></Route>
                </Route>
            </Routes>
        </div>
    );
};

export default memo(RouterPage);
