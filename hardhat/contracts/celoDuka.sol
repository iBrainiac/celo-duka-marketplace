// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract celoDukaNFT is ERC721 {
    constructor() ERC721("celoDukaNFT", "cNFT") {
        // mint 10 NFTs to yourself
        for (uint i = 0; i < 10; i++) {
            _mint(msg.sender, i);
        }
    }

    // Hardcoded token URI will return the same metadata
    // for each NFT
    function tokenURI(uint) public pure override returns (string memory) {
        return "ipfs://QmPxib1FpfbbovRFqJChPBP7ojVyDYY7P5smAgcns5qTyK";
    }
}