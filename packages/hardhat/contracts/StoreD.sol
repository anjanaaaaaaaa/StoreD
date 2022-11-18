// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;
import "hardhat/console.sol";

contract StoreD {
    string[] Files;
    struct CIDFile {
        address[] users;
        address owner;
        string cid;
    }

    mapping(address => CIDFile[]) public userToFiles;
    mapping(address => CIDFile[]) public userToSharedFiles;

    function uploadFiles(string memory _cid) public {
        CIDFile memory newCidFile;
        newCidFile.owner = msg.sender;
        newCidFile.cid = _cid;
        //   CIDFile[] memory existingFiles = userToFiles[msg.sender];

        userToFiles[msg.sender].push(newCidFile);
    }

    function getAccess(address[] memory _users, string memory _cid) public {
        CIDFile memory newCidFile;
        newCidFile.cid = _cid;
        newCidFile.users = _users;
        for (uint256 i = 0; i < _users.length; i++) {
            userToSharedFiles[_users[i]].push(newCidFile);
        }
    }

    function getSharedFiles(address _userAdd)
        public
        view
        returns (CIDFile[] memory)
    {
        return userToSharedFiles[_userAdd];
    }

    //  function putFiles(address keyAdd, string ipfsHash, address[] userArray){
    //   var inst = new File(ipfsHash,userArray);
    //   fileMap[keyAdd] = inst;

    //  }
    //  function getFiles(address keyAdd) {
    //     return fileMap[keyAdd];
    //  }
}
