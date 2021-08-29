import React, { useContext } from "react";
import { MasterStyles } from "../../masterStyles";
import Logo from "../../assets/logo.png";
import Background from "../../assets/Rocks_tiled_v3.jpg";
import SweepRange from "../../components/SweepRange";
import Range from "../../components/Range";
import GIF from "../../components/GIF";
import { truncateAddress } from "../../helpers/truncString";
import RotateRock from "../../assets/rock-v4.png";
import Brolly from "../../assets/brolly.gif";
import RockColored from "../../assets/rock-colored.gif";

import CredentialsContext from "../../context/credentialsContext";
import {
  LayoutOuter,
  LayoutInner,
  Header,
  Info,
  GIFDisplay,
  GIFContainer,
  ContentContainer,
  RangeContainer,
  SweepRangeContainer,
} from "./styles";

const Home = () => {
  const { account } = useContext(CredentialsContext);
  return (
    <LayoutOuter>
      <LayoutInner>
        <Header>
          <img alt="something" src={Logo} style={{ height: "150px" }} />
        </Header>
        <Info>
          <div style={{ marginTop: "20px" }}>
            <span style={{ color: MasterStyles.fontColor }}>Project: </span>
            <select style={{ color: MasterStyles.fontColor }}>
              <option style={{ color: MasterStyles.fontColor }}>
                We Like The Rocks
              </option>
            </select>
          </div>
          <div style={{ marginTop: "20px" }}>
            <span style={{ color: MasterStyles.fontColor }}>Wallet: </span>
            {account.address ? (
              <a
                href={`https://etherscan.io/address/${account.address}`}
                style={{ color: "blue", textDecoration: "underline" }}
              >
                {truncateAddress(account.address)}
              </a>
            ) : (
              <a style={{ color: "red", textDecoration: "underline" }}>
                Not Connected
              </a>
            )}
          </div>
        </Info>
        <ContentContainer>
          <RangeContainer>
            <Range />
          </RangeContainer>
          <SweepRangeContainer>
            <SweepRange />
          </SweepRangeContainer>
          <GIFContainer>
            <GIFDisplay>
              <GIF title={"Gonna"} gif={RotateRock} width={"140px"} />
            </GIFDisplay>
            <GIFDisplay style={{ marginTop: "25px" }}>
              <GIF title={"Make"} gif={Brolly} width={"60px"} />
            </GIFDisplay>
            <GIFDisplay style={{ marginTop: "25px" }}>
              <GIF title={"It"} gif={RockColored} width={"140px"} />
            </GIFDisplay>
          </GIFContainer>
        </ContentContainer>
      </LayoutInner>
    </LayoutOuter>
  );
};

export default Home;
