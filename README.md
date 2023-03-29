# ERC-20

1. Npm install at the root to add all dependencies
2. Create a .env files that contains the following information

`ALCHEMY_GOERLI_URL=HTTP_ADDRESS_FROM_ALCHEMY_APP
GOERLI_PRIVATE_KEY=YOUR_WALLETS_PRIVATE_KEY
ETHERSCAN_KEY=
SOME_OTHER_VARIABLE=`

3. Replace 'HTTP_ADDRESS_FROM_ALCHEMY_APP' with the address from your created project. See docs here on how to setup https://www.chainshot.com/article/hardhat-guides-setup.
4. Replace 'YOUR_WALLETS_PRIVATE_KEY' with the private key of your wallet. You can find this by clicking the 3 dots on the side of your Metamask account when logged in and selecting 'Export private key'.
5. Run npx hardhat run scripts/deploy.js --network goerli to deploy the contract