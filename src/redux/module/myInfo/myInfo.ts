import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TMyInfo } from "./types";

const initialState: TMyInfo = {
  user: {
    loading: false,
    error: null,
    data: {
      id: "",
      userId: "",
      email: "",
      nickname: "",
      isLogin: true,
    },
  },
  home: {
    loading: false,
    error: null,
    data: {
      id: "asdfasdfasdf",
      title: "내 홈",
    },
  },
};

const myInfoSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loadHomeInfoReq: (state, { payload }: PayloadAction<string>) => {
      state.home.loading = true;
    },
    loadHomeInfoSuccess: (state, action) => {
      state.home.loading = false;
      state.home.data = action.payload;
    },
    loadHomeInfoFailure: (state, action) => {
      state.home.loading = false;
      state.home.error = action.payload;
    },
  },
});

export const { loadHomeInfoReq, loadHomeInfoSuccess, loadHomeInfoFailure } =
  myInfoSlice.actions;
export default myInfoSlice;
