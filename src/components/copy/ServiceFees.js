import React from "react"
import Popup from "../popup"

const ServiceFees = ({ closeAction }) => {
	let title = "Fees"
	let subdescription = (
		<>
			<li>
				If the transaction is successful, a small fee is paid based on the amount of collateral swapped. This fee is for usage of the service
				and covers the flash loan protocol fees as well.
			</li>
			<li>
				Example fee: Your vault currently has 100 DAI debt, therefore the fee is ~0.525 DAI. Your new vault after the Collateral Swap will
				have an outstanding debt of 100.525 DAI debt.
			</li>
		</>
	)

	return Popup({ closeAction, title, subdescription })
}

export default ServiceFees
