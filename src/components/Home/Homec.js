
import { useWeb3React } from '@web3-react/core';
import { injected, walletconnect, resetWalletConnector, walletlink } from '../../utils/connectors';

import React from 'react';

const Homec = () => {
	 const web3reactContext = useWeb3React(); 
	//web3react
	
	//web3react metamask
	const connectMetamaskSimple = async () => {
		
			await web3reactContext.activate(injected);
		
	};

	//web3react walletconnect
	const connectWalletConnectSimple = async () => {
		try {
			resetWalletConnector(walletconnect);
			await web3reactContext.activate(walletconnect);
		} catch (ex) {
			console.log(ex);
		}
	};

	//web3react coinbase
	const connectCoinbaseSimple = async () => {
		try {
			await web3reactContext.activate(walletlink);
		} catch (ex) {
			console.log(ex);
		}
	};
	
	
  return (
    <>
   		
			<h2>Connect Wallet</h2>
			{web3reactContext.account ? <p>{web3reactContext.account}</p> : <p> Not address</p>}
			
			<div className="flx">
				
				<button
					className="btnflx"
					onClick={connectMetamaskSimple}
				>
					Metamask Connect 
				</button>
			
				<button
					className="btnflx"
					onClick={connectWalletConnectSimple}
				>
					Walletconnect
				</button>
		
				<button
					className="btnflx"
					onClick={connectCoinbaseSimple}
				>
					Coinbase Connect
				</button>
			

	</div>

    </>
	
  );
};
export default Homec;
