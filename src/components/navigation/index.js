// Library Imports
import React from "react";
import Loader from "react-loader-spinner"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

// Relative Imports
import { Container, Button, Brand } from "./styles";
import logo from "../../assets/logo/logo.svg";

const Navigation = (props) => {
  let { web3Status, loadWeb3, loading } = props
  return (
		<Container>
			<Brand src={logo} />
			{web3Status < 0 ? (
				<Button disabled>No wallet detected</Button>
			) : web3Status === 0 ? (
				<Button onClick={async () => await loadWeb3()}>Connect Wallet</Button>
			) : (
				<Button disabled>
					{loading ? <Loader visible={loading} type="ThreeDots" color="rgba(255, 255, 255, 0.5)" width={40} height={10} /> : "Connected"}
				</Button>
			)}
		</Container>
  )
}

export default Navigation;
