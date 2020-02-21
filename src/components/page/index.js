// Library Imports
import React, { useEffect, useState } from "react";

import { isWeb3Enabled, setupWeb3 } from "../../controllers/Web3.js";
// import Web3Unavailable from "./components/Web3Unavailable";
// import Web3NotEnabled from "./components/Web3NotEnabled";
// import Web3Enabled from "./components/Web3Enabled";

// Relative Imports
import { Container, First, Second } from "./styles.js";
import Error from "../error/index.js";

const Page = ({ children }) => {
  let [setWeb3] = useState(null);
  let [setAccount] = useState(null);
  let [initalised, setInitalised] = useState(0);

  useEffect(
    () => {
      async function isEnabled() {
        return await isWeb3Enabled();
      }

      if (window.ethereum !== undefined) {
        isEnabled().then(enabled => {
          if (enabled === true) loadWeb3();
        });
      }
    },
    [initalised]
  );

  const loadWeb3 = async () => {
    try {
      let { web3, account } = await setupWeb3();
      setWeb3(web3);
      setAccount(account);
      setInitalised(1);
    } catch (e) {
      console.error(`Failed to load web3, accounts, or contract: ${e.message}`);
    }
  };
  const error = false;
  return (
    <Container>
      <First />
      {children}
      {error && (
        <Error message="It looks like you’re on Rinkeby Network. Please change to Mainnet to continue." />
      )}
      <Second />
    </Container>
  );
};

export default Page;
