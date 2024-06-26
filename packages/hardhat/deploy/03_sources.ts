import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import getSource from "../sources/get";
import getLatestVersions from "../sources/latest.ts";

const deployYourContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();

  const nft = await hre.ethers.getContract("upDevAccountNFT", deployer);

  const addSource = async (provider: string, version: string) => {
    const source = getSource(provider, version);
    try {
      await nft.addSource(provider, version, source.code);
      console.log(`Source ${source.name} added`);
    } catch (e) {
      console.log(`Source ${source.name} already added`);
    }
  };

  const latest = await getLatestVersions();
  for (const key in latest) {
    await addSource(key, latest[key]);
  }
};

export default deployYourContract;

deployYourContract.tags = ["sources"];
