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

contract NestedMapping {
    /*
    Nested mapping (mapping from address to another mapping)

    GET
    - you can get values from a nested mapping
    - even when it is not initialized
    - example: get("0xAlice", 1); = nested["0xAlice"][1]; Result: Does not exist (never initialized), in Solidity, mappings always return the default value if the key doesn't exist, for bool, the default value is false.

    SET
    - we assign true 
    - example: set("0xAlice", 1, true); = nested["0xAlice"][1][true]; if you call get("0xAlice", 1); you receive true.
    - call to get with another key: get("0xAlice", 2); = nested["0xAlice"][2] does not exist (never initialized) return default value for bool false

    REMOVE
    - delete a key
    - example: remove("0xAlice", 1); = nested["0xAlice"][1];
    - nested["0xAlice"][1] = false (default value) if you call get("0xAlice", 1); you receive false
    */

    mapping(address => mapping(uint => bool)) public nested;

    function get(address _addr1, uint _i) public view returns (bool) {
        return nested[_addr1][_i]; //false
    }

    function set(address _addr1, uint _i, bool _boo) public {
        nested[_addr1][_i] = _boo; //assign bool value
    }

    function remove(address _addr1, uint _i) public {
        delete nested[_addr1][_i];
    }
}
