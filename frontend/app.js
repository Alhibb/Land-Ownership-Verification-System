const contractAddress = "0xd9145CCE52D386f254917e481eB44e9943F39138"; 
const contractABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "symbol",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "ERC721IncorrectOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ERC721InsufficientApproval",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "approver",
				"type": "address"
			}
		],
		"name": "ERC721InvalidApprover",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "ERC721InvalidOperator",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "ERC721InvalidOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "receiver",
				"type": "address"
			}
		],
		"name": "ERC721InvalidReceiver",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			}
		],
		"name": "ERC721InvalidSender",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ERC721NonexistentToken",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "OwnableInvalidOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "OwnableUnauthorizedAccount",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "landId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "initialOwner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "ipfsHash",
				"type": "string"
			}
		],
		"name": "LandRegistered",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_landId",
				"type": "uint256"
			}
		],
		"name": "getLandDocuments",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "landIpfsDocuments",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "nextLandId",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_initialOwner",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_ipfsDocHash",
				"type": "string"
			}
		],
		"name": "registerLandParcel",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_newRegistrar",
				"type": "address"
			}
		],
		"name": "setRegistrar",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

const pinataApiKey = "ef69a5b52cfac11c9403"; 
const pinataSecretApiKey = "d2915e6ca5578b15f7ecdb48e63383f0dd59a0627e3a75ed16846f8802b4a876"; 

let provider;
let signer;
let contract;
let currentAccount = null;

const connectWalletBtn = document.getElementById("connectWalletBtn");
const accountAddressSpan = document.getElementById("accountAddress");
const networkNameSpan = document.getElementById("networkName");

const registerLandSection = document.getElementById("registerLandSection");
const regOwnerAddressInput = document.getElementById("regOwnerAddress");
const landDocumentInput = document.getElementById("landDocument");
const registerLandBtn = document.getElementById("registerLandBtn");
const registerStatusDiv = document.getElementById("registerStatus");

const viewLandSection = document.getElementById("viewLandSection");
const viewLandIdInput = document.getElementById("viewLandId");
const viewLandBtn = document.getElementById("viewLandBtn");
const viewStatusDiv = document.getElementById("viewStatus");
const landOwnerSpan = document.getElementById("landOwner");
const landDocLink = document.getElementById("landDocLink");

const transferLandSection = document.getElementById("transferLandSection");
const transferLandIdInput = document.getElementById("transferLandId");
const newOwnerAddressInput = document.getElementById("newOwnerAddress");
const transferLandBtn = document.getElementById("transferLandBtn");
const transferStatusDiv = document.getElementById("transferStatus");

async function connectWallet() {
    if (window.ethereum) {
        try {
            provider = new ethers.providers.Web3Provider(window.ethereum);
            await provider.send("eth_requestAccounts", []);
            signer = provider.getSigner();
            currentAccount = await signer.getAddress();
            contract = new ethers.Contract(contractAddress, contractABI, signer);

            accountAddressSpan.textContent = `Connected: ${currentAccount.substring(0, 6)}...${currentAccount.substring(38)}`;
            const network = await provider.getNetwork();
            networkNameSpan.textContent = `Network: ${network.name} (ID: ${network.chainId})`;
            connectWalletBtn.textContent = "Wallet Connected";
            connectWalletBtn.disabled = true;

            window.ethereum.on("accountsChanged", handleAccountsChanged);
            window.ethereum.on("chainChanged", handleChainChanged);
        } catch (error) {
            console.error("Error connecting to wallet:", error);
            alert("Failed to connect wallet. Please ensure Metamask is installed and unlocked.");
        }
    } else {
        alert("Metamask is not detected. Please install Metamask to use this dApp.");
    }
}

function handleAccountsChanged(accounts) {
    if (accounts.length === 0) {
        currentAccount = null;
        accountAddressSpan.textContent = "Not Connected";
        connectWalletBtn.textContent = "Connect Wallet";
        connectWalletBtn.disabled = false;
        console.log("Disconnected from Metamask.");
    } else if (accounts[0] !== currentAccount) {
        currentAccount = accounts[0];
        signer = provider.getSigner();
        contract = new ethers.Contract(contractAddress, contractABI, signer);
        accountAddressSpan.textContent = `Connected: ${currentAccount.substring(0, 6)}...${currentAccount.substring(38)}`;
        console.log(`Account changed to: ${currentAccount}`);
    }
}

function handleChainChanged(chainId) {
    window.location.reload();
}

async function uploadFileToPinata(file) {
    try {
        const formData = new FormData();
        formData.append("file", file);

        const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
            maxBodyLength: "Infinity",
            headers: {
                "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
                pinata_api_key: pinataApiKey,
                pinata_secret_api_key: pinataSecretApiKey,
            },
        });
        return res.data.IpfsHash;
    } catch (error) {
        console.error("Error uploading file to Pinata:", error);
        throw new Error("Failed to upload document to IPFS.");
    }
}

