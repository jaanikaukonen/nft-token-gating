// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract AccessToken is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;

    constructor() ERC721("AccessToken", "ATK") {
        _tokenIdCounter.increment();
    }

    // Mapping to store which addresses have access
    mapping(address => bool) private _hasAccess;

    // Mint a new access token (NFT)
    function mint() public {
        require(!_hasAccess[msg.sender], "Wallet already owns an NFT");
        uint256 tokenId = _tokenIdCounter.current();
        _mint(msg.sender, tokenId);
        _hasAccess[msg.sender] = true;
        _tokenIdCounter.increment();
    }

    // Check if an address has access
    function hasAccess(address user) public view returns (bool) {
        return _hasAccess[user];
    }
}
