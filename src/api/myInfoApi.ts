import instance from ".";

export const myInfoApi = {
  loadHomeInfo: (homeId: string) => instance.get(`/home/${homeId}`),
};