async function registerLand() {
    if (!contract || !currentAccount) {
        alert("Please connect your wallet first.");
        return;
    }

    const initialOwner = regOwnerAddressInput.value;
    const landDocumentFile = landDocumentInput.files[0];

    if (!ethers.utils.isAddress(initialOwner)) {
        displayStatus(registerStatusDiv, "error", "Invalid Ethereum address for initial owner.");
        return;
    }
    if (!landDocumentFile) {
        displayStatus(registerStatusDiv, "error", "Please select a land document to upload.");
        return;
    }

    displayStatus(registerStatusDiv, "", "Uploading document to IPFS and registering land... This may take a moment.");
    registerLandBtn.disabled = true;

    try {
        const ipfsHash = await uploadFileToPinata(landDocumentFile);
        
        const tx = await contract.registerLandParcel(initialOwner, ipfsHash);
        await tx.wait();

        // Fetching nextLandId from contract just to display the newly registered ID
        // Note: nextLandId will be incremented *after* this transaction, so subtract 1
        const newLandId = (await contract.nextLandId()).toNumber() - 1;
        displayStatus(registerStatusDiv, "success", `Land registered successfully! Land ID: ${newLandId}. Transaction hash: ${tx.hash}`);
    } catch (error) {
        console.error("Error registering land:", error);
        displayStatus(registerStatusDiv, "error", `Failed to register land: ${error.message || error.reason}`);
    } finally {
        registerLandBtn.disabled = false;
    }
}

async function viewLand() {
    if (!contract) {
        alert("Please connect your wallet first.");
        return;
    }

    const landId = viewLandIdInput.value;
    if (!landId) {
        displayStatus(viewStatusDiv, "error", "Please enter a Land ID.");
        return;
    }

    displayStatus(viewStatusDiv, "", "Fetching land details...");
    viewLandBtn.disabled = true;

    try {
        const owner = await contract.ownerOf(landId);
        const ipfsHash = await contract.getLandDocuments(landId);

        landOwnerSpan.textContent = owner;
        landDocLink.href = `https://gateway.pinata.cloud/ipfs/${ipfsHash}`;
        landDocLink.textContent = `View Document (IPFS: ${ipfsHash.substring(0, 10)}...)`;
        
        displayStatus(viewStatusDiv, "success", "Land details fetched.");
    } catch (error) {
        console.error("Error viewing land:", error);
        landOwnerSpan.textContent = "N/A";
        landDocLink.href = "#";
        landDocLink.textContent = "N/A";
        displayStatus(viewStatusDiv, "error", `Failed to fetch land details: ${error.message || error.reason}. Ensure Land ID exists.`);
    } finally {
        viewLandBtn.disabled = false;
    }
}

async function transferLand() {
    if (!contract || !currentAccount) {
        alert("Please connect your wallet first.");
        return;
    }

    const landId = transferLandIdInput.value;
    const newOwnerAddress = newOwnerAddressInput.value;

    if (!landId) {
        displayStatus(transferStatusDiv, "error", "Please enter a Land ID.");
        return;
    }
    if (!ethers.utils.isAddress(newOwnerAddress)) {
        displayStatus(transferStatusDiv, "error", "Invalid Ethereum address for new owner.");
        return;
    }

    displayStatus(transferStatusDiv, "", "Initiating land transfer... Confirm in Metamask.");
    transferLandBtn.disabled = true;

    try {
        const currentOwner = await contract.ownerOf(landId);
        if (currentOwner.toLowerCase() !== currentAccount.toLowerCase()) {
            displayStatus(transferStatusDiv, "error", "You are not the owner of this land parcel.");
            return;
        }

        const tx = await contract.safeTransferFrom(currentAccount, newOwnerAddress, landId);
        await tx.wait();

        displayStatus(transferStatusDiv, "success", `Land ID ${landId} transferred successfully to ${newOwnerAddress}. Transaction hash: ${tx.hash}`);
    } catch (error) {
        console.error("Error transferring land:", error);
        displayStatus(transferStatusDiv, "error", `Failed to transfer land: ${error.message || error.reason}`);
    } finally {
        transferLandBtn.disabled = false;
    }
}

function displayStatus(element, type, message) {
    element.className = `status-message ${type}`;
    element.textContent = message;
    setTimeout(() => {
        element.textContent = "";
        element.className = "status-message";
    }, 10000); // Clear message after 10 seconds
}

function showSection(sectionId) {
    document.querySelectorAll('main section').forEach(section => {
        section.style.display = 'none';
        section.classList.remove('active-section');
    });
    const activeSection = document.getElementById(sectionId);
    activeSection.style.display = 'block';
    activeSection.classList.add('active-section');
}

connectWalletBtn.addEventListener("click", connectWallet);
registerLandBtn.addEventListener("click", registerLand);
viewLandBtn.addEventListener("click", viewLand);
transferLandBtn.addEventListener("click", transferLand);

showSection('registerLandSection'); // Show register section by default