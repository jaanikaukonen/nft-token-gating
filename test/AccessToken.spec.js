const { ethers } = require("hardhat")
const { expect } = require("chai")

describe("AccessToken contract", () => {
    let token
    let owner
    let addr1
    let addr2

    beforeEach(async () => {
        const AccessToken = await ethers.getContractFactory("AccessToken")
        token = await AccessToken.deploy()
        await token.waitForDeployment();

        [owner, addr1, addr2] = await ethers.getSigners()
    })

    it("should allow a wallet to mint one NFT", async () => {
        await token.connect(owner).mint()
        expect(await token.balanceOf(owner.address)).to.equal(1)
    })

    it("should not allow a wallet to mint more than one NFT", async () => {
        await token.connect(owner).mint()
        try {
            await token.connect(owner).mint()
        } catch (error) {
            expect(error.message).to.contain("Wallet already owns an NFT")
        }
    })

    it("should allow a wallet to check ownership of an NFT", async () => {
        await token.connect(owner).mint()
        const hasAccess = await token.hasAccess(owner.address)
        expect(hasAccess).to.be.true
    })

    it("should not allow a wallet to check ownership of an NFT it does not own", async () => {
        const hasAccess = await token.hasAccess(addr1.address)
        expect(hasAccess).to.be.false
    })

    it("should allow a different wallet to mint one NFT", async () => {
        await token.connect(addr1).mint()
        expect(await token.balanceOf(addr1.address)).to.equal(1)
    })

    it("should allow a different wallet to check ownership of its NFT", async () => {
        await token.connect(addr1).mint()
        const hasAccess = await token.hasAccess(addr1.address)
        expect(hasAccess).to.be.true
    })

    it("should not allow a wallet to check ownership of another wallet's NFT", async () => {
        await token.connect(addr1).mint()
        const hasAccess = await token.hasAccess(owner.address)
        expect(hasAccess).to.be.false
    })
})
