import config from '../config';

import Album from '~/pages/Album';
import Block from '~/pages/Block';
import ResultSearch from '~/pages/ResultSearch';
import { Discover, Following, Private, Radio, ZingChart } from '~/pages';
import Category from '~/pages/Category';
import SongNew from '~/pages/SongNew';
import Top100 from '~/pages/Top100';
import Mv from '~/pages/Mv';

// public router
const publicRouter = [
    { path: config.routes.private, component: Private },
    { path: config.routes.discover, component: Discover },
    { path: config.routes.zingchart, component: ZingChart },
    { path: config.routes.radio, component: Radio },
    { path: config.routes.following, component: Following },
    // ---------------------------
    { path: config.routes.resultSearch, component: ResultSearch },
    { path: config.routes.album, component: Album },
    { path: config.routes.block, component: Block },

    { path: config.routes.musicNew, component: SongNew },
    { path: config.routes.category, component: Category },
    { path: config.routes.top100, component: Top100 },
    { path: config.routes.mv, component: Mv },
];

export { publicRouter };
