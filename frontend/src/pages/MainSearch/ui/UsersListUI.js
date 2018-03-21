import React from "react";
import styled from "styled-components";

const UserDelButton = styled.button`
  margin-left: 1rem;
  ${props => {
  // const styles = props.theme.overrides.MainFormUsersAddButton;
  // return props.disabled ? styles.disabled : styles.root;
}};
`;

const UsersUIStyled = styled.section`
  margin-top: 2rem;
`;

export const UsersUI = ({users = []}) => (
  <UsersUIStyled>
    {users.map((user, num) => {
      return <div key={num}>
        {user.steamId}
      </div>;
    })}
  </UsersUIStyled>
);
