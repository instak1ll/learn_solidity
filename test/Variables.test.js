const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Variables Contract", () => {
    let variables;
    let owner;

    before(async () => {
        [owner] = await ethers.getSigners();
        const Variables = await ethers.getContractFactory("Variables");
        variables = await Variables.deploy();
    });

    it("Should initialize state variables correctly", async () => {
        expect(await variables.text()).to.equal("Hello");
        expect(await variables.num()).to.equal(123);
    });

    it("Should execute doSomething() without errors", async () => {
        await expect(variables.connect(owner).doSomething()).not.to.be.reverted;
    });

    it("Local variables should not persist", async () => {
        await variables.doSomething();

        expect(await variables.num()).to.equal(123);
    });
});