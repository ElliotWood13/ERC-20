//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract CoffeeToken is ERC20 {
    uint constant _initial_supply = 100 * (10**18); // Create supply of 100 token which have 18 decimals

    constructor() ERC20("CoffeeToken", "CT") {
        _mint(msg.sender, _initial_supply);
    }
}