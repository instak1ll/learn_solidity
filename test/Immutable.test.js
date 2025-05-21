const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Immutable Contract", () => {
    let immutableContract;
    let owner;

    before(async () => {
        [owner] = await ethers.getSigners();
        const Immutable = await ethers.getContractFactory("Immutable");
        immutableContract = await Immutable.deploy(123);
    });

    it("Should set myAddr to the deployer's address", async () => {
        expect(await immutableContract.myAddr()).to.equal(owner.address);
    });

    it("Should set myUint to the value provided in the constructor", async () => {
        expect(await immutableContract.myUint()).to.equal(123);
    });

});