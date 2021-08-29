import { ethers } from "ethers";
import { EtherRock } from "../utils/addresses";
import EtherRockABI from "../abis/Rock.json";

export const getContracts = async (signer) => {
  const etherRock = new ethers.Contract(EtherRock, EtherRockABI, signer);
  const etherRockInterface = new ethers.utils.Interface(EtherRockABI);
  return { etherRock, etherRockInterface };
};
