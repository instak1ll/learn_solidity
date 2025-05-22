// SPDX-License-Identifier: MIT

pragma solidity 0.8.28;

contract SimpleStorage {
    //to write or update a state variable you need to send a transaction
    uint public num;

    function set(uint _num) public {
        num = _num;
    }

    function get() public view returns (uint) {
        return num;
    }
}
