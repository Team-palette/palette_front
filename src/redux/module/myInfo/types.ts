export type TUser = {
  userId?: string;
  id: string;
  email: string;
  nickname: string;
  isLogin: boolean;
};

export type THome = {
  id: string;
  title: string;
};

export type TMyInfo = {
  user: {
    loading: boolean;
    error: any;
    data: TUser;
  };
  home: {
    loading: boolean;
    error: any;
    data: THome;
  };
};
