"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { navLinks } from "../../utils/navigation/data"
import blockchainIcon from "../../../public/blockchain.svg"
import styles from "./navbar.module.css"

export default function NavBar() {
    const pathname = usePathname()

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
                </ul>
            </nav>
        </header>
    )
}

