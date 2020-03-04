import React from "react"
import { Body, Button, Column, Description, Footer, Image, Microcopy, Title, Wrapper  } from "./Web3.styles"
import connect_wallet from "../../assets/illustrations/connect.svg"

const Web3NotEnabled = props => (
   <>
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
    <Footer>
      <Button onClick={async () => await props.loadWeb3()}>Connect Wallet</Button>
    </Footer>
    </>

);

export default Web3NotEnabled;
