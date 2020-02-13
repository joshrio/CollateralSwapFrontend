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
    return (
      <Container>
        <Header>
          <Title>Collateral Swap</Title>
          <Description>
            Instantly swap collateral across DeFi platforms.
          </Description>
        </Header>
        <Body>
          <Form>Form</Form>
          <Fees>
            <Row>
              <Bold>Fees</Bold>
              <Bold>Details</Bold>
            </Row>
            <Row>
              <Label>Transaction</Label>
              <Label>0.0432</Label>
            </Row>
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
