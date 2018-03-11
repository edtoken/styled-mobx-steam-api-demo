import React, {Component} from "react";
import styled from "styled-components";
import {RowComponent} from "../../components/RowComponent";
import {FlexRowComponent} from "../../components/FlexRowComponent";
import {PaperComponent} from "../../components/PaperComponent";
import {InfoComponent} from "../../components/InfoComponent";

const MainFormUserAddInput = styled.input`
  display: block;
  border: 1px solid #000;
  outline: none;
  padding: 0.5rem;
  ${props => props.theme.overrides.MainFormUsersInput.root};
`;

const MainFormUserAddButton = styled.button`
  margin-left: 1rem;
  ${props =>
  props.disabled
    ? props.theme.overrides.MainFormUsersAddButton.disabled
    : props.theme.overrides.MainFormUsersAddButton.root};
`;

class MainSearchPageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: undefined
    };
  }

  _hasError = value => {
    return Boolean(value) ? false : "User name or Steam ID is required";
  };

  _handleSubmit = e => {
    e.preventDefault();

    const value = this.input.value;
    const error = this._hasError(value);

    if (error) {
      return this.setState({error});
    }

    console.log("SUCCESS", value);
  };

  _handleKeyUp = e => {
    // todo: make async check with timeout
    const value = this.input.value;
    const error = this._hasError(value);

    this.setState({error: error || undefined})
  }

  render() {
    const {error} = this.state;

    return (
      <form onSubmit={this._handleSubmit}>
        <FlexRowComponent>
          <MainFormUserAddInput
            type="text"
            placeholder="xxxxxxx"
            innerRef={node => (this.input = node)}
            onKeyUp={this._handleKeyUp}
          />

          <MainFormUserAddButton type="submit" disabled={error}>
            Add More
          </MainFormUserAddButton>
        </FlexRowComponent>
        <small>http://steamcommunity.com/id/xxxxxxx</small>
        {error && <InfoComponent type="error" text={error}/>}
      </form>
    );
  }
}

const MainSearchPageStyled = styled.section``;

export const MainSearchPage = () => (
  <MainSearchPageStyled>
    <RowComponent>
      <FlexRowComponent>
        <PaperComponent>
          <MainSearchPageForm/>
        </PaperComponent>
      </FlexRowComponent>
    </RowComponent>
  </MainSearchPageStyled>
);
