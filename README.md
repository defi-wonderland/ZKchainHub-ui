# ZKchainHub UI 🌐

## Description

The **ZKchainHub** proposes a decentralized, permissionless platform that provides custom analytics dashboards for ZK ecosystems, empowering chain operators to track and visualize key metrics like TVL, transaction counts, and block details. This allows users to easily explore each chain.

## 📋 Prerequisites

- Ensure you have `pnpm >= 9.0.0` installed.

## 💻 WebFlow

The flow of the application is as follows:

Home Page: The ecosystem page, where data is fetched from `metrics/ecosystem`. From here, you can navigate to all token's TVL data or directly to the Chain Page.

Chain Page: Accessible via search in the header or by selecting a row in the table. Information is fetched from `metrics/zkchain/:id`.

## 🚀 Installation

```bash
$ pnpm install
```

## ⚙️ Setting up env variables

- Create `.env` file in the `root` folder and copy paste `.env.example` content in there.
```
$ cp .env.example .env
```
- Set up `NEXT_PUBLIC_API_BASE_URL` with ZKchainHub Backend API url. It will typically run on `http://localhost:3000`
- (Optionally) 
    - Set `NEXT_PUBLIC_PROJECT_ID` with your [Wallet Connect](https://walletconnect.com/) ProjectID
    - Set `NEXT_PUBLIC_TESTNET_MODE ` with `true` to use testnet mode with testnet backend API URL set up in `NEXT_PUBLIC_API_BASE_URL`

## 🏃 Running the app

```bash
$ pnpm run start
```

To verify ZKchainHub UI is running open http://localhost:5173 in your browser

## Development

### 💻 Conventional Commits
We follow the Conventional Commits [specification](https://www.conventionalcommits.org/en/v1.0.0/#specification).

## Contributing

ZKchainHub was built with ❤️ by [Wonderland](https://defi.sucks).

Wonderland is a team of top Web3 researchers, developers, and operators who believe that the future needs to be open-source, permissionless, and decentralized.

[DeFi sucks](https://defi.sucks), but Wonderland is here to make it better.