const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SimpleStorage", function () {
    let simpleStorage;

    beforeEach(async function () {
        const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
        simpleStorage = await SimpleStorageFactory.deploy();
        await simpleStorage.waitForDeployment();
    });

    it("Should return the initial value of 0", async function () {
        const initialNum = await simpleStorage.get();
        expect(initialNum).to.equal(0);
    });

    it("Should set the new value correctly", async function () {
        const newValue = 123;
        const transactionResponse = await simpleStorage.set(newValue);
        await transactionResponse.wait();
        const updatedNum = await simpleStorage.get();
        expect(updatedNum).to.equal(newValue);
    });
});