### Simple NFT Token Gating web app as a part of my thesis on a subject "Marketing in Web3: Leveraging Non Fungible Tokens(NFT's)".

Users can connect their Metamask wallet and mint an NFT which then gives them access to the token gated (Login) part of the application. Each wallet can only own one NFT. This is by no mean a production ready application and you should always use a test network when deploying the smart contract.

![Screenshot 2023-10-29 at 17 10 53](https://github.com/jaanikaukonen/nft-token-gating/assets/72788869/8f4efc36-f807-4fc1-ba96-9f49b6705b1d)

### Installation
To successfully run this project you'll need an [Etherscan](https://etherscan.io/) account, a faucet such as [Alchemy](https://www.alchemy.com/), a [Metamask](https://www.alchemy.com/) wallet, and a [Metamask browser extension for chrome](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn).

#### Clone this repo
```
git clone https://github.com/jaanikaukonen/nft-token-gating
```

#### Install dependencies
```
npm install
```
#### Create `.env`

Create `.env` file and copy the content from `.env.example` to it. Replace the values with your faucet project API key, Etherscan API key and your Metamask wallet private key.

#### Deploy the smart contract.
DEPLOY THIS CONTRACT ONLY INTO A TEST NETWORK, DEPLOYING TO MAIN NETWORK WILL CAUSE REAL MONEY.

If you are using some other test network than goerli, update the `networks` in `hardhat.config.js`.

#### Clear the cache and delete all artifacts.
```
npx hardhat clean
```
#### Compile the entire project and build all artifacts
```
npx hardhar compile
```
#### Run the `deploy.ts` script
Replace goerli with whatever network you're using.
```
npx hardhat run scripts/deploy.mjs --network goerli
```

Navigate to `https://goerli.etherscan.io/address/<paste your contract address here>` to see you contract and its transactions.

#### Verify the smart contract
You should see the contract address in your console, if not, run the application with `npm run dev`, connect your wallet, mint an NFT and and you should see the transaction in your wallets history and should be able to find the contract address. You can also skip this step but then your contract will be visible only in bytecode.

```
npx hardhat verify --network <network you're using> <your contract address>
```

#### Run the application
```
npm run dev
```





