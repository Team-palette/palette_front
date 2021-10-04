import { createSelector } from "reselect";
import { TState } from "../../types";

// user selector
export const getLoginStatus = (state: TState): boolean =>
  state.myInfo.user.data.isLogin;

// home selector
export const getHomeTitle = (state: TState): string =>
  state.myInfo.home.data.title;

export const getHomeId = (state: TState): string => state.myInfo.home.data.id;

export const getHomeInfo = createSelector(
  [getHomeTitle, getHomeId],
  (title, id) => ({ title, id })
);
