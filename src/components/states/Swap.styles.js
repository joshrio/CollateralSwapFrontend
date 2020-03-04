import styled from "styled-components"

export const Body = styled.div`
	padding: 20px;
	display: flex;
	height: 100%;

`

export const Fill = styled.div`
  height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;


export const Bold = styled.div`
	font-family: dinBold;
	font-size: 16px;
	color: #2a2a2a;
	letter-spacing: 0;
	line-height: 24px;
`

export const ButtonLink = styled.a`
	background: #07849f;
	border-radius: 4px;
	height: 52px;
	color: white;
	width: 100%;
	font-family: dinRegular;
	font-size: 18px;
	padding-top: 8px;
	border: none;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 2px;
	text-decoration: none;

	&:hover {
		cursor: pointer;
	}

	&:disabled {
		color: rgba(255, 255, 255, 0.5);
		cursor: not-allowed;
	}
`

export const BlankButton = styled.button`
	border: none;
	font-family: inherit;
	font-size: inherit;
	color: #07849f;
	padding: 0px 0px;
	background: none;


	&:hover {
		cursor: pointer;
	}

	&:disabled {
		color: rgba(255, 255, 255, 0.5);
		cursor: not-allowed;
	}
`

export const Button = styled.button`
	background: #07849f;
	border-radius: 4px;
	height: 52px;
	color: white;
	width: 100%;
	font-family: dinRegular;
	font-size: 18px;
	padding-top: 8px;
	border: none;

	&:hover {
		cursor: pointer;
	}

	&:disabled {
		color: rgba(255, 255, 255, 0.5);
		cursor: not-allowed;
	}
`
export const Fees = styled.div`
	height: auto;
	display: flex;
	flex-direction: column;
	width: 100%;
`

export const Footer = styled.div`
	height: auto;
	padding: 20px 0px 0px 0px;
	width: auto;
`

export const Form = styled.form`
	height: auto;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
`

export const Image = styled.img`
	height: auto;
	width: auto;
`

export const Label = styled.div`
	font-family: dinRegular;
	font-size: 16px;
	color: #2a2a2a;
	letter-spacing: 0;
	line-height: 24px;

	&:visited {
		text-decoration: none;
	}
`

export const Row = styled.div`
	display: flex;
	justify-content: space-between;
`
