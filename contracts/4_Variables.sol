// SPDX-License-Identifier: MIT

pragma solidity 0.8.28;

/*
    There are 3 types of variables in Solidity
    local
    -declared inside a function
    -not stored on the blockchain
    state
    -declared outside a function
    -stored on the blockchain
    global (provides information about the blockchain)
*/

contract Variables {
    //state
    string public text = "Hello";
    uint public num = 123;

    function doSomething() public view {
        //local
        uint i = 456;

        //global
        uint timestamp = block.timestamp;
        address sender = msg.sender;
    }
}
