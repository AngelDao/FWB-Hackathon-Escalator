import { CredentialsProvider } from "./context/credentialsContext";
import React, { useState, useEffect } from "react";
import Home from "./containers/Home";
import { getProvider } from "./helpers/connectWallet";
import { ethers } from "ethers";
import { getContracts } from "./helpers/connectContracts";
import { getAPI } from "./helpers/connectAPI";

function App() {
  const [account, setAccount] = useState({});
  const [contracts, setContracts] = useState({});
  const [etherscan, setEtherscan] = useState({});
  const [currentRange, setCurrentRange] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleManualConnect = async () => {
    setLoading(true);
    const signer = account.provider.getSigner();
    const address = await signer.getAddress();
    const connectedContracts = await getContracts(signer);
    const { etherscan } = await getAPI();
    setEtherscan(etherscan);
    setContracts({ ...connectedContracts });
    setAccount({ ...account, signer, address });
  };

  useEffect(() => {
    (async () => {
      if (!account.provider) {
        const provider = await getProvider();
        setAccount({ provider });
      }
    })();
  });

  const credentials = {
    account,
    handleManualConnect,
    currentRange,
    contracts,
    etherscan,
    loading,
    setLoading,
    setCurrentRange,
  };
  return (
    <CredentialsProvider value={credentials}>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <Home />
    </CredentialsProvider>
  );
}

export default App;
