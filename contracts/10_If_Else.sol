// SPDX-License-Identifier: MIT

pragma solidity 0.8.28;

contract IfElse {
    //solidity supports conditional statements if, else if and else
    function foo(uint x) public pure returns (uint) {
        if (x < 10) {
            return 0;
        } else if (x < 20) {
            return 1;
        } else {
            return 2;
        }
    }

    function ternary(uint _x) public pure returns (uint) {
        return _x < 10 ? 0 : (_x < 20 ? 1 : 2);
    }
}
