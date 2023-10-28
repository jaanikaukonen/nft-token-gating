"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import styles from "./page.module.css"
import { useAccountContext } from "../context/account"
import { ethers } from "ethers"
import accessToken from "../AccessToken.json"
import ethereum from "../../public/ethereum.svg"

const accessTokenAddress = "0x4b740e957C1a0021c44f097Af12D2e12803ffF74"

export default function Login() {
    const { accounts, isConnected } = useAccountContext()
    const [hasAccess, setHasAccess] = useState(false)

    useEffect(() => {
        if (!isConnected) {
            return
        }

        const walletHasAccess = async () => {
            console.log(hasAccess)
            const provider = new ethers.BrowserProvider(window.ethereum)
            const signer = await provider.getSigner()
            const contract = new ethers.Contract(
                accessTokenAddress,
                accessToken.abi,
                signer
            )
    
            try {
                const response = await contract.hasAccess(signer)
                setHasAccess(response)
            } catch (e) {
                console.log("error: ", e)
            }
            console.log(hasAccess)
        }

        walletHasAccess()
    }, [accounts, hasAccess, isConnected])

    return (
        <main className={styles.main}>
            <div className={styles.card}>
                {hasAccess ? (
                    <div className={styles.container}>
                        <Image
                            priority
                            src={ethereum}
                            alt="Ethereum Logo" />
                        
                        <div className={styles.textContainer}>
                            <h2 className={styles.title}>Congratulations!</h2>
                            <p className={styles.message}>You are now the owner of an NFT created on Ethereum&apos;s Goerli testnet and have exclusive access to a token-gated Web3 app. Pretty cool, isn&apos;t it?<br></br><br></br>You can check out <a className={styles.link} href="https://goerli.etherscan.io/">https://goerli.etherscan.io/</a> to view NFT transactions and details about the smart contract you&apos;ve interacted with.</p>
                        </div>
                    </div>
                ) : (
                    <>
                        <p className={styles.noAccess}>Oops... Looks like you dont have access.</p>
                    </>
                )}
            </div>
        </main>
    )
}