import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/header';
import SectionGroup from './component/sectionGroup';
import Footer from './component/footer';

import { Mainnet, DAppProvider, useEtherBalance, useEthers, Config, Goerli } from '@usedapp/core'
import { formatEther } from '@ethersproject/units'
import { getDefaultProvider } from 'ethers'

const config: Config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: getDefaultProvider('mainnet'),
    [Goerli.chainId]: getDefaultProvider('goerli'),
  },
}

function App() {
  const { account, chainId } = useEthers()

  if (chainId && config.readOnlyUrls && !config.readOnlyUrls[chainId]) {
    return <p>Please use either Mainnet or Goerli testnet.</p>
  }
  
  return (
    <>
      <Header/>
      <SectionGroup/>
      <Footer/>
    </>
  );
}

export default App;
