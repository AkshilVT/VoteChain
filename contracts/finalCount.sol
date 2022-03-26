//SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract FinalCount {
    uint leftCount = 0;
    uint rightCount = 0;

    function setCount(uint lCount,uint rCount) public {
        leftCount = lCount;
        rightCount = rCount;
    } 

    function getCount() public view returns (uint lCount, uint rCount) {
        return (leftCount, rightCount);
    }
}