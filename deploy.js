const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'cross crush arrange confirm popular cruise noise bar harbor document apart tiger',
    'https://rinkeby.infura.io/v3/d7b220acfc864bdcb4dcfa196b2c5cb6'
);
const web3 = new Web3(provider);

const deploy = async () => {
    // get a list of all accounts
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account ', accounts[0]);

    // Use one of those accounts to deploy
    // the contract
    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ['Hi there!'] })
        .send({ from: accounts[0], gas: '1000000', gasPrice: '5000000000'});


    console.log('Contract deployed to: ', result.options.address);
};

deploy();

