import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { useRouter } from "../../hooks/useRouter";
import { checkPage } from "../../utils/checkPage";

import { getHomeTitle } from "../../redux/module/myInfo/selector";
import { positionCenter, positionCenterY } from "../../styles/utils";

const HeaderTitle = () => {
  const { push, pathname } = useRouter();

  const homeTitle = useSelector(getHomeTitle);
  return (
    <>
      {checkPage(pathname, "myhome") && <HomeTitle>{homeTitle}</HomeTitle>}
      {!checkPage(pathname, "myhome") && (
        <SiteTitle onClick={() => push("/myhome")}>Palette</SiteTitle>
      )}
    </>
  );
};

const HomeTitle = styled.h1`
  ${positionCenterY()};
  left: 0;
`;

const SiteTitle = styled.h1`
  ${positionCenter()};
  cursor: pointer;
`;

export default HeaderTitle;
