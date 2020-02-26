import React from "react"
import { Body, Button, Column, Description, Footer, Image, Microcopy, Title } from "./Web3.styles"
import connect_wallet from "../../assets/illustrations/connect.svg" // @joshio please change

const Web3Unavailable = () => (
	<>
		<Body>
			<Image src={connect_wallet} />
			<Microcopy>
				<Column>
					<Title>No Ethereum wallet detected!</Title>
					<Description>To get started please connect your Ethereum wallet or use an Ethereum compatible browser.<br />E.g. Chrome with Metamask</Description>
				</Column>
			</Microcopy>
		</Body>
		<Footer>
			<Button disabled>
				No wallet detected
			</Button>
		</Footer>
	</>
)

export default Web3Unavailable