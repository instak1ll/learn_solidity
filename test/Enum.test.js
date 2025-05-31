const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Enum Contract", function () {
    let enumContract;

    beforeEach(async function () {
        const EnumFactory = await ethers.getContractFactory("contracts/14_Enum.sol:Enum");
        enumContract = await EnumFactory.deploy();
        await enumContract.waitForDeployment();
    });

    it("should have an initial status of Pending (0)", async function () {
        const initialStatus = await enumContract.get();
        expect(initialStatus).to.equal(0);
    });

    it("should allow setting the status to Shipped (1)", async function () {
        await enumContract.set(1);
        const currentStatus = await enumContract.get();
        expect(currentStatus).to.equal(1);
    });

    it("should allow setting the status to Accepted (2)", async function () {
        await enumContract.set(2);
        const currentStatus = await enumContract.get();
        expect(currentStatus).to.equal(2);
    });

    it("should allow setting the status to Rejected (3)", async function () {
        await enumContract.set(3);
        const currentStatus = await enumContract.get();
        expect(currentStatus).to.equal(3);
    });

    it("should set the status to Canceled (4) when cancel() is called", async function () {
        await enumContract.set(1);
        let currentStatus = await enumContract.get();
        expect(currentStatus).to.equal(1);

        await enumContract.cancel();
        currentStatus = await enumContract.get();
        expect(currentStatus).to.equal(4);
    });

    it("should reset the status to Pending (0) when reset() is called", async function () {
        await enumContract.set(3);
        let currentStatus = await enumContract.get();
        expect(currentStatus).to.equal(3);

        await enumContract.reset();
        currentStatus = await enumContract.get();
        expect(currentStatus).to.equal(0);
    });

    it("should allow setting and retrieving status, implying successful enum import", async function () {
        await enumContract.set(1);
        const currentStatus = await enumContract.get();
        expect(currentStatus).to.equal(1);

        await enumContract.set(4);
        const newStatus = await enumContract.get();
        expect(newStatus).to.equal(4);
    });
});