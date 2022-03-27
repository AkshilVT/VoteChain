//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Voting {
    // struct for each proporsal
    // struct defines datatype of each proposals
    struct Info {
        string name;
        string description;
        address tokenAd;
        uint256 leftCount;
        uint256 rightCount;
        address admin;
        // map to get whether a user selected yes or no
        mapping(address => bool) userValue;
    }
    // array of struct
    // array of each propasals
    Info[] Informations;
    string[] private allName;
    address[] private allAds;

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
    function getAll()
        public
        returns (string[] memory names, address[] memory tkAds)
    {
        for (uint256 i = 0; i < Informations.length; i++) {
            allName.push(Informations[i].name);
            allAds.push(Informations[i].tokenAd);
        }

        return (allName, allAds);
    }

    // fetch only one propasals for sepecific page's propasals
    function getOne(address tkAd)
        public
        view
        returns (string memory name, address tkA)
    {
        uint256 n = Informations.length;
        for (uint256 i = 0; i < n; i++) {
            if (Informations[i].tokenAd == tkAd) {
                return (Informations[i].name, Informations[i].tokenAd);
            }
        }
    }

    // get user selected value via address
    function getUserValue(address userAd, address proposalsAd)
        public
        view
        returns (bool value)
    {
        for (uint256 i = 0; i < Informations.length; i++) {
            if (Informations[i].tokenAd == proposalsAd) {
                return Informations[i].userValue[userAd];
            }
        }
    }

    // set each propasals
    function setInfo(
        string memory name,
        string memory description,
        address tkAd
    ) public {
        Info storage info = Informations.push();
        info.name = name;
        info.description = description;
        info.tokenAd = tkAd;
    }

    // set each user's value
    function setUser(
        address pAd,
        address userAd,
        bool value
    ) public {
        uint256 n = Informations.length;
        for (uint256 i = 0; i < n; i++) {
            if (Informations[i].tokenAd == pAd) {
                Informations[i].userValue[userAd] = value;
                if (value == true) {
                    Informations[i].leftCount++;
                } else {
                    Informations[i].rightCount++;
                }
            }
        }
    }
}
