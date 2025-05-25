// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

contract Loop {
    //solidity supports for, while, and do while loops
    //don't write loops that are unbounded as this can hit the gas limit, causing your transaction to fail
    //for the reason above, while and do while loops are rarely used
    function runLoops() public pure {
        for (uint i = 0; i < 10; i++) {
            if (i == 3) {
                continue;
            }
            if (i == 5) {
                break;
            }
        }
        uint j = 0;
        while (j < 10) {
            j++;
        }
    }
}
