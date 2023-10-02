"use client"

import Image from "next/image"
import styles from "./page.module.css"
import metamaskIcon from "../public/metamask.svg"

export default function Home() {
  
    const connectWallet = () => {
        console.log("Trying to connect wallet")
    }

    return (
        <main className={styles.main}>
            <h1 className={styles.title}>Mint Your NFT, Unlock Exclusive Token-Gated Access</h1>
            <div className={styles.card}>
                <Image
                    priority
                    src={metamaskIcon}
                    alt="Metamask Icon" />

                <button className={styles.connectButton} onClick={connectWallet}>Click to connect your MetaMask Wallet</button>
            </div>
        </main>
    )
}
