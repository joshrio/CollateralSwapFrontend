import React, { useEffect, useState } from "react";

import { isWeb3Enabled, setupWeb3 } from "./controllers/Web3";
import Navigation from "./components/navigation";
import Modal from "./components/modal";

import { Container, OvalFirst, OvalSecond } from "./App.styles.js";

const App = () => {
  let [web3, setWeb3] = useState(null);
  let [account, setAccount] = useState(null);
  let [initalised, setInitalised] = useState(0);
  let [loading, setLoading] = useState(false);

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

  return (
    <>
      <Navigation
        web3Status={!window.ethereum ? -1 : web3 === null ? 0 : 1}
        loadWeb3={loadWeb3}
        loading={loading}
      />
      <Container>
        <OvalFirst />
        <Modal
          account={account}
          loadWeb3={loadWeb3}
          loading={loading}
          setLoading={setLoading}
          web3={web3}
          web3Status={!window.ethereum ? -1 : web3 === null ? 0 : 1}
        />
        <OvalSecond />
      </Container>
    </>
  );
};

export default App;
