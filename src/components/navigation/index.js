// Library Imports
import React, { Component } from "react";

// Relative Imports
import { Container, Button, Brand } from "./styles";
import logo from "../../assets/logo/logo.svg";

class Navigation extends Component {
  state = {
    connected: false,
    wallet: "0x1234....4321"
  };

  handleConnect = () => {
    alert("Trigger Metamask Window");
  };

  render() {
    const { wallet, connected } = this.state;
    return (
      <Container>
        <Brand src={logo} />
        <Button onClick={this.handleConnect}>
          {connected ? wallet : "Connect Wallet"}
        </Button>
      </Container>
    );
  }
}

export default Navigation;
