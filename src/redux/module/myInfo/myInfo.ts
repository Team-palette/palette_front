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
      avatar:
        "https://images.unsplash.com/photo-1575543483595-568b7afb6b9e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80",
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
