// SPDX-License-Identifier: MIT

pragma solidity 0.8.28;

contract Array {
    /*
    an array can have a compile-time fixed size or a dynamic size
    - 1 several ways to initialize an array
    - 2 fixed sized array, all elements initialize to 0
    - 3 solidity can return the entire array but this function should be avoided for arrays that can grow indefinitely in length
    - 3.1 uint[] memory: indicates that the returned array will be stored in temporary memory, not in the blockchain's permanent storage
    - 4 
    => push: append to array this will increase the array length by 1
    => pop: remove last element from array this will decrease the array length by 1
    => delete: delete does not change the array length, it resets the value at index to it's default value, in this case 0
    => examples: create a nested array in memory b = [[1, 2, 3], [4, 5, 6]]
    */

    uint[] public arr; // empty
    uint[] public arr2 = [1, 2, 3];

    uint[10] public myFixedSizeArr; // [0^10]

    function get(uint i) public view returns (uint) {
        return arr[i];
    } // accessing 'arr' line 14, and REVERT because empty

    function getArr() public view returns (uint[] memory) {
        return arr;
    }

    function push(uint i) public {
        arr.push(i);
    }

    function pop() public {
        arr.pop();
    }

    function getLength() public view returns (uint) {
        return arr.length;
    }

    function remove(uint index) public {
        delete arr[index];
    }

    function examples() external pure {
        uint[][] memory b = new uint[][](2);
        for (uint i = 0; i < b.length; i++) {
            b[i] = new uint[](3);
        }
        b[0][0] = 1;
        b[0][1] = 2;
        b[0][2] = 3;
        b[1][0] = 4;
        b[1][1] = 5;
        b[1][2] = 6;
    }
}
