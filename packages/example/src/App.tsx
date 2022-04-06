import React, {useEffect} from 'react';
import {Dashboard} from "./containers/Dashboard/Dashboard";
import {MetaMaskContextProvider} from "./context/metamask";
import {injectMetamaskPolkadotSnapProvider} from "@chainsafe/metamask-polkadot-adapter";

function App() {

    useEffect(() => {
        injectMetamaskPolkadotSnapProvider(
            "westend",
            undefined,
            "local:http://localhost:8081"
        );
    }, [])

  return (
      <MetaMaskContextProvider>
        <Dashboard/>
      </MetaMaskContextProvider>
  );
}

export default App;
