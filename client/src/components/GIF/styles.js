import styled from "styled-components";
import { MasterStyles } from "../../masterStyles";

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
