import React from "react"

import Popup from "../popup"

const Information = ({ closeAction }) => {
	let title = "What is a collateral swap?"
	let description = "A collateral swap is when you swap the underlying collateral of a position, without having to manually liquidate the position (by usually paying back your entire loan)."
	let subdescription = (
		<>
			In the case of MakerDAO's MCDs, you are able to swap an ETH collaterised vault to a BAT collaterised vault in one transaction, without
			manually paying back the vault's DAI debt.
			<br />
			<br />
			This uses the magic of open composable ethereum protocols, namely:{" "}
			<a href="https://makerdao.com/en/" target="_blank" rel="noopener noreferrer">
				MakerDAO's vaults
			</a>
			,{" "}
			<a href="https://aave.com/" target="_blank" rel="noopener noreferrer">
				Aave's flash loans
			</a>
			, and{" "}
			<a href="https://uniswap.io/" target="_blank" rel="noopener noreferrer">
				Uniswap's DEX
			</a>
			.<br />
			<br />
			More info and reasoning can be found on the{" "}
			<a href="https://twitter.com/daveytea/status/1224760425272745991?s=20" target="_blank" rel="noopener noreferrer">
				Twitter thread
			</a>
			.
		</>
	)

	return Popup({ closeAction, title, description, subdescription })
}

export default Information