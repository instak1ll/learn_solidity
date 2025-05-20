const { expect } = require("chai"); 
const { ethers } = require("hardhat"); 

describe("HelloWorld", function () {
  let HelloWorldContract;
  let helloWorldInstance;

  beforeEach(async function () {
    HelloWorldContract = await ethers.getContractFactory("HelloWorld");
    helloWorldInstance = await HelloWorldContract.deploy();
    await helloWorldInstance.waitForDeployment();
  });

  it("Should return the correct greeting", async function () {
    const greeting = await helloWorldInstance.greet();
    expect(greeting).to.equal("Hello World!");
  });
});