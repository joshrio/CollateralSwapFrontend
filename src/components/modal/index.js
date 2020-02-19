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
  Bold,
  Row,
  Form
} from "./styles";

class Modal extends Component {
  render() {
    const { onClick, children, button } = this.props;
    return (
      <Container>
        <Header>
          <Title>Collateral Swap</Title>
          <Description>
            Instantly swap collateral across DeFi platforms.
          </Description>
        </Header>
        <Body>{children}</Body>
        <Footer>
          <Button onClick={onClick}>{button}</Button>
        </Footer>
      </Container>
    );
  }
}

export default Modal;
