import { adminRoutes } from "./adminRoutes";
import {sellerRoute} from './sellerRoute'

export const privateRoutes = [
  ...adminRoutes,
  ...sellerRoute
];
