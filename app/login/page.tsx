"use client"

import { useEffect, useState } from "react"
import styles from "./page.module.css"
import { useAccountContext } from "../context/account"

export default function Login() {
    const { accounts, connectWallet, isConnected } = useAccountContext()

    return (
        <main className={styles.main}>
            <div className={styles.card}>
                <p className={styles.noAccess}>Oops... Looks like you dont have access.</p>
            </div>
        </main>
    )
}