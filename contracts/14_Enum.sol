// SPDX-License-Identifier: MIT

pragma solidity 0.8.28;

contract Enum {
    /*
    enum representing shipping status
    default value is the first element listed in definition of the type, in this case "Pending"

    set: update status by passing uint into input
    cancel: updates the contract status to the 'Canceled' value of the enum
    reset: delete resets the enum to its first value, 0
    */

    enum Status {
        Pending,
        Shipped,
        Accepted,
        Rejected,
        Canceled
    }

    Status public status; // returns uint, Pending 0, Shipped 1, etc

    function get() public view returns (Status) {
        return status;
    }

    function set(Status _status) public {
        status = _status;
    }

    function cancel() public {
        status = Status.Canceled;
    }

    function reset() public {
        delete status;
    }
}
