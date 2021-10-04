import React from "react";
import styled from "styled-components";
import { mobileOnly } from "../../styles/utils/responsive";
import MNavMenus from "./MNavMenus";

const MNav = () => {
  return (
    <Container>
      <MNavMenus />
    </Container>
  );
};

const Container = styled.nav`
  ${mobileOnly};
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.color.white};
  border-top: 1px solid ${({ theme }) => theme.color.border};
`;

export default MNav;
