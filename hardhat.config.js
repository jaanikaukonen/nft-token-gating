require("@nomicfoundation/hardhat-ethers")
require("@nomicfoundation/hardhat-toolbox")
require("@nomicfoundation/hardhat-chai-matchers")

const dotenv = require("dotenv")

dotenv.config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: "0.8.20",
    networks: {
        goerli: {
            url: process.env.REACT_APP_ALCHEMY_URL,
            accounts: [process.env.REACT_APP_PRIVATE_KEY]
        },
    },
    etherscan: {
        apiKey: process.env.REACT_APP_ETHERSCAN_API_KEY,
    }
}