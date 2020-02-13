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
  Body,
  Fees,
  Label,
  Detail
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
        <Body>
          <Fees>
            <Label>Fees</Label>
            <Detail>Fees</Detail>
          </Fees>
        </Body>
        <Footer>
          <Button>Swap</Button>
        </Footer>
      </Container>
    );
  }
}

export default Modal;
