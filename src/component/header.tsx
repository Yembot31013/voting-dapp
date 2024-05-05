import React from 'react';
import '../App.css';

import { Mainnet, DAppProvider, useEtherBalance, useEthers, Config, Goerli } from '@usedapp/core'
import { formatEther } from '@ethersproject/units'
import { getDefaultProvider } from 'ethers'

function Header() {
  
  const ConnectButton = () => {
    const { account, deactivate, activateBrowserWallet } = useEthers()
    // 'account' being undefined means that we are not connected.
    if (account) return <button className="wallect-connect-btn" onClick={() => deactivate()}>Disconnect Wallet</button>
    else return <button className="wallect-connect-btn" onClick={() => activateBrowserWallet()}>Connect Wallet</button>
  }

  const { account, chainId } = useEthers()
  const etherBalance = useEtherBalance(account)
  
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo-contain">
          <img src="../logo.jpeg" alt="" className="logo-img"/>
        </div>
        <div className="wallet-group">
          {etherBalance &&
            <p className="wallet-detail">{account}</p>}
          <ConnectButton />
        </div>
      </nav>
    </header>
  );
}

export default Header;