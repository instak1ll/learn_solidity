const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Mapping", function () {
    let mappingContract;
    let owner, addr1;

    beforeEach(async function () {
        [owner, addr1] = await ethers.getSigners();
        const Mapping = await ethers.getContractFactory("Mapping");
        mappingContract = await Mapping.deploy();
    });

    it("Should return 0 for unset address", async function () {
        expect(await mappingContract.get(addr1.address)).to.equal(0);
    });

    it("Should set and get correct value", async function () {
        await mappingContract.set(addr1.address, 100);
        expect(await mappingContract.get(addr1.address)).to.equal(100);
    });

    it("Should reset value after removal", async function () {
        await mappingContract.set(addr1.address, 500);
        await mappingContract.remove(addr1.address);
        expect(await mappingContract.get(addr1.address)).to.equal(0);
    });

    it("Should overwrite existing value", async function () {
        await mappingContract.set(addr1.address, 200);
        await mappingContract.set(addr1.address, 400);
        expect(await mappingContract.get(addr1.address)).to.equal(400);
    });
});