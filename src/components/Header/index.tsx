import React from "react";
import styled from "styled-components";
import { flex } from "../../styles/utils";

import HeaderBtns from "./HeaderBtns";
import HeaderTitle from "./HeaderTitle";

// 이후 로고 이미지로 변경 필요
// icon 적용 필요
const MainHeader = () => {
  return (
    <Header>
      <Content>
        <HeaderTitle />
        <HeaderBtns />
      </Content>
    </Header>
  );
};

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.color.white};
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
`;

const Content = styled.div`
  ${flex("end")};
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export default MainHeader;
