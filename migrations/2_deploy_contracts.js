const SimpleBEP20 = artifacts.require('BEP20/SimpleBEP20.sol');
const AmazingBEP20 = artifacts.require('BEP20/AmazingBEP20.sol');

module.exports = async function (deployer, _network, addresses) {
  await deployer.deploy(SimpleBEP20, 'YeonHo Park Token simpleBEP20', 'YHP', 10000000);
  const simpleBEP20 = await SimpleBEP20.deployed();

  await deployer.deploy(AmazingBEP20, 'YeonHo Park Token Amazing', 'YHP', 18, 10000000);
  const amazingBEP20 = await AmazingBEP20.deployed();
};

