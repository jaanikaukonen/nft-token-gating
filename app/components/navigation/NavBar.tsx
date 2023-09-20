import React from "react"
import Link from "next/link"
import { navLinks } from "../../utils/navigation/data"
import styles from "./navbar.module.css"
import logo from "../../../public/blockchain.svg"

export default function NavBar() {
    return(
        <header className={styles.header}>
            <div>
            </div>
            <nav className={styles.nav}>
                <ul className={styles.navlinks}>
                    {navLinks.map((link, index) => (
                        <li className={styles.link} key={index}>
                            <Link href={link.path}>{link.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

