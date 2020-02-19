// Library Imports
import React, { Component } from "react";

// Relative Imports
import { Body, Microcopy, Column, Title, Description, Image } from "./styles";
import Dropdown from "../../dropdown/index.js";
import confirm_transaction from "../../../assets/illustrations/confirm.svg";

class ConfirmTransaction extends Component {
  render() {
    return (
      <Body>
        <Image src={confirm_transaction} />
        <Microcopy>
          <Column>
            <Title>Confirm Transaction</Title>
            <Description>
              To finalize this transaction please confirm the transaction within
              Metamask. If a window doesn’t appear, select it from the browser
              window.
            </Description>
          </Column>
        </Microcopy>
      </Body>
    );
  }
}

export default ConfirmTransaction;
