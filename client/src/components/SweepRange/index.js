import React, { useContext, useEffect, useState } from "react";
import { BigNumber } from "bignumber.js";
import { MasterStyles } from "../../masterStyles";
import CredentialsContext from "../../context/credentialsContext";
import GIF from "../../assets/loading.gif";
import { ranges } from "../../utils/ranges";
import { ethers } from "ethers";
import { HelperRock, EtherRock } from "../../utils/addresses";
import { readableTrunc } from "../../helpers/truncString";
import {
  ConnectButton,
  Content,
  ContentContainer,
  Info,
  InfoContainer,
  InfoInput,
  Title,
} from "./styles";

const SweepRange = () => {
  const {
    account,
    handleManualConnect,
    currentRange,
    contracts,
    etherscan,
    loading,
    setLoading,
  } = useContext(CredentialsContext);

  const [rangeInfo, setRangeInfo] = useState({});

  const getRocks = async () => {
    const { helperRock } = contracts;
    const range = ranges[currentRange];
    const rocks = [];
    debugger;
    const res = await helperRock.viewRockRange(range.from, range.to);
    debugger;
    for (let i = range.from; i <= range.to; i++) {
      console.log(res[0][i], res[1][i], res[2][i], res[3][i]);
      const price = ethers.utils.formatUnits(
        ethers.BigNumber.from(res[2][i]).toString(),
        18
      );
      const timesSold = ethers.BigNumber.from(res[3][i]).toString();
      const rock = {
        rock_number: i,
        owner: res[0][i],
        forSale: res[1][i],
        price,
        timesSold,
      };
      rocks.push(rock);
    }
    console.log("ROCKS", rocks);
    return rocks;
  };

  const getLatestTXs = async () => {
    const network = await account.provider.getNetwork();
    const e = EtherRock[network.chainId];
    debugger;
    const txs = (
      await etherscan.account.txlist(
        EtherRock[network.chainId],
        9185158,
        "latest",
        1,
        5000,
        "desc"
      )
    ).result;
    debugger;
    return txs.filter((tx) => tx.isError === "0");
  };

  const getSortedRocks = (rocks) => {
    const r = rocks.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    const s = r.filter((r) => r.forSale);
    return s;
  };

  const getLastSale = async (txs) => {
    debugger;
    const { etherRockInterface } = contracts;
    for (let i = 0; i < txs.length; i++) {
      debugger;
      let input;
      try {
        input = etherRockInterface.decodeFunctionData("buyRock", txs[i].input);
      } catch (e) {
        console.log("not a buy");
        console.log(e);
      }
      if (input) {
        debugger;
        const rockNumber = parseInt(input.rockNumber.toString());
        const blockNumber = txs[i].blockNumber;
        const value = parseFloat(
          ethers.utils.formatUnits(txs[i].value.toString(), 18)
        );

        console.log(blockNumber);
        console.log(rockNumber, "rockNumber");
        console.log(value, "ETH");

        if (
          rockNumber >= ranges[currentRange].from &&
          rockNumber <= ranges[currentRange].to
        ) {
          return [rockNumber, value];
        }
      }
    }
  };

  const getRangeInfo = async () => {
    const rocks = await getRocks();
    const txs = await getLatestTXs();
    const sortedRocksASC = getSortedRocks(rocks);
    const floor = sortedRocksASC[0].price;
    const rocksOnFloor = sortedRocksASC.filter((r) => r.price === floor);
    const floorWidth = rocksOnFloor.length * parseFloat(floor);
    const rocksInFloor = rocksOnFloor.map((r) => r.rock_number);
    const [lsRockNumber, lsValue] = await getLastSale(txs);
    return { floor, floorWidth, rocksInFloor, lsRockNumber, lsValue };
  };

  const sweep = async () => {
    const { helperRock } = contracts;
    console.log("RANGE INFO", rangeInfo)
    /*const sweep = helperRock.sweepRange(

    );*/

  }


  useEffect(() => {
    (async () => {
      if (account.address) {
        const info = await getRangeInfo();
        setRangeInfo(info);
        setLoading(false);
      }
    })();
  }, [currentRange, account.address]);

  return (
    <ContentContainer>
      <Content>
        <Title>Range Sweeper</Title>
      </Content>
      {loading ? (
        <div
          style={{
            marginTop: "120px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img src={GIF} />
          <span style={{ marginTop: "45px", width: "300px" }}>
            This may take a second, these are some heavy rocks...
          </span>
        </div>
      ) : (
        <>
          {account.address ? (
            <InfoContainer>
              <Info>
                <span>Current Range</span>
                <InfoInput
                  value={`${ranges[currentRange].from}-${ranges[currentRange].to}`}
                />
              </Info>
              <Info>
                <span>Last Sold #:</span>
                <InfoInput value={rangeInfo.lsRockNumber} />
              </Info>
              <Info>
                <span>Last Sold Price:</span>
                <InfoInput value={`${rangeInfo.lsValue}ETH`} />
              </Info>
              <Info>
                <span>Current Floor:</span>
                <InfoInput
                  value={`${readableTrunc(
                    rangeInfo.floor ? rangeInfo.floor.toString() : ""
                  )}ETH`}
                />
              </Info>
              <Info>
                <span>Current Floor Width:</span>
                <InfoInput
                  value={`${readableTrunc(
                    rangeInfo.floorWidth ? rangeInfo.floorWidth.toString() : ""
                  )}ETH`}
                />
              </Info>
              <Info>
                <span>#s in Floor:</span>
                <InfoInput value={rangeInfo.rocksInFloor} />
              </Info>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "25px",
                }}
              >
                <button
                  style={{
                    width: "150px",
                    height: "25px",
                    fontSize: MasterStyles.fontSize.medium,
                    // background: MasterStyles.buttonColorSecondary,
                    background: "rgb(44 171 55)",
                    color: "white",
                  }}
                >
                  Sweep Range
                </button>
              </div>
            </InfoContainer>
          ) : (
            <div style={{ marginTop: "145px" }}>
              <ConnectButton onClick={handleManualConnect}>
                Connect Wallet
              </ConnectButton>
            </div>
          )}
        </>
      )}
    </ContentContainer>
  );
};

export default SweepRange;
