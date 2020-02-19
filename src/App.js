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
import ConfirmTransaction from "./components/states/confirm_transaction";
import SwappingCollateral from "./components/states/swapping_collateral";
import SwappedCollateral from "./components/states/swapped_collateral";

class App extends Component {
  state = {
    step: {
      count: 5,
      button: "Connect Wallet",
      status: "Enabled"
    }
  };

  handleState = () => {
    const { count } = this.state.step;
    switch (count) {
      case 1:
        return <ConnectWallet />;
      case 2:
        return <SwapForm />;
      case 3:
        return <ConfirmTransaction />;
      case 4:
        return <SwappingCollateral />;
      case 5:
        return <SwappedCollateral />;
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
