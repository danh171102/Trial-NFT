// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
    const [deployerNFT] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployerNFT.address);

    const DaToken = await ethers.deployContract("DaToken");

    console.log("Token address:", await DaToken.getAddress());

}
// async function main() {
//   const DaToken = await ethers.getContractFactory("DaToken")
//
//   // Start deployment, returning a promise that resolves to a contract object
//   const daToken = await DaToken.deploy()
//   console.log("Contract deployed to address:", daToken.address)
// }

main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
