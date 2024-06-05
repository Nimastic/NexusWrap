// contracts/AtomicSwap.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AtomicSwap {
    struct Swap {
        uint256 amount;
        address payable recipient;
        uint256 timeout;
        bytes32 hashlock;
        bool active;
    }

    mapping(bytes32 => Swap) public swaps;

    function createSwap(bytes32 _swapID, bytes32 _hashlock, address payable _recipient, uint256 _timeout) external payable {
        require(!swaps[_swapID].active, "Swap already exists");

        swaps[_swapID] = Swap({
            amount: msg.value,
            recipient: _recipient,
            timeout: _timeout,
            hashlock: _hashlock,
            active: true
        });
    }

    function redeem(bytes32 _swapID, bytes32 _preimage) external {
        Swap memory swap = swaps[_swapID];
        require(swap.active, "Swap not active");
        require(sha256(abi.encodePacked(_preimage)) == swap.hashlock, "Invalid preimage");

        swap.recipient.transfer(swap.amount);
        swaps[_swapID].active = false;
    }

    function refund(bytes32 _swapID) external {
        Swap memory swap = swaps[_swapID];
        require(swap.active, "Swap not active");
        require(block.timestamp >= swap.timeout, "Timeout not reached");

        payable(msg.sender).transfer(swap.amount);
        swaps[_swapID].active = false;
    }
}

