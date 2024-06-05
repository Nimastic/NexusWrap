// migrations/2_deploy_contracts.js
const AtomicSwap = artifacts.require("AtomicSwap");
const WrappedToken = artifacts.require("WrappedToken");

module.exports = function(deployer) {
    deployer.deploy(AtomicSwap);
    deployer.deploy(WrappedToken);
};
