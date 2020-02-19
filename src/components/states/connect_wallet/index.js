// Library Imports
import React, { Component } from "react";

// Relative Imports
import { Body, Microcopy, Column, Title, Description, Image } from "./styles";
import Dropdown from "../../dropdown/index.js";
import connect_wallet from "../../../assets/illustrations/connect.svg";

class ConnectWallet extends Component {
  render() {
    return (
      <Body>
        <Image src={connect_wallet} />
        <Microcopy>
          <Column>
            <Title>Connect Wallet</Title>
            <Description>
              To get started please connect your Metamask wallet. If a window
              doesn’t appear please select the icon from the browser and accept
              the permission.
            </Description>
          </Column>
        </Microcopy>
      </Body>
    );
  }
}

export default ConnectWallet;
