export const truncateAddress = (str, n) => {
  if (!str) return null;
  return str.substr(0, 6) + "..." + str.substr(str.length - 4, str.length - 1);
};

export const readableTrunc = (str) => {
  if (str === "Dust") {
    return "0.00";
  }
  let temp = str.replace(/[.].+$/g, "");

  if (temp.length === 6) {
    return temp[0] + temp[1] + temp[3] + "K";
  }
  if (temp.length > 6 && temp.length < 10) {
    let toKeep = temp.length - 6;
    return temp.slice(0, toKeep) + "M";
  }
  if (temp.length > 9 && temp.length < 13) {
    let toKeep = temp.length - 9;
    return temp.slice(0, toKeep) + "B";
  }
  if (temp.length > 12 && temp.length) {
    let toKeep = temp.length - 12;
    return temp.slice(0, toKeep) + "T";
  }

  return str;
};
