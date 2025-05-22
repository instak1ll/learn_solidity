const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("EtherUnits", function () {
    let etherUnits;

    beforeEach(async function () {
        const EtherUnitsFactory = await ethers.getContractFactory("EtherUnits");
        etherUnits = await EtherUnitsFactory.deploy();
        await etherUnits.waitForDeployment();
    });

    it("Should correctly represent 1 wei", async function () {
        const oneWei = await etherUnits.oneWei();
        const isOneWei = await etherUnits.isOneWei();
        expect(oneWei).to.equal(1);
        expect(isOneWei).to.be.true;
    });

    it("Should correctly represent 1 gwei", async function () {
        const oneGwei = await etherUnits.oneGwei();
        const isOneGwei = await etherUnits.isOneGwei();
        expect(oneGwei).to.equal(ethers.parseUnits("1", "gwei")); // Or BigInt(1e9)
        expect(isOneGwei).to.be.true;
    });

    it("Should correctly represent 1 ether", async function () {
        const oneEther = await etherUnits.oneEther();
        const isOneEther = await etherUnits.isOneEther();
        expect(oneEther).to.equal(ethers.parseUnits("1", "ether")); // Or BigInt(1e18)
        expect(isOneEther).to.be.true;
    });
});