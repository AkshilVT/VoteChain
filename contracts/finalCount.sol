//SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract FinalCount {
    struct TotalPoll {
        address pollAd;
        uint leftCount;
        uint rightCount;
    }

    TotalPoll[] polls;
    function setCount(uint lCount,uint rCount, address pAd) public {
        uint n = polls.length;
        for (uint i = 0; i<n; i++) {
            if (polls[i].pollAd == pAd) {
                polls[i].leftCount = lCount;
                polls[i].rightCount = rCount;
            }
        }
    } 

    function getCount(address pAd) public view returns (TotalPoll memory) {
        uint n = polls.length;
        for (uint i = 0; i<n; i++) {
            if (polls[i].pollAd == pAd) {
                return polls[i];
            }
        }
        TotalPoll memory temp;
        return temp;
    }

    function setCount(address pAd,uint lCount, uint rCount) public {
        uint n = polls.length;
        for (uint i = 0; i<n; i++) {
            if (polls[i].pollAd == pAd) {
                polls[i].leftCount = lCount;
                polls[i].rightCount = rCount;
            }
        }
    }
}