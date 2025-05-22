// SPDX-License-Identifier: MIT

pragma solidity 0.8.28;

contract EtherUnits {
    /*
    -transactions are paid with ether
    -similar to how one dollar is equal to 100 cents, one ether is equal to 1e18 wei
    1 wei is equal to 1
    1 gwei is equal to 10^9 wei
    1 ether is equal to 10^18 wei
*/
    uint public oneWei = 1 wei;
    bool public isOneWei = (oneWei == 1);

    uint public oneGwei = 1 gwei;
    bool public isOneGwei = (oneGwei == 1e9);

    uint public oneEther = 1 ether;
    bool public isOneEther = (oneEther == 1e18);
}
