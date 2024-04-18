# Avail Mass Airdrop Checker TS 

The `avail-mass-airdrop-checker-ts` is a TypeScript script designed to check mass eligibility of Ethereum (EVM) addresses for the Avail airdrop (AvailProject). This script utilizes Bun, a modern JavaScript runtime similar to Node.js, to efficiently handle the processing of multiple addresses. 💙

[Twitter](https://twitter.com/deltartificial). (@deltartificial)

## Prerequisites

Before using the script, make sure you have the following:
- Bun installed on your machine. You can install Bun by following the instructions [here](https://bun.sh/docs/installation).

Check Bun installation : 
(don't forget to refresh your path or close your terminal)
```bash
cd bun
```

## Installation

To get started with the Avail Mass Airdrop Checker, follow these steps:

Clone the repository:
```bash
git clone https://github.com/deltartificial/avail-mass-airdrop-checker-ts
```

Navigate to the cloned directory:
```bash
cd avail-mass-airdrop-checker-ts
```

Install the necessary dependencies using Bun:
```bash
bun install viem
```


## Configuration

Go to the `src` directory and open `pk.json`.
Replace with your private keys you want to test, formatted as follows:
```json
["0xprivatekey1", "0xprivatekey2"]
```

> ⚠️ Keep the '0x' before each privatekey.

## Usage

To run the script, use the following command:
```bash
bun run src/index.ts
```

## Security

**Important Security Notes :**
- **Private Key Handling :** The private keys are not stored or sent to the AvailProject API. They are used solely to sign the message for Avail, and only the signed message is sent.
- **Caution :** Always ensure that your private keys are handled securely. Do not expose them in publicly accessible locations.
