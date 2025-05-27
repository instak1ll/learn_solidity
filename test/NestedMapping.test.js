const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("NestedMapping", function () {
    let nestedMapping;
    let owner, addr1;

    beforeEach(async function () {
        [owner, addr1] = await ethers.getSigners();
        const NestedMapping = await ethers.getContractFactory("NestedMapping");
        nestedMapping = await NestedMapping.deploy();
    });

    it("Should return false for uninitialized address and key", async function () {
        expect(await nestedMapping.get(addr1.address, 1)).to.equal(false);
    });

    it("Should set and get true correctly", async function () {
        await nestedMapping.set(addr1.address, 1, true);
        expect(await nestedMapping.get(addr1.address, 1)).to.equal(true);
    });

    it("Should reset to false after removal", async function () {
        await nestedMapping.set(addr1.address, 1, true);
        await nestedMapping.remove(addr1.address, 1);
        expect(await nestedMapping.get(addr1.address, 1)).to.equal(false);
    });

    it("Should not affect other keys", async function () {
        await nestedMapping.set(addr1.address, 1, true);
        expect(await nestedMapping.get(addr1.address, 2)).to.equal(false);
    });

    it("Should overwrite existing value", async function () {
        await nestedMapping.set(addr1.address, 1, true);
        await nestedMapping.set(addr1.address, 1, false);
        expect(await nestedMapping.get(addr1.address, 1)).to.equal(false);
    });

    it("Should handle multiple addresses independently", async function () {
        await nestedMapping.set(owner.address, 5, true);
        expect(await nestedMapping.get(addr1.address, 5)).to.equal(false);
        expect(await nestedMapping.get(owner.address, 5)).to.equal(true);
    });
});