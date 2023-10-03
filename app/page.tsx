"use client"

import Image from "next/image"
import styles from "./page.module.css"
import metamaskIcon from "../public/metamask.svg"
import { useState } from "react"
import Link from "next/link"
import { ethers } from "ethers"
import { useAccountContext } from "./context/account"

export default function Home() {
    const { accounts, connectWallet, isConnected } = useAccountContext()

    const mint = () => {
        console.log("Minting...")
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
                        <h1 className={styles.hint}>MetaMask wallet connected! Click “Mint” to collect your NFT.</h1>
                        <button className={styles.button} onClick={mint}>Mint</button>
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
