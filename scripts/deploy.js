// This is a script for deploying your contracts. You can adapt it to deploy
// yours, or create new ones.
async function main() {
  // This is just a convenience check
  if (network.name === 'hardhat') {
    console.warn(
      'You are trying to deploy a contract to the Hardhat Network, which' +
        'gets automatically created and destroyed every time. Use the Hardhat' +
        " option '--network localhost'"
    );
  }

  // ethers is available in the global scope
  const [deployer] = await ethers.getSigners();
  console.log(
    'Deploying the contracts with the account:',
    await deployer.getAddress()
  );

  console.log('Account balance:', (await deployer.getBalance()).toString());

<<<<<<< HEAD
  // const Token = await ethers.getContractFactory("Token");
  // const token = await Token.deploy();
  // await token.deployed();
  const Token = await ethers.getContractFactory("Voting");
=======
  const Token = await ethers.getContractFactory('Voting');
>>>>>>> test/integration
  const token = await Token.deploy();
  await token.deployed();

  console.log('Token Voting address:', token.address);

  // We also save the contract's artifacts and address in the frontend directory
  saveFrontendFiles(token);
}

function saveFrontendFiles(token) {
  const fs = require('fs');
  const contractsDir = __dirname + '/../frontend/src/contracts';

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    contractsDir + '/contract-address.json',
    JSON.stringify({ Token: token.address }, undefined, 2)
  );

<<<<<<< HEAD
  const TokenArtifact = artifacts.readArtifactSync("Voting");

  fs.writeFileSync(
    contractsDir + "/Voting.json",
=======
  const TokenArtifact = artifacts.readArtifactSync('Voting');

  fs.writeFileSync(
    contractsDir + '/Voting.json',
>>>>>>> test/integration
    JSON.stringify(TokenArtifact, null, 2)
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
