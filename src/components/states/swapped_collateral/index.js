// Library Imports
import React, { Component } from "react";

// Relative Imports
import { Body, Microcopy, Column, Title, Description, Image } from "./styles";
import Dropdown from "../../dropdown/index.js";
import swapped_collateral from "../../../assets/illustrations/swapped.svg";

class SwappingCollateral extends Component {
  render() {
    return (
      <Body>
        <Image src={swapped_collateral} />
        <Microcopy>
          <Column>
            <Title>Collateral Swapped</Title>
            <Description>
              The swap transaction has finished. To view the changes, view and
              refresh your vault within Oasis or review the transaction in
              Etherscan.
            </Description>
          </Column>
        </Microcopy>
      </Body>
    );
  }
}

export default SwappingCollateral;
