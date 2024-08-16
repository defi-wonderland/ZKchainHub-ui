# zkChainHub UI 🌐

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

## 🏃 Running the app

```bash
$ pnpm run start
```

## Aditional comments

The backend will typically run on `http://localhost:3000`. Make sure to update your .env file with the correct API base URL:

`NEXT_PUBLIC_API_BASE_URL=<your_api_base_url>`

## 💻 Conventional Commits

We follow the Conventional Commits [specification](https://www.conventionalcommits.org/en/v1.0.0/#specification).
