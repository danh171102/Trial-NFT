// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFTExchange is Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _listingIds;

    struct Listing {
        uint256 id;
        address nftContract;
        uint256 tokenId;
        address payable seller;
        uint256 price;
        bool isSold;
    }

    mapping(uint256 => Listing) public listings;

    function createListing(
        address _nftContract,
        uint256 _tokenId,
        uint256 _price
        )
        public
    {
        IERC721(_nftContract).transferFrom(msg.sender, address(this), _tokenId);

        _listingIds.increment();
        uint256 listingId = _listingIds.current();

        listings[listingId] = Listing({
            id: listingId,
            nftContract: _nftContract,
            tokenId: _tokenId,
            seller: payable(msg.sender),
            price: _price,
            isSold: false
        });

    }

    function buyNFT(uint256 _listingId) public payable {
        Listing storage listing = listings[_listingId];
        require(!listing.isSold, "NFT is already sold");
        require(msg.value >= listing.price, "Insufficient funds");

        listing.seller.transfer(listing.price);
        IERC721(listing.nftContract).transferFrom(address(this), msg.sender, listing.tokenId);

        listing.isSold = true;

    }
}