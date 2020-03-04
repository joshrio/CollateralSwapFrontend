import React, { useEffect, useState } from "react"
import { useToasts } from "react-toast-notifications"
import { Layer } from "grommet"

import { getUsersProxy, getUserCdps, performSwap } from "../../controllers/Swap"
import { MakerToMakerOptions } from "../../controllers/Platforms"
import TermsConditions from "../copy/TermsConditions"
import ServiceFees from "../copy/ServiceFees"

import Checkbox from "../checkbox"
import Dropdown from "../dropdown"
import { Bold, BlankButton, Button, Fees, Footer, ButtonLink, Image, Label, Row, Fill, Body } from "../states/Swap.styles"

import gfx_noProxy from "../../assets/illustrations/swapping.svg" // @joshio please change

const MakerSwapComponent = ({ account, loading, setLoading, web3 }) => {
	const { addToast, removeAllToasts } = useToasts()
    let [userProxy, setUserProxy] = useState(null)

    useEffect(() => {
        if (web3 && account) {
            (async () => {
				setLoading(true)
				let proxy = await getUsersProxy(web3, account)
				setUserProxy(proxy)
				setLoading(false)
            })()
        }
	}, [web3, account, setLoading])

	let [cdps, setCdps] = useState({ "": "Loading your vaults..." })
	let [selectedCdp, setSelectedCdp] = useState(null)

	useEffect(() => {
		(async () => {
			if (userProxy) {
				setLoading(true)
				let cdpList = await getUserCdps(userProxy, web3)
				setCdps(cdpList)
				setLoading(false)
			}
		})()
	}, [web3, userProxy, setLoading])

	let [option, setOption] = useState(null) // Type of swap
	let [checked, setChecked] = useState(false)
	let [showTandCs, setShowTandCs] = useState(false)
	let [showServiceFees, setShowServiceFees] = useState(false)

    let [message, setMessage] = useState(null)
    let [error, setError] = useState(null)
	let [txHash, setTxhash] = useState(null)

	useEffect(() => {
		if (message && txHash) {
			let txLink = (
				<>
					{message}{" "}
					<a href={`https://etherscan.io/tx/${txHash}`} target="_blank" rel="noopener noreferrer">
						See transaction.
					</a>
				</>
			)
			addToast(txLink, { appearance: 'success', autoDismiss: true, onDismiss: () => { setMessage(null); setTxhash(null)} })
		} else if (message) {
			addToast(message, { appearance: "info", autoDismiss: true, onDismiss: () => setMessage(null) })
		} else if (error) {
			addToast(error, { appearance: "error", autoDismiss: true, onDismiss: () => setError(null)})
		}

	}, [message, error, txHash, addToast])

    async function swap() {
		setLoading(true)
		addToast("Performing swap... this may take a few minutes", { appearance: 'info' })
        console.log(`Account: ${account}, DSProxy: ${userProxy}, cdpId: ${selectedCdp}, option: ${option}`)
        try {
			let result = await performSwap(web3, account, selectedCdp, option)
			removeAllToasts()
            setTxhash(result ? result.transactionHash : null)
            setMessage(`${result && result.status ? "Successful" : "Unsuccessful"} collateral swap!`)
        } catch (e) {
			removeAllToasts()
            setError(`😱 Error occured! ${e.message}`)
        }
        setLoading(false)
    }

    if (!userProxy) {

        return (
			<Fill>
				<>
				<Bold>It doesn't look like you've set up your account / Vault on MakerDAO's official Oasis.app.</Bold>
				<Label>
					Complete the setup steps on{" "}
					<a href="https://oasis.app/borrow" target="_blank" rel="noopener noreferrer">
						Oasis borrow
					</a>{" "}
					by:
					<li>Creating a vault</li>
					<li>Unlocking DAI</li>
					<li>Generating a small amount of debt (i.e. borrow DAI)</li>
					<li>Then refresh this page</li>
				</Label>
				<br />
				</>
				<Footer>
					<ButtonLink target="__blank">Open Oasis</ButtonLink>
				</Footer>
			</Fill>
		)
    } else {
        return (
			<>
				<Dropdown
					placeholder="Select collateral to swap"
					options={MakerToMakerOptions}
					label="Swap"
					onSelect={setOption}
					value={MakerToMakerOptions[option]}
				/>
				<Dropdown placeholder="Select your vault" showKey={true} options={cdps} label="Vault" onSelect={setSelectedCdp} value={selectedCdp} />
				<Fees>
					<Row>
						<Bold>Fees</Bold>
						<Bold>Details</Bold>
					</Row>
					<Row>
						<Label>Gas Costs</Label>
						<Label>(TBC)</Label>
					</Row>
					<Row>
						<Label>
							<BlankButton onClick={(event) => {
								event.preventDefault()
								setShowServiceFees(true)
							}}>Service Fee</BlankButton>
						</Label>
						<Label>0.3%</Label>
					</Row>
				</Fees>
				<Footer>
					<Checkbox
						onChange={setChecked}
						node={
							<Label>
								I agree to the{" "}
								<BlankButton
									onClick={(event) => {
										event.preventDefault()
										setShowTandCs(true)
									}}
								>
									Terms and Conditions
								</BlankButton>
							</Label>
						}
					/>
					<Button onClick={() => swap()} disabled={loading || !selectedCdp || !option || !checked}>
						{loading ? "Waiting for confirmation" : "Perform Swap"}
					</Button>
				</Footer>
				{showTandCs && (
					<Layer onEsc={() => setShowTandCs(false)} onClickOutside={() => setShowTandCs(false)}>
						<TermsConditions closeAction={() => setShowTandCs(false)} />
					</Layer>
				)}
				{showServiceFees && (
					<Layer onEsc={() => setShowServiceFees(false)} onClickOutside={() => setShowServiceFees(false)}>
						<ServiceFees closeAction={() => setShowServiceFees(false)} />
					</Layer>
				)}
			</>
		)
    }
}

export default MakerSwapComponent
