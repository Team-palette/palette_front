import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { BiUser } from "react-icons/bi";

import { useRouter } from "../../hooks/useRouter";
import { getLoginStatus } from "../../redux/module/myInfo/selector";
import { flex } from "../../styles/utils";

const HeaderBtns = () => {
  const { push } = useRouter();

  const isLogin = useSelector(getLoginStatus);

  return (
    <BtnBox isLogin={isLogin}>
      <Btn type="button" onClick={() => push("/myPage")}>
        <BiUser />
      </Btn>
    </BtnBox>
  );
};

const BtnBox = styled.nav<{ isLogin: boolean }>`
  display: ${(props) => !props.isLogin && "none"};
`;

const Btn = styled.button`
  ${flex()};
  font-size: 2rem;
`;

export default HeaderBtns;
