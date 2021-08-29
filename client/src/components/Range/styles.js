import styled from "styled-components";
import { MasterStyles } from "../../masterStyles";
const { borderMain, bgMain, bgSecondary, borderSecondary } = MasterStyles;

export const ContentContainer = styled.div`
  width: 100%;
  // height:  100%;
  display: flex;
  // justifyContent:  center;
  align-items: center;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  //   flexDirection: column;
`;

export const Title = styled.span`
  font-weight: bolder;
  font-size: ${MasterStyles.fontSize.large};
`;

export const MenuContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FirstMenuItem = styled.a`
  color: ${({ selected }) => (selected ? "black" : "blue")};
  text-decoration: underline;
  cursor: pointer;
`;

export const MenuItem = styled.a`
  color: ${({ selected }) => (selected ? "black" : "blue")};
  text-decoration: underline;
  margin-top: 25px;
  cursor: pointer;
`;
