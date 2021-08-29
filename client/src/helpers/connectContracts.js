import { ethers } from "ethers";
import { HelperRock } from "../utils/addresses";
import HelperRockABI from "../abis/HelperRock.json";

export const getContracts = async (signer, chainId) => {
  const helperRock = new ethers.Contract(HelperRock[chainId], HelperRockABI, signer);
  const helperRockInterface = new ethers.utils.Interface(HelperRockABI);
  return { helperRock, helperRockInterface };
};
