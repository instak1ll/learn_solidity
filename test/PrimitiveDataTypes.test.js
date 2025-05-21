const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Primitives", function () {
    let primitives;

    before(async () => {
        const Primitives = await ethers.getContractFactory("Primitives");
        primitives = await Primitives.deploy();
    });

    it("Should initialize 'boo' as true", async () => {
        expect(await primitives.boo()).to.equal(true);
    });

    it("uint should be an alias for uint256", async () => {
        const u = await primitives.u();
        const u256 = await primitives.u256();
        expect(u).to.equal(123);
        expect(u256).to.equal(456);
    });

    it("Should return correct min/max values for int256", async () => {
        const min = await primitives.minint();
        const max = await primitives.maxint();
        expect(min).to.equal(-(2n ** 255n)); // Minimum int256 value
        expect(max).to.equal(2n ** 255n - 1n); // Maximum int256 value
    });

    it("Default values should match expectations", async () => {
        expect(await primitives.defaultBoo()).to.equal(false);
        expect(await primitives.defaultUint()).to.equal(0);
        expect(await primitives.defaultInt()).to.equal(0);
        expect(await primitives.defaultAddr()).to.equal("0x0000000000000000000000000000000000000000");
    });
});