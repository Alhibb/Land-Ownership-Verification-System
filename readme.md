# Decentralized Land Ownership Verification System

A decentralized application for secure, transparent, and immutable land registration and ownership transfer using Ethereum blockchain and IPFS. This system aims to overcome the shortcomings of traditional land registry processes by leveraging blockchain's immutability and IPFS's decentralized storage for documents.

## Table of Contents

*   [Features](#features)
*   [Technologies Used](#technologies-used)
*   [Prerequisites](#prerequisites)
*   [Getting Started](#getting-started)
    *   [A. Clone the Repository](#a-clone-the-repository)
    *   [B. Pinata API Keys Setup](#b-pinata-api-keys-setup)
    *   [C. Smart Contract Deployment (using Remix IDE)](#c-smart-contract-deployment-using-remix-ide)
    *   [D. Frontend Setup](#d-frontend-setup)
    *   [E. Run the Application](#e-run-the-application)
    *   [F. Interact with the dApp](#f-interact-with-the-dapp)
*   [Project Structure](#project-structure)
*   [Troubleshooting Common Issues](#troubleshooting-common-issues)
*   [License](#license)
*   [Contact](#contact)

---

## Features

*   **Blockchain-Native User Identity:** Users interact with the dApp directly via their Web3 wallet (e.g., Metamask), ensuring secure identity and transaction signing without relying on centralized user management.
*   **Authorized Land Registration:** A designated "Registrar" (the owner of the deployed smart contract) is the only entity authorized to register new land parcels on-chain, bridging real-world authority with blockchain.
*   **Immutable Land Records:** Each land parcel is represented as an ERC-721 Non-Fungible Token (NFT) on the Ethereum blockchain, providing a unique, verifiable, and immutable record of ownership.
*   **Decentralized Document Storage:** Associated legal documents (deeds, maps, etc.) are stored securely and immutably on IPFS (InterPlanetary File System) via Pinata, with their content hashes (CIDs) stored on the blockchain.
*   **Secure Ownership Transfer:** Land ownership transfers are executed via direct peer-to-peer smart contract interactions, ensuring transparency and eliminating intermediaries.
*   **Transparent Audit Trail:** Every land registration and ownership transfer is an on-chain transaction, providing a publicly verifiable and tamper-proof history.
*   **Land Parcel Query & Verification:** Any user can query the smart contract to verify current ownership and retrieve associated IPFS documents.

## Technologies Used

*   **Ethereum:** The underlying blockchain for smart contracts and ownership records.
*   **Solidity:** Programming language for Ethereum smart contracts (ERC-721, Ownable standards).
*   **IPFS (via Pinata):** Decentralized file storage for land documents.
*   **Ethers.js:** JavaScript library for interacting with the Ethereum blockchain from the frontend.
*   **HTML, CSS, JavaScript:** For the responsive and interactive decentralized application (dApp) user interface.
*   **Node.js & npm:** For managing frontend dependencies and running a local development server.
*   **Ganache:** A personal Ethereum blockchain for local development and testing.
*   **Metamask:** A browser extension wallet for managing Ethereum accounts and signing transactions.
*   **Remix IDE:** Online IDE for developing, compiling, and deploying Solidity smart contracts.
*   **Lite-Server:** A lightweight development server for the frontend.

## Prerequisites

Before you begin, ensure you have the following installed and set up:

1.  **Node.js & npm:** Download and install from [https://nodejs.org/en/](https://nodejs.org/en/).
2.  **Ganache:** Download and install the desktop application from [https://www.trufflesuite.com/ganache](https://www.trufflesuite.com/ganache). This provides a personal Ethereum blockchain for development. Keep it running.
3.  **Metamask Chrome Extension:** Install from [https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en). Create an account and ensure you have some test Ether. You can import accounts from Ganache into Metamask by clicking "Import Account" and pasting a private key from Ganache.
4.  **Pinata Account & API Keys:**
    *   Create a free account on [https://app.pinata.cloud/pinmanager](https://app.pinata.cloud/pinmanager).
    *   Navigate to "API Keys" on the left sidebar.
    *   Click "New Key", give it a name, and ensure "Pinning" permissions are enabled.
    *   **IMPORTANT:** Copy your `Pinata API Key` and `Pinata Secret API Key` immediately. These will only be shown once.

## Getting Started

Follow these steps to set up and run the Decentralized Land Registry on your local machine.

### A. Clone the Repository

Open your terminal or command prompt and clone the repository:

```bash
git clone https://github.com/Alhibb/LandRegistry.git
cd LandRegistry
```

### B. Pinata API Keys Setup

You will need to update the frontend code with your Pinata API keys obtained from the [Prerequisites](#prerequisites) section.

1.  Open the file: `frontend/app.js`
2.  Locate the following lines and replace the placeholders with your actual keys:
    ```javascript
    const pinataApiKey = "YOUR_PINATA_API_KEY";
    const pinataSecretApiKey = "YOUR_PINATA_SECRET_API_KEY";
    ```

### C. Smart Contract Deployment (using Remix IDE)

We will use Remix IDE to compile and deploy the `LandRegistry` smart contract to your local Ganache network.

1.  **Open Remix IDE:** Go to [https://remix.ethereum.org/](https://remix.ethereum.org/).
2.  **Create `LandRegistry.sol`:**
    *   In the "File Explorers" tab (left sidebar), click the "Create new file" icon.
    *   Name the new file `LandRegistry.sol`.
    *   Copy the content of your `LandRegistry.sol` (from `contracts/LandRegistry.sol` in your cloned repo) and paste it into the new file in Remix.
3.  **Compile Contract:**
    *   Go to the "Solidity Compiler" tab (second icon down on the left).
    *   Set the `Compiler` version to `0.8.0` (or `0.8.x`).
    *   Ensure "Auto compile" is checked, or click "Compile LandRegistry.sol". You should see a green checkmark if successful.
4.  **Deploy Contract:**
    *   Go to the "Deploy & Run Transactions" tab (third icon down).
    *   In the "ENVIRONMENT" dropdown, select **"Injected Provider - Metamask"**.
        *   Your Metamask wallet should pop up asking you to connect to Remix. Allow the connection.
        *   **IMPORTANT:** In Metamask, ensure you are connected to your **Ganache** network (`http://127.0.0.1:7545` or "Localhost 7545"). If not, configure it as described in the [Prerequisites](#prerequisites).
    *   Under "CONTRACT", ensure `LandRegistry` is selected.
    *   Next to the "Deploy" button, you will see input fields for the constructor arguments `name` and `symbol`. Enter values (with quotes), e.g., `"LandToken"` and `"LND"`.
    *   Click the **"Deploy"** button.
    *   Metamask will pop up again to confirm the deployment transaction. Confirm it.
    *   Once deployed, the contract will appear under "Deployed Contracts" at the bottom.
    *   **CRUCIAL: Copy the deployed `LandRegistry` contract address.** You will need this for the frontend.

### D. Frontend Setup

1.  **Navigate to Frontend Directory:**
    ```bash
    cd frontend
    ```
2.  **Install Frontend Dependencies:**
    ```bash
    npm install
    ```
3.  **Configure `app.js` with Contract Address:**
    *   Open `frontend/app.js` again.
    *   Replace `"YOUR_DEPLOYED_CONTRACT_ADDRESS"` with the exact contract address you copied from Remix in the previous step (C.4).
4.  **Configure Lite-Server (`bs-config.json`):**
    *   Navigate back to the project's **root directory**:
        ```bash
        cd ..
        ```
    *   In this root directory (`LandRegistry/`), create a new file named `bs-config.json` and add the following content:
        ```json
        {
          "server": {
            "baseDir": "./frontend"
          },
          "files": [
            "./frontend/**/*.{html,htm,css,js}"
          ]
        }
        ```
        This tells `lite-server` to serve files from the `frontend` subfolder.

### E. Run the Application

1.  **Ensure you are in the project's root directory (`LandRegistry/`).**
2.  **Start the frontend server:**
    ```bash
    npm start
    ```
    `lite-server` will start and should automatically open your browser to `http://localhost:3000`.

### F. Interact with the dApp

1.  **Connect Metamask:**
    *   Go to `http://localhost:3000` in your browser.
    *   Click the "Connect Wallet" button.
    *   Metamask will prompt you to connect. Select the account(s) you wish to use.
    *   **IMPORTANT:** Ensure your Metamask wallet is set to the **Ganache network** (`Localhost 7545` or similar) where you deployed the contract.
2.  **Register Land (Registrar Role):**
    *   The Metamask account that **deployed the contract from Remix** is the `owner` (registrar) of the `LandRegistry` contract. Switch to this account in Metamask.
    *   Navigate to the "Register Land" section.
    *   Enter an "Initial Owner Address" (this can be another Ganache account address from your Metamask, or the same registrar address for testing).
    *   Click "Upload Land Document" and select a small PDF or image file (e.g., a dummy deed).
    *   Click "Register Land". Metamask will pop up for you to confirm the transaction.
    *   Wait for the transaction to confirm. A success message with the new Land ID and transaction hash will appear.
3.  **View Land Details:**
    *   Go to the "View Land" section.
    *   Enter a valid `Land ID` (e.g., `1` if it's your first registration).
    *   Click "View Land".
    *   The owner's address and a link to the IPFS document will be displayed. Clicking the link should open the document in a new tab via a Pinata IPFS gateway.
4.  **Transfer Land Ownership:**
    *   **IMPORTANT:** Ensure your Metamask wallet is connected to the *current owner's* account of the land you wish to transfer.
    *   Go to the "Transfer Land" section.
    *   Enter the `Land ID` to transfer.
    *   Enter the `New Owner Address` (another Ganache account address).
    *   Click "Transfer Land". Metamask will prompt you to confirm the `safeTransferFrom` transaction.
    *   After confirmation, you can go back to "View Land" and check the ownership change by entering the same Land ID.

---

## Project Structure

```
LandRegistry/
├── contracts/
│   └── LandRegistry.sol          # The core smart contract
├── frontend/
│   ├── index.html                # Main HTML file for the dApp
│   ├── style.css                 # CSS for styling the dApp
│   └── app.js                    # JavaScript logic for dApp interaction
├── node_modules/                 # Node.js dependencies (installed by npm)
├── package-lock.json             # npm lock file
├── package.json                  # Frontend project dependencies and scripts (including lite-server)
└── bs-config.json                # lite-server configuration for serving from `frontend/`
```

---

## Troubleshooting Common Issues

*   **`404 GET /index.html` or `404 GET /style.css` / `404 GET /app.js`:**
    *   Ensure your `bs-config.json` file is present in the **root directory** (`LandRegistry/`) and has the exact content provided in [Step D.4](#d-frontend-setup).
    *   Verify that `index.html`, `style.css`, and `app.js` are all located directly inside the `frontend/` folder.
    *   Make sure you are running `npm start` from the **root directory** (`LandRegistry/`).
    *   Clear your browser cache or try an incognito window.
*   **Metamask shows "Network: Ethereum Mainnet" or high gas fees:**
    *   This means Metamask is connected to the wrong network.
    *   **Solution:** In Metamask, click the network dropdown at the top and select your **Ganache network** (e.g., "Localhost 7545"). If not listed, add it manually (refer to [Prerequisites](#prerequisites)). Then refresh your browser.
*   **"You are not the owner of this land parcel" or "Caller is not the authorized registrar" error:**
    *   This indicates that the connected Metamask account is not the correct one to perform the action.
    *   **Solution:** Ensure your Metamask wallet is currently selected to the account that originally **deployed the `LandRegistry` contract from Remix** when trying to register land or transfer ownership of a specific parcel.

---

## License

This project is licensed under the MIT License - see the `LICENSE` file for details (you might want to add a `LICENSE` file to your repo if you haven't already).

---

## Contact

For any queries or feedback, feel free to reach out:

*   **GitHub:** [Alhibb](https://github.com/Alhibb)

---