import React, { Component } from "react";
import styled from "styled-components";

import { FlexRowComponent } from "../../../components/FlexRowComponent";
import { InfoComponent } from "../../../components/InfoComponent";

const UserAddFormAddInput = styled.input`
  display: block;
  border: 1px solid #000;
  outline: none;
  padding: 0.5rem;
  ${props => props.theme.overrides.MainFormUsersInput.root};
`;

const UserAddFormAddButton = styled.button`
  margin-left: 1rem;
  ${props => {
    const styles = props.theme.overrides.MainFormUsersAddButton;
    return props.disabled ? styles.disabled : styles.root;
  }};
`;

export class UserAddFormUI extends Component {
  _hasError = value => {
    if (!value || !Boolean(value)) {
      return "User name is required";
    }

    if (value.length < 2) {
      return "Invalid User name";
    }

    return false;
  };

  _handleSubmit = e => {
    e.preventDefault();

    const value = this.input.value;
    const error = this._hasError(value);

    if (error) {
      return this.setState({ error });
    }

    this.props.addUser(value);
  };
  _handleKeyUp = e => {
    // todo: make async check with timeout
    const value = this.input.value;
    const error = this._hasError(value);

    this.setState({ error: error || undefined });
  };

  constructor(props) {
    super(props);
    this.state = {
      error: undefined
    };
  }

  render() {
    const { error } = this.state;
    const { isFetching } = this.props;

    return (
      <form onSubmit={this._handleSubmit}>
        <FlexRowComponent>
          <UserAddFormAddInput
            type="text"
            placeholder="xxxxxxx"
            innerRef={node => (this.input = node)}
            onKeyUp={this._handleKeyUp}
          />

          <UserAddFormAddButton type="submit" disabled={error || isFetching}>
            {isFetching ? "Loading..." : "Add More"}
          </UserAddFormAddButton>
        </FlexRowComponent>
        <small>http://steamcommunity.com/id/xxxxxxx</small>
        {error && <InfoComponent type="accent" text={error} />}
      </form>
    );
  }
}
