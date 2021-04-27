// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./lib/BEP20.sol";

/**
 * @title SimpleBEP20
 * @author BEP20 Generator (https://vittominacori.github.io/bep20-generator)
 * @dev Implementation of the SimpleBEP20
 */
contract SimpleBEP20 is BEP20 {

    constructor (
        string memory name,
        string memory symbol,
        uint256 initialBalance
    )
        BEP20(name, symbol)
    {
        require(initialBalance > 0, "SimpleBEP20: supply cannot be zero");

        _mint(_msgSender(), initialBalance);
    }
}
