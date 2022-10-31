import config from "../config";

import { Private, Following, Radio, ZingChart, Discover } from "../pages";

// public router
const publicRouter = [
  { path: config.routes.private, component: Private },
  { path: config.routes.discover, component: Discover },
  { path: config.routes.zingchart, component: ZingChart },
  { path: config.routes.radio, component: Radio },
  { path: config.routes.following, component: Following },
];

// public router
const privateRouter = [
  { path: "/", component: Discover },
  { path: config.routes.zingchart, component: ZingChart },
  { path: config.routes.radio, component: Radio },
  { path: config.routes.following, component: Following },
];

export { publicRouter, privateRouter };
