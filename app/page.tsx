"use client"

import Image from "next/image"
import styles from "./page.module.css"
import metamaskIcon from "../public/metamask.svg"
import { useState } from "react"
import Link from "next/link"
import { ethers } from "ethers"
import { useAccountContext } from "./context/account"
import accessToken from "./AccessToken.json"

const accessTokenAddress = "0x3Fa7E70f38e24F725eC977fFE3362c32d91E5D20"

export default function Home() {
    const { accounts, connectWallet, isConnected } = useAccountContext()
    const [userInfo, setUserInfo] = useState<string | null>(null)

    const mint = async () => {
        if (isConnected) {
            const provider = new ethers.BrowserProvider(window.ethereum)
            const signer = await provider.getSigner()
            const contract = new ethers.Contract(
                accessTokenAddress,
                accessToken.abi,
                signer
            )

            try {
                const response = await contract.mint()
                console.log("response: ", response)
                setUserInfo("Minting in process, it may take a while depending on the network traffic. Check details in your wallet or try to login")
            } catch (e) {
                console.log("error: ", e)
                setUserInfo("You have already claimed the NFT")
            }
        }        
    }

    return (
        <main className={styles.main}>
            <h1 className={styles.title}>Mint Your NFT, Unlock Exclusive Token-Gated Access</h1>
            <div className={styles.card}>
                <Image
                    priority
                    src={metamaskIcon}
                    alt="Metamask Icon" />

                
                {isConnected ? (
                    <>
                        {userInfo ? (
                            <>
                                <h1 className={styles.hint}>{userInfo}</h1>
                            </>
                        ) : (
                            <>
                                <h1 className={styles.hint}>MetaMask wallet connected! Click “Mint” to collect your NFT.</h1>
                                <button className={styles.button} onClick={mint}>Mint</button>
                            </>
                        )}
                    </>
                ) : (
                    <>
                        <h1 className={styles.hint}>Click to connect your MetaMask Wallet</h1>
                        <button className={styles.button} onClick={connectWallet}>Connect</button>
                    </>
                )}
            </div>
        </main>
    )
}
