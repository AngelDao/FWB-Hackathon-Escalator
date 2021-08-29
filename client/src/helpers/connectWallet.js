import { ethers } from "ethers";

export const getProvider = async () => {
  if (window.ethereum) {
    await window.ethereum.enable();
    return new ethers.providers.Web3Provider(window.ethereum);
  } else {
    return null;
  }
};
