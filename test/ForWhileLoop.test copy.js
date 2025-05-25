const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Loop Contract", function () {
    let loopContract;

    beforeEach(async function () {
        const LoopFactory = await ethers.getContractFactory("Loop");
        loopContract = await LoopFactory.deploy();
        await loopContract.waitForDeployment();
    });

    describe("runLoops() function", function () {
        it("should execute the loops without reverting", async function () {
            await expect(loopContract.runLoops()).to.not.be.reverted;
        });
    });
});