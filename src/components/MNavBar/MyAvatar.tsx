import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { getMyAvatar } from "../../redux/module/myInfo/selector";

const MyAvatar = () => {
  const myImg = useSelector(getMyAvatar);

  return <AvatarImg src={myImg} />;
};

const AvatarImg = styled.div<{ src: string }>`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-image: ${(props) => `url(${props.src})`};
  background-size: cover;
  background-position: center center;
`;

export default MyAvatar;
