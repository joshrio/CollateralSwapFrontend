import React, { useState } from "react"
import { CheckBox, Grommet } from "grommet"
import { deepMerge } from "grommet/utils"
import { grommet } from "grommet/themes"

import { PadV } from "./styles"

const customCheckBoxTheme = {
	checkBox: {
		border: {
			color: "#07849f"
		},
		color: "#07849f",
		hover: {
			border: {
				color: "#07849f"
			}
		}
	}
}

const Checkbox = ({ node, onChange }) => {
    let [checked, setChecked] = useState(false)
    const handleChange = (event) => {
        setChecked(event.target.checked)
        onChange(event.target.checked)
    }

    return (
		<PadV>
			<Grommet background={"none"} theme={deepMerge(grommet, customCheckBoxTheme)}>
				<CheckBox label={node} checked={checked} onChange={handleChange} />
			</Grommet>
		</PadV>
	)
}

export default Checkbox
