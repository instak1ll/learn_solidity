const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Gas", function () {
    let gasContract;

    beforeEach(async function () {
        const GasFactory = await ethers.getContractFactory("Gas");
        gasContract = await GasFactory.deploy();
        await gasContract.waitForDeployment();
    });

    it("Should fail when all gas is spent and revert state changes", async function () {
        const initialI = await gasContract.i();
        expect(initialI).to.equal(0);

        await expect(gasContract.forever({ gasLimit: 20_000_000 }))
            .to.be.reverted;

        const finalI = await gasContract.i();
        expect(finalI).to.equal(initialI);
    });
});