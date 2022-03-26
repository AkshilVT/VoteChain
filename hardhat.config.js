require('@nomiclabs/hardhat-waffle');
require('dotenv').config();
// The next line is part of the sample project, you don't need it in your
// project. It imports a Hardhat task definition, that can be used for
// testing the frontend.
require('./tasks/faucet');

const PRIVATE_KEY = process.env.PRIVATE_KEY || '';
const rpcProvider = process.env.RPC_PROVIDER_ENDPOINT;

// If you are using MetaMask, be sure to change the chainId to 1337
module.exports = {
  solidity: '0.7.3',
  paths: {
    artifacts: './frontend/src/artifacts',
  },
  networks: {
    hardhat: {
      chainId: 31337,
    },
    ropsten: {
      url: rpcProvider,
      accounts: [PRIVATE_KEY],
    },
  },
};
