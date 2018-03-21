import React from "react";
import styled from "styled-components";
import { observer } from "mobx-react";

import { RootStore } from "../../stores/RootStore";
import { RowComponent } from "../../components/RowComponent";
import { FlexRowComponent } from "../../components/FlexRowComponent";
import { PaperComponent } from "../../components/PaperComponent";

import { UserAddFormUI } from "./ui/UserAddFormUI";
import { UsersUI } from "./ui/UsersListUI";

const store = new RootStore();

const MainSearchPageStyled = styled.section``;

export const MainSearchPage = observer(() => {
  console.log("store.user.users", store.user.users);

  return (
    <MainSearchPageStyled>
      <RowComponent>
        <FlexRowComponent>
          <PaperComponent>
            <UserAddFormUI
              isFetching={store.user.addUserIsFetching}
              addUser={store.user.actions.addUser}
              users={store.user.users}
            />
            <UsersUI users={store.user.users} />
          </PaperComponent>
        </FlexRowComponent>
      </RowComponent>
    </MainSearchPageStyled>
  );
});
