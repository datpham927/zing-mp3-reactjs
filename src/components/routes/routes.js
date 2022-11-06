import config from '../config';

import { Private, Following, Radio, ZingChart, Discover } from '../pages';
import Album from '../pages/Album';
import ResultSearch from '../pages/ResultSearch';

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
];

// public router
const privateRouter = [
    { path: '/', component: Discover },
    { path: config.routes.zingchart, component: ZingChart },
    { path: config.routes.radio, component: Radio },
    { path: config.routes.following, component: Following },
    // ---------------------
    { path: config.routes.resultSearch, component: ResultSearch },
    { path: config.routes.album, component: Album },
];

export { publicRouter, privateRouter };
