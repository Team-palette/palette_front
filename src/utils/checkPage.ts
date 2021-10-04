export const checkPage = (pathname: string, pageName: string): boolean => {
  return pathname.includes(pageName) ? true : false;
};
