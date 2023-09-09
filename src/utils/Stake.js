import React, { useState, useEffect, useCallback} from "react";
import { useWeb3React } from '@web3-react/core';
import { getContract } from '../helpers/contract';


const StakeUs = (provider) => {
	const [balance,setBalance]= useState("")
	const {account,library} = useWeb3React();
	const {chainId} = useWeb3React();
	
	//connector, library, chainId, account, activate, deactivate
	const web3reactContext = useWeb3React(); 

	//useEffect balance
	useEffect(() => {
		library?.getBalance(account).then((result)=>{
		  setBalance(result/1e18)
		})
		},);

	let textInput = React.createRef();
	
	
	const [ranNum, setRunnum] = useState('RandomNum');
	
	const [amount, setAmount] = useState(0);

	const writeToContractUsingWeb3React = async () => {
		try {
			const randomNumber = Math.floor(Math.random() * 100000);
			const myContract = getContract(web3reactContext.library, web3reactContext.account);
			const overrides = {
				gasLimit: 230000
			};
			const response = await myContract.storeNum(randomNumber, overrides);
			console.log(response);
			alert('write ' + randomNumber);
			setRunnum(randomNumber);
		} catch (ex) {
			console.log(ex);
			alert(ex);
		}
	};
		
			 
		const handleSubmit = async (event) => {
			event.preventDefault();
			//let amount = event;
			try {
// const amount = web3reactContext.library.utils.toWei(amount.toString(), "ether");
				 if (amount >= 0.001) {
					//let	amount = web3reactContext.library.utils.toWei(amount.toString(), "ether");
					}
				const myContract = getContract(web3reactContext.library, web3reactContext.account);	
  				const tx = await myContract.methods.buyOnPresale().send({
					from: web3reactContext.account,
					value: amount,
				}).then((tx) => {
					console.log(tx);
				  })
				  .catch((error) => {
					console.error(error);
				  });
				console.log(tx);
		  } catch (error) {
				console.error(error);
				console.error(amount);
			  }
		  };

    return (
	       
           <> 
				<h2>USE PANEL  chainId: {{chainId} ? <p>Goerli</p> : <p>Connect Net</p>} </h2>	<br />	
					{web3reactContext.account ? <p>User account: {web3reactContext.account.substring(0, 6)}....{web3reactContext.account.substring(web3reactContext.account.length - 5)}</p> : <p>Not connected</p>}
				<h3>balance: {balance}</h3> 	
				        
				<div className="flex flex-col space-y-2 items-start pt-10  ">
								
					<button
						className="btnSt"
						onClick={writeToContractUsingWeb3React}  
						>
						press get number 
					</button>
					 
				</div>
					<p>{ranNum}</p>
			
			<section>
				<div>
					<form onSubmit={handleSubmit}>
						<label>
							Token:
							<input
							//ref = {textInput}
							className="btnSt"
							type="number"
							value={amount}
							onChange={(event) => setAmount(event.target.value)}
							/>
						</label>
							<button className="btnSt" type="submit">Buy</button>
					</form>
				</div>	
			</section>
					

	
      	&nbsp; &nbsp;

			</>
		   
        
		
    );
};

export default StakeUs;