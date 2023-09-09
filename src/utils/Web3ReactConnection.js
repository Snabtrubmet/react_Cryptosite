import React, {useState, useEffect}from "react";
import { useWeb3React } from '@web3-react/core';
import "../styles/main.css";



const Web3ReactConnection = () => {
	//connector, library, chainId, account, activate, deactivate
	const web3reactContext = useWeb3React(); 
	 const [balance,setBalance]= useState("")
	 const {account,library} = useWeb3React();
	 	 
	 
	 //useEffect balance
	  useEffect(() => {
    library?.getBalance(account).then((result)=>{
      setBalance(result/1e18)
    })
    },);
	
	
	const disconnectMetamaskSimple = () => {
		try {
			web3reactContext.deactivate();
		} catch (ex) {
			console.log(ex);
		}
	};
	

		

	return (
		<>
			<h2>&#9884; Connect Panel&#9884;</h2>	<br />	
				{web3reactContext.account ? <h2>Account: {web3reactContext.account}</h2> : <p>Not connected</p>}
				{web3reactContext.account ? <h2> Balance: {balance} ETH  </h2> : <p> </p>}
			<div className="flx">
            
				<button
						className="btn"
						onClick={disconnectMetamaskSimple}
					>
						Disconnect
				</button>
		  </div>
		</>
	);
};
export default Web3ReactConnection;
