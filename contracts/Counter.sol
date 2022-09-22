// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Counter {
    uint public count;
    string public name;
  
    constructor(string memory _name,uint _count){
        count = _count;
        name = _name;
    }
    function increment() public{
        count ++;
    }

    function decrement() public{
        count --;
    }
    function IncrementBy (uint _number) public returns (uint Newnumber){
            count = count + _number;
            return count;
    }
    function changeName (string memory _name) public returns (string memory NewName){
        name = _name;
        return name;
    }
}