const { ethers } = require('hardhat');

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  //console.log("Account balance:", (await deployer.getBalance()).toString());
  const lottery = await ethers.getContractFactory('NFTMarket');
  const Lottery = await lottery.deploy();
  // console.log("Deploying contracts with the account:", deployer.address);

  // await Lottery.deployed();

  console.log('Lottery Contract Deployed at ', Lottery.target);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
