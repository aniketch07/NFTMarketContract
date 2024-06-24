
import "dotenv/config";
import { HardhatUserConfig } from "hardhat/config";
require("@nomicfoundation/hardhat-toolbox")

const SEPOLIA_KEY = process.env.SEPOLIA_KEY as string;
const PRIVATE_KEY = process.env.WALLET_KEY as string;

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${process.env.SEPOLIA_KEY}`,
      accounts: [PRIVATE_KEY],
    },
  },
};

export default config;