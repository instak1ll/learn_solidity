const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Array", function () {
    let arrayContract;

    beforeEach(async function () {
        const ArrayFactory = await ethers.getContractFactory("Array");
        arrayContract = await ArrayFactory.deploy();
        await arrayContract.waitForDeployment();
    });

    describe("Initialization", function () {
        it("should initialize 'arr' as an empty array", async function () {
            const arrLength = await arrayContract.getLength();
            expect(arrLength).to.equal(0);
        });

        it("should initialize 'arr2' with [1, 2, 3]", async function () {
            const arr2 = await arrayContract.arr2(0);
            expect(arr2).to.equal(1);
            const arr2_2 = await arrayContract.arr2(1);
            expect(arr2_2).to.equal(2);
            const arr2_3 = await arrayContract.arr2(2);
            expect(arr2_3).to.equal(3);
        });

        it("should initialize 'myFixedSizeArr' with 10 zeros", async function () {
            for (let i = 0; i < 10; i++) {
                const element = await arrayContract.myFixedSizeArr(i);
                expect(element).to.equal(0);
            }
        });
    });

    describe("push", function () {
        it("should add an element to the end of the array", async function () {
            await arrayContract.push(10);
            expect(await arrayContract.getLength()).to.equal(1);
            expect(await arrayContract.get(0)).to.equal(10);

            await arrayContract.push(20);
            expect(await arrayContract.getLength()).to.equal(2);
            expect(await arrayContract.get(1)).to.equal(20);
        });
    });

    describe("pop", function () {
        beforeEach(async function () {
            await arrayContract.push(10);
            await arrayContract.push(20);
            await arrayContract.push(30);
        });

        it("should remove the last element from the array", async function () {
            expect(await arrayContract.getLength()).to.equal(3);
            expect(await arrayContract.get(2)).to.equal(30);

            await arrayContract.pop();
            expect(await arrayContract.getLength()).to.equal(2);

            await arrayContract.pop();
            expect(await arrayContract.getLength()).to.equal(1);
            expect(await arrayContract.get(0)).to.equal(10);
        });

        it("should revert when popping from an empty array", async function () {
            await arrayContract.pop();
            await arrayContract.pop();
            await arrayContract.pop();

            await expect(arrayContract.pop()).to.be.reverted;
        });
    });

    describe("get and getArr", function () {
        beforeEach(async function () {
            await arrayContract.push(100);
            await arrayContract.push(200);
            await arrayContract.push(300);
        });

        it("should return the element at the specified index", async function () {
            expect(await arrayContract.get(0)).to.equal(100);
            expect(await arrayContract.get(1)).to.equal(200);
            expect(await arrayContract.get(2)).to.equal(300);
        });

        it("should revert when accessing an out-of-bounds index", async function () {
            await expect(arrayContract.get(3)).to.be.reverted;
        });

        it("should return the entire array", async function () {
            const returnedArr = await arrayContract.getArr();
            expect(returnedArr.map(x => Number(x))).to.deep.equal([100, 200, 300]);
        });
    });

    describe("remove", function () {
        beforeEach(async function () {
            await arrayContract.push(1);
            await arrayContract.push(2);
            await arrayContract.push(3);
        });

        it("should set the element at the specified index to its default value (0)", async function () {
            expect(await arrayContract.get(1)).to.equal(2);
            expect(await arrayContract.getLength()).to.equal(3);

            await arrayContract.remove(1);
            expect(await arrayContract.getLength()).to.equal(3);
            expect(await arrayContract.get(1)).to.equal(0);
        });

        it("should not change array length when an element is removed", async function () {
            const initialLength = await arrayContract.getLength();
            await arrayContract.remove(0);
            expect(await arrayContract.getLength()).to.equal(initialLength);
        });

        it("should revert when trying to remove an out-of-bounds index", async function () {
            await expect(arrayContract.remove(5)).to.be.reverted;
        });
    });

    describe("examples", function () {
        it("should execute without reverting", async function () {
            await expect(arrayContract.examples()).to.not.be.reverted;
        });
    });
});