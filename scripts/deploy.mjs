import pkg from "hardhat"
const { ethers } = pkg

async function main() {
    const accessToken = await ethers.deployContract("AccessToken")

    await accessToken.waitForDeployment()

    console.log("AccessToken deployed to: ", accessToken.getAddress())
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})
