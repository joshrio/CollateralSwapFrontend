import React from "react"
import SwapSelector from "./SwapSelector"

const Web3Enabled = ({ account, loading, setLoading, web3 }) => {
	return (
		<>
			<SwapSelector account={account} loading={loading} setLoading={setLoading} web3={web3} />
		</>
	)
}

export default Web3Enabled