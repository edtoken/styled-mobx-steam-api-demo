import React from "react";
import styled from "styled-components";

const UsersUIStyled = styled.section`
  margin-top: 2rem;
`;

export const UsersUI = ({ usersList = [] }) => (
  <UsersUIStyled>
    {usersList.map((user, num) => {
      return <div>USER-${num}</div>;
    })}
  </UsersUIStyled>
);
