"use client"

import { createContext, useContext, useState } from "react"

interface ContextProps {
  accounts: string[],
  connectWallet: (() => Promise<void>) | undefined,
  isConnected: Boolean
}

const AccountData = createContext<ContextProps>({
    accounts: [],
    connectWallet: undefined,
    isConnected: false,
})

export const AccountContext = ({ children }: { children: React.ReactNode }) => {
    const [accounts, setAccounts] = useState<string[]>([])
    const isConnected = accounts.length !== 0

    const connectWallet = async () => {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            })
            setAccounts(accounts)
        }
    }
  
    return (
        <AccountData.Provider value={{ accounts, connectWallet, isConnected }}>
            {children}
        </AccountData.Provider>
    )
}

export const useAccountContext = () => useContext(AccountData)
