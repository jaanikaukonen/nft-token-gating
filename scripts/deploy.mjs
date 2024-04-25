import pkg from "hardhat"
const { ethers } = pkg

async function main() {
    const accessToken = await ethers.deployContract("AccessToken")

    await accessToken.waitForDeployment()

    const address = await accessToken.getAddress()

    console.log("AccessToken deployed to: ", address)
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})
