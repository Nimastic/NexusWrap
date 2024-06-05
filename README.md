# NexusWrap

NexusWrap is a cross-chain bridging platform aimed at enabling conditional wrapped-token transfers within an XRP-based interledger-connected ecosystem. This project addresses the interoperability challenge by introducing a system that seamlessly integrates dual transaction flows: Atomic Swaps and Wrapped Tokens. This dual-mode operation allows for direct peer-to-peer asset exchanges and broader market access through wrapped tokens.

## Features

- **Atomic Swaps**: Peer-to-peer trades between different cryptocurrencies without the need for an intermediary.
- **Wrapped Tokens**: Tokens pegged to the value of another cryptocurrency, used to represent the original asset on a different blockchain.
- **Support for Interledger Protocols**: Facilitates payments across different ledgers and networks.
- **XRP Ledger Integration**: Designed for fast, low-cost international payments with built-in support for issuing and managing tokens.
- **Conditional Token Wrapping**: Minimizes unnecessary wrapping by using smart contracts to handle conditions and logic for wrapping.

## Project Structure

```bash
NexusWrap/
|-- contracts/
| |-- AtomicSwap.sol
| |-- WrappedToken.sol
| |-- Migrations.sol
|-- migrations/
| |-- 1_initial_migration.js
| |-- 2_deploy_contracts.js
|-- test/
|-- truffle-config.js
|-- package.json
|-- README.md
```

## Getting Started

### Prerequisites

- Node.js (v20.13.1 or later)
- Truffle (v5.11.5 or later)
- Ganache CLI (v6.12.2 or later)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/NexusWrap.git
   cd NexusWrap
  ```

2. Install dependencies:
  ```bash
  npm install
  ```
Configuration
Ensure your truffle-config.js is set up correctly. The default configuration is:

```bash
module.exports = {
    networks: {
        development: {
            host: "127.0.0.1",
            port: 8545,
            network_id: "*", // Match any network id
        },
    },
    compilers: {
        solc: {
            version: "0.8.0", // Fetch exact version from solc-bin
        },
    },
};
```
Running the Project
Start Ganache CLI:
```bash
ganache-cli
ganache-cli -p 8546
truffle test

```




