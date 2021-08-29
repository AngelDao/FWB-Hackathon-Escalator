import { ethers } from "ethers";
import { HelperRock } from "../utils/addresses";
import HelperRockABI from "../abis/HelperRock.json";
import EtherRock from "../abis/EtherRock.json";

export const getContracts = async (signer, chainId) => {
  debugger;
  const helperRock = new ethers.Contract(
    HelperRock[chainId],
    HelperRockABI,
    signer
  );
  const helperRockInterface = new ethers.utils.Interface(HelperRockABI);
  const etherRockInterface = new ethers.utils.Interface(EtherRock);
  return { helperRock, helperRockInterface, etherRockInterface };
};
