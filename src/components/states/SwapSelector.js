import React, { useState } from "react"

import MakerSwapComponent from "../platforms/MakerSwapComponent"

import { PlatformOptions } from "../../controllers/Platforms"

import { Body, Form } from "./Swap.styles"
import Dropdown from "../dropdown/index.js"

const SwapSelector = ({ account, loading, setLoading, web3 }) => {
	let [from, setFrom] = useState("Maker") // default key for Maker

	return (
		<>
		<Body>
			<Form>
				<Dropdown options={PlatformOptions} onSelect={setFrom} label="Platform" value={PlatformOptions[from]} />
				{from === "Maker" && <MakerSwapComponent account={account} loading={loading} setLoading={setLoading} web3={web3} />}
			</Form>
		</Body>
		</>
	)
}

export default SwapSelector