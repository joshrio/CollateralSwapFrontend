import styled from "styled-components";

export const Button = styled.button`
	background: rgba(0, 0, 0, 0);
	font-family: dinRegular;
	font-size: 16px;
	padding-top: -2px;
	transition: 1s;
	outline: none;
	border: none;

	&:hover {
		cursor: pointer;
	}
  
	&:disabled {
		color: rgba(255, 255, 255, 0.5);
		cursor: not-allowed;
	}
`
export const CloseButton = styled.button`
	background: rgba(0, 0, 0, 0);
	font-family: dinRegular;
	font-size: 16px;
	padding-top: -2px;
	padding-right: -2px;
	float: right;
	transition: 1s;
	outline: none;
	border: none;

	&:hover {
		cursor: pointer;
	}
`

export const Description = styled.div`
	font-family: dinRegular;
	font-size: 18px;
	color: #544f4f;
	letter-spacing: 0;
	line-height: 27px;
`

export const Header = styled.div`
	height: auto;
	padding: 20px;
	border-bottom: 1px solid #dcdcdc;
`

export const Label = styled.div`
	font-family: dinRegular;
	font-size: 16px;
	color: #2a2a2a;
	letter-spacing: 0;
	line-height: 24px;
`

export const Title = styled.div`
	font-family: dinBold;
	font-size: 28px;
	color: #2a2a2a;
	letter-spacing: 0;
	line-height: 42px;
`