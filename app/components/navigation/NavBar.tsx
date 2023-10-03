"use client"

import React, { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { navLinks } from "../../utils/navigation/data"
import blockchainIcon from "../../../public/blockchain.svg"
import metamaskIcon from "../../../public/metamask.svg"
import { useAccountContext } from "../../context/account"
import styles from "./navbar.module.css"

export default function NavBar() {
    const pathname = usePathname()
    const { accounts, connectWallet, isConnected } = useAccountContext()

    const formattedAddress = () => {
        const address: string = accounts[0]

        const prefix = address.slice(0, 5)
        const suffix = address.slice(-4)

        return `${prefix}...${suffix}`
    }

    return(
        <header className={styles.header}>
            <div>
                <Image 
                    priority
                    src={blockchainIcon}
                    alt="Blockchain Icon"
                />
            </div>
            <nav className={styles.nav}>
                <ul className={styles.navlinks}>
                    {navLinks.map((link, index) => (
                        <li className={pathname === link.path ? `${styles.link} ${styles.active}` : styles.link} key={index}>
                            <Link className={pathname === link.path ? `${styles.linkText} ${styles.linkActive}` : styles.linkText} href={link.path}>{link.name}</Link>
                        </li>
                    ))}
                    <li className={styles.wallet}>
                        <Image
                            className={styles.walletIcon}
                            priority
                            src={metamaskIcon}
                            alt="Wallet Icon"
                        />
                        {isConnected ? (
                            <p className={styles.walletAddress}>{formattedAddress()}</p>
                        ) : (
                            <button className={styles.connectButton} onClick={connectWallet}>Connect</button>
                        )}
                    </li>
                </ul>
            </nav>
        </header>
    )
}

