import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { WalletLinkConnector } from '@web3-react/walletlink-connector';

const RPC_URLS = {
	1: 'https://mainnet.infura.io/v3/739f0c6925d94994ac75d9247cdb9499',
	3:	"https://ropsten.infura.io/v3/739f0c6925d94994ac75d9247cdb9499",
	5:  'https://goerli.infura.io/v3/704b30946a89416690dba45196bfe8da',
	56: "https://rpc.ankr.com/bsc",
	97: "https://data-seed-prebsc-1-s1.binance.org:8545/",
	137: "https://polygon-rpc.com/",
};


//metamask
export const injected = new InjectedConnector({
	
	supportedChainIds: [ 1, 3, 4, 5, 56, 97, 137 ]
	
});


export const walletconnect = new WalletConnectConnector({
	rpc: {
		1: RPC_URLS[1],
		3: RPC_URLS[3],
		5: RPC_URLS[5],
		56: RPC_URLS[56],
		97: RPC_URLS[97],
		137: RPC_URLS[137]
	},
	qrcode: true,
	pollingInterval: 15000
});


export function resetWalletConnector(connector) {
	if (connector && connector instanceof WalletConnectConnector) {
		connector.walletConnectProvider = undefined;
	}
}

//coinbase
export const walletlink = new WalletLinkConnector({
	url: RPC_URLS[1],
	appName: 'demo-app',
	supportedChainIds: [1]
});