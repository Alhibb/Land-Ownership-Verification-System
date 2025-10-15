// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol"; 

contract LandRegistry is ERC721, Ownable {
    uint256 public nextLandId;
    mapping(uint256 => string) public landIpfsDocuments; 

    constructor(string memory name, string memory symbol) ERC721(name, symbol) {
        nextLandId = 1;
    }

    modifier onlyRegistrar() {
        require(owner() == msg.sender, "Caller is not the authorized registrar");
        _;
    }

    function setRegistrar(address _newRegistrar) public onlyRegistrar {
        transferOwnership(_newRegistrar);
    }

    function registerLandParcel(address _initialOwner, string memory _ipfsDocHash) public onlyRegistrar returns (uint256) {
        require(bytes(_ipfsDocHash).length > 0, "IPFS hash cannot be empty");
        uint256 newLandId = nextLandId;
        _safeMint(_initialOwner, newLandId);
        landIpfsDocuments[newLandId] = _ipfsDocHash;
        nextLandId++;
        return newLandId;
    }

    function getLandDocuments(uint256 _landId) public view returns (string memory) {
        require(_exists(_landId), "Land parcel does not exist");
        return landIpfsDocuments[_landId];
    }
}