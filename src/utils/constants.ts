import { HomePage, NowPage, TodayPage } from '../pages';
import { IRouters } from './types/commonTypes';

export const routersItems: IRouters[] = [
  { path: '', element: HomePage },
  { path: ':city', element: TodayPage },
  { path: ':city/now', element: NowPage },
];
