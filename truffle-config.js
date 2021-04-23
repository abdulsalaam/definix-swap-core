const HDWalletProvider = require('truffle-hdwallet-provider');
require('dotenv').config;

module.exports = {
  // Uncommenting the defaults below
  // provides for an easier quick-start with Ganache.
  // You can also follow this format for other networks;
  // see <http://truffleframework.com/docs/advanced/configuration>
  // for more details on how to specify configuration options!
  //
  compilers: {
    solc: {
      version: '0.6.12',
    },
  },
  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*',
    },
    test: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*',
    },
    bsc: {
      provider: () =>
        new HDWalletProvider(
          process.env.PRIVATE_KEY,
          'https://data-seed-prebsc-2-s1.binance.org:8545'
        ),
    },
  },
};
