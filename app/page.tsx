"use client"

import Image from "next/image"
import styles from "./page.module.css"
import metamaskIcon from "../public/metamask.svg"
import { useState } from "react"
import Link from "next/link"

export default function Home() {
    const [accounts, setAccounts] = useState([])
    const isConnected = Boolean(accounts[0])
  
    const connectWallet = () => {
        console.log("Trying to connect wallet")
    }

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
                        <button className={styles.button} onClick={connectWallet}>Mint</button>
                    </>
                ) : (
                    <>
                        <h1 className={styles.hint}>Click to connect your MetaMask Wallet</h1>
                        <button className={styles.button} onClick={mint}>Connect</button>
                    </>
                )}
            </div>
        </main>
    )
}
