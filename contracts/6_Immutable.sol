// SPDX-License-Identifier: MIT

pragma solidity 0.8.28;

contract Immutable {
    //immutable variables are like constants. Values of immutable variables can be set inside the constructor but cannot be modified afterwards
    address public immutable myAddr;
    uint public immutable myUint;

    constructor(uint _myUint) {
        myAddr = msg.sender;
        myUint = _myUint;
    }
}
