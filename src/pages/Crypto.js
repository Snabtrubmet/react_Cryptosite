import { useWeb3React } from '@web3-react/core';
import React, {useState, useEffect} from 'react';
import StakeUs from '../utils/Stake';
import Homec from "../components/Home/Homec";
import Web3ReactConnection from '../utils/Web3ReactConnection';


const Crypto = () => {

    const web3reactContext = useWeb3React();
//connector, library, chainId, account, activate, deactivate
 
const [balance,setBalance]= useState("")
const {account,library} = useWeb3React();
     

//useEffect balance
 useEffect(() => {
library?.getBalance(account).then((result)=>{
 setBalance(result/1e18)
})
},);

    return (
		<main className="section">
            		
			<div className="container">
			
            
                <p>
		                {web3reactContext.account ? <Web3ReactConnection /> : <Homec/>}
                </p> 
                
				<h1 className="title-1">CRYPTO</h1>
               
				<ul className="content-list">
					<li className="content-list__item">
					
						<h2 className="title-2">ONLY GOERLY</h2>
						<p>{web3reactContext.account ? <h2>Account:{web3reactContext.account.substring(0, 6)}....{web3reactContext.account.substring(web3reactContext.account.length - 5)}</h2> : <p>Not connected</p>}
				{web3reactContext.account ? <h2> Balance: {balance} ETH  </h2> : <p> </p>}</p>
					</li>
				</ul>
				{web3reactContext.account ? <StakeUs/> : <p>Not connected</p>}
			</div>
		</main>
	);
}

export default Crypto;
