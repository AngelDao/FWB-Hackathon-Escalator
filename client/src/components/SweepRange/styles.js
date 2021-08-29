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

export const Content = styled.div`
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

export const InfoContainer = styled.div`
  margin-top: 50px;
  width: 100%;
  height: 200px;
  display: flex;
  //   justifycontent: ;
  flex-direction: column;
`;

export const Info = styled.div`
  margin-top: 25px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ConnectButton = styled.button`
  color: white;
  font-size: 16px;
  background: ${MasterStyles.buttonColor};
  height: 50px;
  width: 150px;
`;

export const InfoInput = styled.input`
  background: ${bgSecondary};
  border: 2px solid ${MasterStyles.borderSecondary};
  text-align: end;
`;
