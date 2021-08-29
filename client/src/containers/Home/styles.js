import styled from "styled-components";
import { MasterStyles } from "../../masterStyles";
import BG from "../../assets/rock_bg.jpg";
const { borderMain, bgMain, bgSecondary, borderSecondary } = MasterStyles;

export const LayoutOuter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  // background: ${MasterStyles.bgMain};
  background-image: url(${BG});
  height: 100vh;
`;

export const LayoutInner = styled.div`
  width: 800px;
  height: 100vh;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid ${borderMain};
`;

export const Header = styled.div`
  border: 2px solid ${borderMain};
  width: 750px;
  height: 75px;
  margin-top: 20px;
  background: ${bgMain};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  width: 750px;
`;

export const GIFDisplay = styled.div`
  width: 120px;
  height: 160px;
  background: ${bgSecondary};
  border: 2px solid ${borderSecondary};
  padding: 15px;
`;

export const GIFContainer = styled.div`
  width: 150px;
  height: 530px;
  display: flex;
  flex-direction: column;
`;

export const ContentContainer = styled.div`
  width: 750px;
  height: 500px;
  margin-top: 20px;
  display: flex;
`;

export const RangeContainer = styled.div`
  border: 2px solid ${borderSecondary};
  width: 150px;
  height: 100%;
  background: ${bgSecondary};
  margin-right: 25px;
  padding: 15px;
`;

export const SweepRangeContainer = styled.div`
  border: 2px solid ${borderMain};
  width: 400px;
  height: 400px;
  background: ${bgMain};
  margin-right: 25px;
  padding 15px;
`;
