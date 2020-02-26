import React from "react"
import Popup from "../popup"

const TermsConditions = ({ closeAction }) => {
	let title = "Terms and Conditions"
	let description = (
		<>
			Although our{" "}
			<a href="https://etherscan.io/address/0x5bca0f6cd5f9a74895d66005acef969342f301a0#tokentxns" target="_blank" rel="noopener noreferrer">
				smart contract
			</a>{" "}
			has been thoroughly tested, this is still an experimental product that has not been through a security audit. <br /><br />
			Like most things in Ethereum, there is always a non-zero risk when using this product. By using Collateral Swap, your understand the risks of using an experimental product.
		</>
	)

	let subdescription = (
		<>
			Some risks include:
			<li>
				We do not check if swapping collateral will keep your position above the liquidation threshold. If you are close to 150%
				collaterisation ratio, then it may be unsafe to use this!
			</li>
			<li>We use Uniswap to source liquidity, so price slippage may occur, especially if you're swapping a large amount</li>
			<li>
				We rely on the proper functioning of the MakerDAO DAI stable coin system, specifically their DSProxy architecture to access your vault
			</li>
			<br />
			Having said that, we do not hold any of your funds or maintain access to your positions, so there are minimal risks, albeit non-zero.
		</>
	)

	return Popup({ closeAction, title, description, subdescription })
}

export default TermsConditions
