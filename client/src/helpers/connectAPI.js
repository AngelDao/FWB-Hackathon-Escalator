import api from "etherscan-api";

export const getAPI = async () => {
  const etherscan = api.init(process.env.REACT_APP_ETHERSCAN);
  console.log(etherscan);
  return { etherscan };
};
