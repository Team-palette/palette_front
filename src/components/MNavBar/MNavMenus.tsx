import React from "react";
import styled from "styled-components";
import {
  BiEnvelopeOpen,
  BiPlusCircle,
  BiCollection,
  BiSearch,
} from "react-icons/bi";
import { flex } from "../../styles/utils";
import MyAvatar from "./MyAvatar";
import { useRouter } from "../../hooks/useRouter";

const MNavMenus = () => {
  const { push } = useRouter();

  const menus = [
    { name: "Home", icon: <MyAvatar />, _onClick: () => push("/myhome") },
    { name: "Mission", icon: <BiEnvelopeOpen />, _onClick: () => {} },
    { name: "", icon: <BiPlusCircle />, _onClick: () => {} },
    { name: "Feed", icon: <BiCollection />, _onClick: () => push("/feed") },
    { name: "Search", icon: <BiSearch />, _onClick: () => push("/search") },
  ];
  return (
    <NavList>
      {menus.map((menu, idx) => (
        <NavItem key={idx} onClick={menu._onClick}>
          <IconBox>{menu.icon}</IconBox>
          <MenuTitle>{menu.name}</MenuTitle>
        </NavItem>
      ))}
    </NavList>
  );
};

const NavList = styled.ul`
  ${flex("start", "start")};
  width: 100%;
  height: 100%;
`;

const NavItem = styled.li`
  ${flex("center", "center", false)}
  gap: 3px;
  width: calc(100% / 5);
  height: 100%;
  cursor: pointer;
  transition: background-color 200ms ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.color.border};
  }
`;

const IconBox = styled.div`
  font-size: 2.4rem;
`;

const MenuTitle = styled.span`
  font-size: 1rem;
`;

export default MNavMenus;
