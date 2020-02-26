import React from "react"
import { Close } from "grommet-icons"
import { CloseButton, Description, Header, Label, Title } from "./Popup.styles"

const Popup = ({ closeAction, title, description, subdescription }) => {
    return (
		<>
			<Header>
				<Title>
					{title}
					<CloseButton onClick={() => closeAction()}>
						<Close />
					</CloseButton>
				</Title>
				{description && (
					<Description>
						{description}
						<br />
						<br />
					</Description>
				)}
				{subdescription && <Label>{subdescription}</Label>}
			</Header>
		</>
	)
}

export default Popup