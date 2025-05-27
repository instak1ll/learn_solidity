// SPDX-License-Identifier: MIT

pragma solidity 0.8.28;

contract Mapping {
    /*
    maps are created with the syntax mapping(keyType => valueType)
    the keyType can be any built-in value type, bytes, string, or any contract
    valueType can be any type including another mapping or an array
    mappings are not iterable

    GET
    - mapping always returns a value.
    - if the value was never set, it will return the default value 0.

    SET
    - Update the value at this address

    REMOVE
    - reset the value to the default value
    
    */
    mapping(address => uint) public myMap;

    function get(address _addr) public view returns (uint) {
        return myMap[_addr];
    }

    function set(address _addr, uint _value) public {
        myMap[_addr] = _value;
    }

    function remove(address _addr) public {
        delete myMap[_addr];
    }
}
