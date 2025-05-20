const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Counter", function () {
  let Counter;
  let counter;

  beforeEach(async function () {
    Counter = await ethers.getContractFactory("Counter");
    counter = await Counter.deploy();
    await counter.waitForDeployment();
  });

  describe("Deployment", function () {
    it("Should set the initial count to 0", async function () {
      expect(await counter.get()).to.equal(0);
    });
  });

  describe("Incrementing", function () {
    it("Should increment the count by 1", async function () {
      const initialCount = await counter.get();
      const tx = await counter.inc();
      await tx.wait();
      expect(await counter.get()).to.equal(initialCount + BigInt(1));
    });
  });

  describe("Decrementing", function () {
    it("Should decrement the count by 1", async function () {
      const incTx = await counter.inc();
      await incTx.wait();
      const countAfterInc = await counter.get();
      const decTx = await counter.dec();
      await decTx.wait();
      expect(await counter.get()).to.equal(countAfterInc - BigInt(1));
    });

    it("Should revert if decrementing from zero", async function () {
      await expect(counter.dec()).to.be.reverted;
    });
  });

  describe("Get function", function () {
    it("Should return the current count", async function () {
      const expectedCount = BigInt(5);
      await counter.inc();
      await counter.inc();
      await counter.inc();
      await counter.inc();
      const lastIncTx = await counter.inc();
      await lastIncTx.wait();
      expect(await counter.get()).to.equal(expectedCount);
    });
  });
});