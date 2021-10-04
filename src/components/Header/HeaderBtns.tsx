import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { useRouter } from "../../hooks/useRouter";
import { getLoginStatus } from "../../redux/module/myInfo/selector";

const HeaderBtns = () => {
  const { push } = useRouter();

  const isLogin = useSelector(getLoginStatus);

  return (
    <BtnBox isLogin={isLogin}>
      <button type="button" onClick={() => push("/myPage")}>
        프로필
      </button>
    </BtnBox>
  );
};

const BtnBox = styled.nav<{ isLogin: boolean }>`
  display: ${(props) => !props.isLogin && "none"};
`;

export default HeaderBtns;
