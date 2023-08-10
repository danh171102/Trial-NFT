const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("My Contract", function() {
    it("Should deploy the contract", async function() {
        const MyContract = await ethers.getContractFactory("MyContract");
        const myContract = await MyContract.deploy();
        await myContract.deployed();
        expect(await myContract.owner()).to.equal(owner.address);
    });
});