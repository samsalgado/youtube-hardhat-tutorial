//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;
//import "../node_modules/hardhat/console.sol";
import "../@openzeppelin/contracts/security/ReentrancyGuard.sol";
contract ChristmasToken is ReentrancyGuard{
    string public name = "DoveToken";
    string public symbol = "DT";
    uint256 totalSupply = 10000000;
    address public owner;
    mapping(address => uint256) balances;
    event Transfer(address indexed _from, address indexed _to, uint256 _value);
    constructor() {
        balances[msg.sender] = totalSupply;
        owner = msg.sender;
    }
    function transfer(address to, uint256 amount) nonReentrant external {
        require(balances[msg.sender] >= amount, "NOT ENOUGH TOKENS");
        //console.log("Transferring from % to % for % tokens", msg.sender, to, amount);
        balances[msg.sender] -= amount;
        balances[to] += amount;
        emit Transfer(msg.sender, to, amount);        

    }
    
    function balanceOf(address account) external view returns(uint256) {
        return balances[account];
    }

}

//public, private, external, internal