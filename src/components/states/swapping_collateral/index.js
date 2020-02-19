// Library Imports
import React, { Component } from "react";

// Relative Imports
import { Body, Microcopy, Column, Title, Description, Image } from "./styles";
import Dropdown from "../../dropdown/index.js";
import swapping_collateral from "../../../assets/illustrations/swapping.svg";

class SwappingCollateral extends Component {
  render() {
    return (
      <Body>
        <Image src={swapping_collateral} />
        <Microcopy>
          <Column>
            <Title>Swapping Collateral</Title>
            <Description>
              You approved the transaction and your collateral is being swapped.
              You will be notified once the transaction has been confirmed.
            </Description>
          </Column>
        </Microcopy>
      </Body>
    );
  }
}

export default SwappingCollateral;
