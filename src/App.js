import React, { Component, useEffect, useState } from "react";

import { isWeb3Enabled, setupWeb3 } from "./controllers/Web3";

import Information from "./components/Information";

// New Design
import Page from "./components/page";
import Navigation from "./components/navigation";
import Modal from "./components/modal";
import Error from "./components/error";

// Modal States
import SwapCollateral from "./components/states/swap_collateral";
import ConnectWallet from "./components/states/connect_wallet";
import ConfirmTransaction from "./components/states/confirm_transaction";
import SwappingCollateral from "./components/states/swapping_collateral";
import SwappedCollateral from "./components/states/swapped_collateral";

class App extends Component {
  state = {
    count: 1,
    button: "Connect Wallet",
    connected: true,
    status: "Enabled"
  };

  handleState = () => {
    const { count } = this.state;
    switch (count) {
      case 1:
        return <ConnectWallet />;
      case 2:
        return <SwapCollateral />;
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

  handleButton = () => {
    const { count, connected } = this.state;
    switch (count) {
      case 1:
        return this.setState({
          count: 2,
          button: "Swap Collateral"
        });
      case 2:
        return this.setState({
          count: 3,
          button: "Confirm Transaction"
        });
      case 3:
        return this.setState({
          count: 4,
          button: "Transaction Confirming"
        });
      case 4:
        return this.setState({
          count: 5,
          button: "Swap Again"
        });
      case 5:
        return this.swapAgain();
        break;
      default:
    }
  };

  swapAgain = () => {
    const { connected } = this.state;
    if (connected) {
      this.setState({
        count: 2,
        button: "Swap Collateral"
      });
    } else if (!connected) {
      this.setState({
        count: 1,
        button: "Connect Wallet"
      });
    } else {
      return null;
    }
  };

  render() {
    const { button, status } = this.state;

    return (
      <>
        <Navigation />
        <Page>
          <Modal onClick={this.handleButton} button={button} status={status}>
            {this.handleState()}
          </Modal>
        </Page>
      </>
    );
  }
}

export default App;
