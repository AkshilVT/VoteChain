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
        bool mila = false;
        for (uint i = 0; i<n; i++) {
            if (polls[i].pollAd == pAd) {
                mila = true;
                polls[i].leftCount = lCount;
                polls[i].rightCount = rCount;
            }
        }

        if (!mila) {
            TotalPoll memory tp = TotalPoll(pAd,lCount, rCount);
            polls.push(tp);
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
}