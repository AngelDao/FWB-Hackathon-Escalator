pragma solidity ^0.8.0;

abstract contract EtherRock {
    function buyRock(uint256 rockNumber) public payable virtual;

    function sellRock(uint256 rockNumber, uint256 price) public virtual;

    function giftRock(uint256 rockNumber, address receiver) public virtual;

    struct Rock {
        address owner;
        bool currentlyForSale;
        uint256 price;
        uint256 timesSold;
    }

    mapping(uint256 => Rock) public rocks;
}

contract HelperRock {
    //rinkeby
    EtherRock allRocks = EtherRock(0xBC0dAA15d70d35f257450197c129A220fb1F2955);

    //mainnet
    //EtherRock(0x37504AE0282f5f334ED29b4548646f887977b7cC);

    function sweepRange(
        uint256[] memory rangeRocks,
        uint256 price,
        uint256 newPrice
    ) public payable {
        for (uint256 i = 0; i < rangeRocks.length; i++) {
            allRocks.buyRock{value: price}(rangeRocks[i]);
            allRocks.sellRock(rangeRocks[i], newPrice);
            allRocks.giftRock(rangeRocks[i], msg.sender);
        }
    }

    function safeBuy(uint256 id) public payable {
        allRocks.buyRock{value: msg.value}(id);
        allRocks.sellRock(id, type(uint256).max);
        allRocks.giftRock(id, msg.sender);
    }

    function viewRockRange(uint256 startId, uint256 endId)
        public
        view
        returns (
            address[] memory,
            bool[] memory,
            uint256[] memory,
            uint256[] memory
        )
    {
        address[] memory rockOwners = new address[]((endId - startId) + 1);
        bool[] memory rocksCurrentlyForSale = new bool[]((endId - startId) + 1);
        uint256[] memory rocksPrice = new uint256[]((endId - startId) + 1);
        uint256[] memory rocksTimesSold = new uint256[]((endId - startId) + 1);

        address[] memory rockOwners = new address[](endId + 1);
        bool[] memory rocksCurrentlyForSale = new bool[](endId + 1);
        uint256[] memory rocksPrice = new uint256[](endId + 1);
        uint256[] memory rocksTimesSold = new uint256[](endId + 1);

        for (uint256 i = startId; i <= endId; i++) {
            (
                address owner,
                bool currentlyForSale,
                uint256 price,
                uint256 timesSold
            ) = allRocks.rocks(i);
            rockOwners[i] = owner;
            rocksCurrentlyForSale[i] = currentlyForSale;
            rocksPrice[i] = price;
            rocksTimesSold[i] = timesSold;
        }

        return (rockOwners, rocksCurrentlyForSale, rocksPrice, rocksTimesSold);
    }
}
