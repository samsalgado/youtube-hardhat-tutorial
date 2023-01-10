const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contract with account:", deployer.address);
    console.log("Account balance: ", (await deployer.getBalance()).toString());
    const ChristmasToken = await ethers.getContractFactory("ChristmasToken");
    const token = await ChristmasToken.deploy();
    console.log("Token address:", token.address);
}
main()
    .catch((error)=> {
        console.error(error);
        process.exit(1);
    })