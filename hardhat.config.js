require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  etherscan: {
    apiKey: "AIJ26EFQBZ2WJYJVUFDNEJYSAC72FQ6EP5",
  },
  networks: {
    testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      gasPrice: 10000000000,
      accounts: [
        "08c5534775e3ce73a93899b17607a7bf2943e9ebbc372d3a7d9904f1ca38b57e",
      ],
      timeout:600000,

    },
  }
};
