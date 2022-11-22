require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-chai-matchers");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/NoHh5BO0DBCGk7_efn4QbAbNCnuTanS5",
      accounts: ['b8aaf8d931bc124e3c3c6cf6e71a8dc038139c2a319183f6d7ce305515da1662'],
    },
  },
};
