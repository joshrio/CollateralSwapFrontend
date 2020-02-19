import React, { Component, useEffect, useState } from "react";

import { isWeb3Enabled, setupWeb3 } from "./controllers/Web3";

import Information from "./components/Information";

// New Design
import Page from "./components/page";
import Navigation from "./components/navigation";
import Modal from "./components/modal";

// Modal States
import SwapForm from "./components/states/swap_form";
import ConnectWallet from "./components/states/connect_wallet";

class App extends Component {
  state = {
    step: {
      count: 1,
      button: "Connect Wallet",
      status: "Enabled"
    }
  };

  handleState = () => {
    switch (this.state.step.count) {
      case 1:
        return <ConnectWallet />;
      case 2:
        return <SwapForm />;
        break;
      default:
    }
  };
  render() {
    return (
      <>
        <Navigation />
        <Page>
          <Modal button="Swap Collateral">{this.handleState()}</Modal>
        </Page>
      </>
    );
  }
}

export default App;
