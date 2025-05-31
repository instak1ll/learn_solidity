// SPDX-License-Identifier: MIT

pragma solidity 0.8.28;

// payable: modifier that allows receiving transactions
// when we call payForItem and tell it that we want to send 30 wei evm, it will be payable and automatically put it in the contract balance
// this function can be called by anyone withdrawAl, it is not safe

contract MyShop {
    address public owner;
    mapping(address => uint) public payments;

    constructor() {
        owner = msg.sender;
    }

    function payForItem() public payable {
        payments[msg.sender] = msg.value;
    }

    function withdrawAll() public {
        address payable _to = payable(owner);
        address _thisContract = address(this);
        _to.transfer(_thisContract.balance);
    }
}
