// SPDX-License-Identifier: MIT

pragma solidity 0.8.28;

contract Primitives {
    bool public boo = true;
    /*
    uint = unsigned integer, 
    uint is an alias for uint256,
    uint8,16,32...256   ranges from 0 to 2 ** 8,16,32...256 - 1,
    */
    uint8 public u8 = 1;
    uint256 public u256 = 456;
    uint public u = 123;
    /*
    int = integer,
    int is an alias for int256,
    int256,128 ranges from -2 ** 256,128 to 2 ** 256,128 - 1
    */
    int8 public i8 = -1;
    int256 public i256 = 456;
    int public i = -123;

    // minimum and maximum of int
    int256 public minint = type(int256).min;
    int256 public maxint = type(int256).max;

    address public addr = 0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c;

    // the term bytes in Solidity represents a dynamic array of bytes
    bytes1 a = 0xb5; // [10110101]
    bytes1 b = 0x56; // [01010110]

    // unassigned variables have a default value
    bool public defaultBoo; // false
    uint256 public defaultUint; // 0
    int256 public defaultInt; // 0
    address public defaultAddr; // 0x0000000000000000000000000000000000000000
}
