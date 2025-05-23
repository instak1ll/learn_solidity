// SPDX-License-Identifier: MIT

pragma solidity 0.8.28;

contract Gas {
    /*
    how much ether do you need to pay for a transaction?
    we pay an amount of Ether that is calculated as: gas spent * gas price

    1 Gas: Think of gas as the "energy" or "fuel" of the Ethereum network. It's a unit of measurement for the computational effort required to execute an operation (e.g., an Ether transfer, an interaction with a smart contract, etc.). Each instruction or step on the blockchain has an associated gas cost.

    2 Gas spent: This is the total amount of "fuel" (gas) actually consumed in a specific transaction. For example, a simple Ether transfer uses less gas than a complex smart contract transaction.

    3 Gas price: This is how much Ether you are willing to pay for each unit of gas. It is measured in gwei (1 gwei = 0.000000001 Ether). You set this price when you send the transaction.

    gas Limit

    1 Gas limit: This is the maximum amount of gas that you (as the sender of the transaction) are willing to use for your transaction. You set this limit. If your transaction attempts to use more gas than you specified in this limit, the transaction will fail and all the gas you attempted to use will be lost (even if the transaction is not completed). This is a safety measure to prevent transactions from consuming infinite resources.

    2 Block gas limit: This is the maximum total amount of gas that a single block on the blockchain can hold. It is set by the network itself (miners or validators). This limit ensures that blocks don't become so large that they take too long to process and propagate across the network, potentially slowing down or congesting Ethereum. The sum of the gas from all transactions included in a block cannot exceed this limit.

    - using up all of the gas that you send causes your transaction to fail -
    - state changes are undone -
    - gas spent is not refunded -

    - here we run a loop until all of the gas are spent, and the transaction fails -
    */

    uint public i = 0;

    function forever() public {
        while (true) {
            i += 1;
        }
    }

    /*
    What happens when you execute forever()?
    You submit a transaction by calling forever() and assign it a Gas Limit (for    example, 100,000 gas units).
    The code in forever() begins executing.
    The while loop (true) begins executing repeatedly: i is incremented to 1, then  2, then 3, and so on.
    At each increment, gas is consumed.
    Since the loop has no exit condition, it will never stop on its own.
    Gas runs out: There will come a point where the total gas consumed by the loop  iterations will reach the Gas Limit you set for the transaction.
    The transaction fails: At that point, the Ethereum Virtual Machine (EVM) stops  the function from executing. The transaction fails because it ran out of gas.
    State changes are rolled back: Most importantly, any changes the function   attempted to make (such as increments of i) will be rolled back. That is, the     variable i will remain at its original value (0, in this case), as if the   transaction had never occurred.
    Gas is not refunded: Even if the transaction fails and the changes are  reverted, the gas spent up to the point of failure is NOT refunded. Miners/  validators are paid for the work they did while trying to execute your    transaction until they ran out of gas.
    */
}
