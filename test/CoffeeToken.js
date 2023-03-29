const { expect } = require("chai");
const { loadFixture } = require("ethereum-waffle");
const { ethers } = require("hardhat");

describe("CoffeeToken contract", () => {
  const deployCoffeeTokenFixture = async () => {
    const [owner, address1, address2] = await ethers.getSigners();

    const Token = await ethers.getContractFactory("CoffeeToken");

    const coffeeToken = await Token.deploy();
    await coffeeToken.deployed();

    return { Token, coffeeToken, owner, address1, address2 };
  };

  it("should assign the total supply of tokens to the owner when deployed", async () => {
    const { coffeeToken, owner } = await loadFixture(deployCoffeeTokenFixture);

    const ownerBalance = await coffeeToken.balanceOf(owner.address);
    expect(await coffeeToken.totalSupply()).to.equal(ownerBalance);
  });

  it("should transfer tokens between accounts", async () => {
    const { coffeeToken, owner, address1, address2 } = await loadFixture(
      deployCoffeeTokenFixture
    );

    await coffeeToken.transfer(address1.address, 50);
    expect(await coffeeToken.balanceOf(address1.address)).to.equal(50);

    await coffeeToken.connect(address1).transfer(address2.address, 50);
    expect(await coffeeToken.balanceOf(address2.address)).to.equal(50);
    expect(await coffeeToken.balanceOf(address1.address)).to.equal(0);
  });

  it("should fail if sender doesn't have enough tokens", async () => {
    const { coffeeToken, owner, address1 } = await loadFixture(
      deployCoffeeTokenFixture
    );
    const initialOwnerBalance = await coffeeToken.balanceOf(owner.address);

    await expect(
      coffeeToken.connect(address1).transfer(owner.address, 1)
    ).to.be.revertedWith("ERC20: transfer amount exceeds balance");

    expect(await coffeeToken.balanceOf(owner.address)).to.equal(
      initialOwnerBalance
    );
  });
});
