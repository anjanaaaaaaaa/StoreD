require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
const { ALCHEMY_RPC_URL, YOUR_PRIV_KEY } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  paths: { artifacts: "./src/artifacts" },
  networks: {
    matic: {
      url: ALCHEMY_RPC_URL,
      accounts: [YOUR_PRIV_KEY],
    },
  },
};
