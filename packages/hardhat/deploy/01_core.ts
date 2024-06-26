import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployYourContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("upRegistry", {
    from: deployer,
    args: [],
    log: true,
    autoMine: true,
  });

  await deploy("upDevAccountNFT", {
    from: deployer,
    args: [
      process.env.DON_ROUTER,
      process.env.DON_ID,
      process.env.LSP8_FORCE,
      process.env.DON_GAS_LIMIT,
      process.env.DON_SUB_ID,
    ],
    log: true,
    autoMine: true,
  });
  const nft = await hre.ethers.getContract("upDevAccountNFT", deployer);

  // Register Chainlink Functions consumer
  try {
    const router = await hre.ethers.getContractAt("IChainlinkFunctionsRouter", process.env.DON_ROUTER || "", deployer);
    const [isAdded] = await router.getConsumer(nft.address, process.env.DON_SUB_ID);
    if (isAdded) {
      throw new Error("skip");
    }
    const tx = await router.addConsumer(process.env.DON_SUB_ID, nft.address);
    console.log("Adding consumer...", nft.address);
    await tx.wait();
    console.log("Consumer added");
  } catch (e) {
    console.log("Consumer already added");
  }
};

export default deployYourContract;

deployYourContract.tags = ["core"];
