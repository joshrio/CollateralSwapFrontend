// Library Imports
import React, { Component } from "react";

// Relative Imports
import {
  Body,
  Microcopy,
  Column,
  Title,
  Description,
  Image,
  Link
} from "./styles";
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
              refresh your vault within{" "}
              <Link target="_blank" href="https://oasis.app/borrow/5678">
                Oasis
              </Link>{" "}
              or review the transaction in{" "}
              <Link
                target="_blank"
                href="https://etherscan.io/tx/0x015f31d9ea94dba5fcf8aa4181c303298fc9c2d8367aa9f3584872967e8833c9"
              >
                Etherscan
              </Link>
              .
            </Description>
          </Column>
        </Microcopy>
      </Body>
    );
  }
}

export default SwappingCollateral;
