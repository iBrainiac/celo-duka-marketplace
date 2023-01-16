const { ethers } = require("hardhat");

async function main() {
  // Load the NFT contract artifacts
  const celoDukaNFTFactory = await ethers.getContractFactory("celoDukaNFT");

  // Deploy the contract
  const celoDukaNftContract = await celoDukaNFTFactory.deploy();
  await celoDukaNftContract.deployed();

  // Print the address of the NFT contract
  console.log("Celo Duka NFT deployed to:", celoDukaNftContract.address);

  // Load the marketplace contract artifacts
  const NFTMarketplaceFactory = await ethers.getContractFactory(
    "NFTMarketplace"
  );

  // Deploy the contract
  const nftMarketplaceContract = await NFTMarketplaceFactory.deploy();

  // Wait for deployment to finish
  await nftMarketplaceContract.deployed();

  // Log the address of the new contract
  console.log("NFT Marketplace deployed to:", nftMarketplaceContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });