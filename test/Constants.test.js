const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Constants Contract", () => {
    let constants;

    before(async () => {
        const Constants = await ethers.getContractFactory("Constants");
        constants = await Constants.deploy();
    });

    it("Should return the correct MY_ADDRESS", async () => {
        const expectedAddress = "0x777788889999AaAAbBbbCcccddDdeeeEfFFfCcCc";
        expect(await constants.MY_ADDRESS()).to.equal(expectedAddress);
    });

    it("Should return the correct MY_UNIT value", async () => {
        expect(await constants.MY_UNIT()).to.equal(123);
    });
});