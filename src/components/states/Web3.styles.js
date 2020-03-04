import styled from "styled-components"


export const Body = styled.div`
	min-height: 360px;
	padding: 20px;
	display: flex;
	flex-direction: column;
`
export const Button = styled.button`
	background: #07849f;
	border-radius: 4px;
	height: 52px;
	width: 100%;
	color: white;
	font-family: dinRegular;
	font-size: 18px;
	padding-top: 8px;
	padding-bottom: 8px;
	border: none;
	outline: none;
	transition: 1s;

	&:hover {
		cursor: pointer;
		transition: 1s;
		background: #0e6a7f;
	}

	&:disabled {
		color: rgba(255, 255, 255, 0.5);
		cursor: not-allowed;
	}
`
export const Description = styled.div`
	font-family: dinRegular;
	font-size: 16px;
	color: #2a2a2a;
	letter-spacing: 0;
	line-height: 24px;
	text-align: center;
`

export const Image = styled.img`
	height: auto;
	width: auto;
`

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	width: auto;
	justify-content: center;
`
export const Footer = styled.div`
	height: auto;
	padding: 0px 20px 20px 20px;
	width: auto;
`

export const Microcopy = styled.div`
	height: auto;
	display: flex;
	width: auto;
	flex-direction: column;
	padding-top: 20px;
`

export const Title = styled.div`
	font-family: dinBold;
	font-size: 20px;
	color: #2a2a2a;
	letter-spacing: 0;
	line-height: 24px;
	text-align: center;

`
