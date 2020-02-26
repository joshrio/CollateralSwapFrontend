import React, { useState } from "react";
import { Layer } from "grommet"
import { CircleInformation } from "grommet-icons"

import Web3Unavailable from "../states/Web3Unavailable"
import Web3NotEnabled from "../states/Web3NotEnabled"
import Web3Enabled from "../states/Web3Enabled"

import Information from "../copy/Information"
import { Body, Button, Container, Description, Header, Title } from "./styles"

const Modal = ({ account, loadWeb3, loading, setLoading, web3, web3Status }) => {

	let [showInfo, setShowInfo] = useState(false)

	return (
		<Container>
			<Header>
				<Title>Collateral Swap (alpha)</Title>
				<Description>
					Instantly swap the collateral of your vault.
					<Button onClick={() => setShowInfo(true)}>
						<CircleInformation size="small" color="#07849f" />
					</Button>
				</Description>
			</Header>
			{showInfo && (
				<Layer onEsc={() => setShowInfo(false)} onClickOutside={() => setShowInfo(false)}>
					<Information closeAction={() => setShowInfo(false)} />
				</Layer>
			)}
			<Body>
				{web3Status < 0 ? (
					<Web3Unavailable />
				) : web3Status === 0 ? (
					<Web3NotEnabled loadWeb3={loadWeb3} />
				) : (
					<Web3Enabled web3={web3} account={account} loading={loading} setLoading={setLoading} />
				)}
			</Body>
		</Container>
	)
}

export default Modal