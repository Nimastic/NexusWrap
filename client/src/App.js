// client/src/App.js
import React, { useState } from 'react';
import Web3 from 'web3';

const web3 = new Web3(Web3.givenProvider);

const App = () => {
    const [swapID, setSwapID] = useState('');
    const [hashlock, setHashlock] = useState('');
    const [recipient, setRecipient] = useState('');
    const [timeout, setTimeout] = useState('');
    const [amount, setAmount] = useState('');

    const createSwap = async () => {
        const contract = new web3.eth.Contract(AtomicSwapABI, AtomicSwapAddress);
        await contract.methods.createSwap(swapID, hashlock, recipient, timeout).send({ from: web3.eth.defaultAccount, value: web3.utils.toWei(amount, 'ether') });
    };

    return (
        <div>
            <h1>Peer-to-Peer Blockchain Payment System</h1>
            <input type="text" value={swapID} onChange={(e) => setSwapID(e.target.value)} placeholder="Swap ID" />
            <input type="text" value={hashlock} onChange={(e) => setHashlock(e.target.value)} placeholder="Hashlock" />
            <input type="text" value={recipient} onChange={(e) => setRecipient(e.target.value)} placeholder="Recipient" />
            <input type="text" value={timeout} onChange={(e) => setTimeout(e.target.value)} placeholder="Timeout" />
            <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount (ETH)" />
            <button onClick={createSwap}>Create Swap</button>
        </div>
    );
};

export default App;
