// SPDX-License-Identifier: MIT

pragma solidity 0.8.28;

contract Constants {
    /*
    constants are variables that cannot be modified
    their value is hard coded and using constants can save gas cost
    coding convention to uppercase constant variables
    */
    address public constant MY_ADDRESS =
        0x777788889999AaAAbBbbCcccddDdeeeEfFFfCcCc;
    uint public constant MY_UNIT = 123;
}
