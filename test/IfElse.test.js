const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("IfElse", function () {
    let ifElseContract;

    beforeEach(async function () {
        const IfElseFactory = await ethers.getContractFactory("IfElse");
        ifElseContract = await IfElseFactory.deploy();
        await ifElseContract.waitForDeployment();
    });

    describe("foo function", function () {
        it("Should return 0 when x is less than 10", async function () {
            expect(await ifElseContract.foo(5)).to.equal(0);
            expect(await ifElseContract.foo(0)).to.equal(0);
            expect(await ifElseContract.foo(9)).to.equal(0);
        });

        it("Should return 1 when x is between 10 and 19 (inclusive)", async function () {
            expect(await ifElseContract.foo(10)).to.equal(1);
            expect(await ifElseContract.foo(15)).to.equal(1);
            expect(await ifElseContract.foo(19)).to.equal(1);
        });

        it("Should return 2 when x is 20 or greater", async function () {
            expect(await ifElseContract.foo(20)).to.equal(2);
            expect(await ifElseContract.foo(25)).to.equal(2);
            expect(await ifElseContract.foo(100)).to.equal(2);
        });
    });

    describe("ternary function", function () {
        it("Should return 0 when _x is less than 10", async function () {
            expect(await ifElseContract.ternary(5)).to.equal(0);
            expect(await ifElseContract.ternary(0)).to.equal(0);
            expect(await ifElseContract.ternary(9)).to.equal(0);
        });

        it("Should return 1 when _x is between 10 and 19 (inclusive)", async function () {
            expect(await ifElseContract.ternary(10)).to.equal(1);
            expect(await ifElseContract.ternary(15)).to.equal(1);
            expect(await ifElseContract.ternary(19)).to.equal(1);
        });

        it("Should return 2 when _x is 20 or greater", async function () {
            expect(await ifElseContract.ternary(20)).to.equal(2);
            expect(await ifElseContract.ternary(25)).to.equal(2);
            expect(await ifElseContract.ternary(100)).to.equal(2);
        });
    });
});