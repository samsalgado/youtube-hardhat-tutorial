/** @type import('hardhat/config').HardhatUserConfig */
require("@nomicfoundation/hardhat-toolbox");
const ALCHEMY_KEY = "8oCQsnuKeezYenTRfJPT2eFchxPTu7IO";
const Goerli_private_key = "7ef15be65184ed5a15c82dd11aa5fdf5fe93b59e05d2c66c2d59186918a628eb";
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_KEY}`,
      accounts: [Goerli_private_key]
    }
  }
};
