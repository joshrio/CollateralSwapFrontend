// Library Imports
import React, { Component } from "react";

// Relative Imports
import {
  Container,
  Header,
  Title,
  Description,
  Button,
  Footer,
  Body
} from "./styles";

class Modal extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Title>Collateral Swap</Title>
          <Description>
            Instantly swap collateral across DeFi platforms.
          </Description>
        </Header>
        <Body>Body</Body>
        <Footer>
          <Button>Swap</Button>
        </Footer>
      </Container>
    );
  }
}

export default Modal;
