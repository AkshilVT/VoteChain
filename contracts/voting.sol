//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
pragma experimental ABIEncoderV2;

contract Voting {
    // struct for each proporsal
    // struct defines datatype of each proposals
    struct Info {
        string name;
        string description;
        address tokenAd;
    }

    // array of struct
    // array of each propasals
    Info[] Informations;

    // map to get whether a user selected yes or no
    mapping(address => bool) userValue;

    address[] private active;
    address[] private completed;

    function startProposal(address ad) public {
        active.push(ad);
    }

    function endProposal(address ad) public {
        for (uint256 i = 0; i < active.length; i++) {
            if (ad == active[i]) {
                active[i] = active[active.length - 1];
                active.pop();
                completed.push(ad);
            }
        }
    }

    function displayActiveList() public view returns (address[] memory) {
        return active;
    }

    function displayCompletedList() public view returns (address[] memory) {
        return completed;
    }

    // fetch all the proposals for the dashboard
    function getAll() public view returns (Info[] memory) {
        return Informations;
    }

    // fetch only one propasals for sepecific page's propasals
    function getOne(address tkAd) public view returns (Info memory) {
        uint256 n = Informations.length;
        for (uint256 i = 0; i < n; i++) {
            if (Informations[i].tokenAd == tkAd) {
                return Informations[i];
            }
        }
        Info memory temp;
        return temp;
    }

    // get user selected value via address
    function getUserValue(address tkAd) public view returns (bool value) {
        return userValue[tkAd];
    }

    // set each propasals
    function setInfo(
        string memory name,
        string memory description,
        address tkAd
    ) public {
        Info memory temp = Info(name, description, tkAd);
        Informations.push(temp);
    }

    // set each user's value
    function setUser(address userAd, bool value) public {
        userValue[userAd] = value;
    }
}
