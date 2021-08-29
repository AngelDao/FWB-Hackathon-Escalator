import React, { useContext, useState } from "react";
import { MasterStyles } from "../../masterStyles";
import {
  ContentContainer,
  MenuItem,
  TitleContainer,
  Title,
  MenuContainer,
  FirstMenuItem,
} from "./styles";
import CredentialsContext from "../../context/credentialsContext";

const Range = () => {
  const { setCurrentRange, currentRange, account, setLoading } =
    useContext(CredentialsContext);

  const [hovered, setHovered] = useState(false);

  const handleRangeChange = (range) => {
    if (account.address) {
      setLoading(true);
    }
    setCurrentRange(range);
  };

  const handleHover = (num) => {
    setHovered(num);
  };

  // const handle

  return (
    <ContentContainer>
      <TitleContainer>
        <Title>Ranges</Title>
      </TitleContainer>
      <MenuContainer>
        <FirstMenuItem
          onMouseEnter={() => handleHover(0)}
          onMouseLeave={() => handleHover(null)}
          onClick={() => handleRangeChange(0)}
          selected={0 === currentRange || hovered === 0}
        >
          {(0 === currentRange || hovered === 0) && "✱"} 0-99{" "}
          {(0 === currentRange || hovered === 0) && "✱"}
        </FirstMenuItem>
        <MenuItem
          onMouseEnter={() => handleHover(1)}
          onMouseLeave={() => handleHover(null)}
          onClick={() => handleRangeChange(1)}
          selected={1 === currentRange || hovered === 1}
        >
          {" "}
          {(1 === currentRange || hovered === 1) && "✱"} 100-199{" "}
          {(1 === currentRange || hovered === 1) && "✱"}
        </MenuItem>
        <MenuItem
          onMouseEnter={() => handleHover(2)}
          onMouseLeave={() => handleHover(null)}
          onClick={() => handleRangeChange(2)}
          selected={2 === currentRange || hovered === 2}
        >
          {(2 === currentRange || hovered === 2) && "✱"} 200-299{" "}
          {(2 === currentRange || hovered === 2) && "✱"}
        </MenuItem>
        <MenuItem
          onMouseEnter={() => handleHover(3)}
          onMouseLeave={() => handleHover(null)}
          onClick={() => handleRangeChange(3)}
          selected={3 === currentRange || hovered === 3}
        >
          {(3 === currentRange || hovered === 3) && "✱"} 300-399{" "}
          {(3 === currentRange || hovered === 3) && "✱"}
        </MenuItem>
        <MenuItem
          onMouseEnter={() => handleHover(4)}
          onMouseLeave={() => handleHover(null)}
          onClick={() => handleRangeChange(4)}
          selected={4 === currentRange || hovered === 4}
        >
          {(4 === currentRange || hovered === 4) && "✱"} 400-499{" "}
          {(4 === currentRange || hovered === 4) && "✱"}
        </MenuItem>
        <MenuItem
          onMouseEnter={() => handleHover(5)}
          onMouseLeave={() => handleHover(null)}
          onClick={() => handleRangeChange(5)}
          selected={5 === currentRange || hovered === 5}
        >
          {(5 === currentRange || hovered === 5) && "✱"} 500-599{" "}
          {(5 === currentRange || hovered === 5) && "✱"}
        </MenuItem>
        <MenuItem
          onMouseEnter={() => handleHover(6)}
          onMouseLeave={() => handleHover(null)}
          onClick={() => handleRangeChange(6)}
          selected={6 === currentRange || hovered === 6}
        >
          {(6 === currentRange || hovered === 6) && "✱"} 600-699{" "}
          {(6 === currentRange || hovered === 6) && "✱"}
        </MenuItem>
        <MenuItem
          onMouseEnter={() => handleHover(7)}
          onMouseLeave={() => handleHover(null)}
          onClick={() => handleRangeChange(7)}
          selected={7 === currentRange || hovered === 7}
        >
          {(7 === currentRange || hovered === 7) && "✱"} 700-799{" "}
          {(7 === currentRange || hovered === 7) && "✱"}
        </MenuItem>
        <MenuItem
          onMouseEnter={() => handleHover(8)}
          onMouseLeave={() => handleHover(null)}
          onClick={() => handleRangeChange(8)}
          selected={8 === currentRange || hovered === 8}
        >
          {" "}
          {(8 === currentRange || hovered === 8) && "✱"} 800-899{" "}
          {(8 === currentRange || hovered === 8) && "✱"}
        </MenuItem>
        <MenuItem
          onMouseEnter={() => handleHover(9)}
          onMouseLeave={() => handleHover(null)}
          onClick={() => handleRangeChange(9)}
          selected={9 === currentRange || hovered === 9}
        >
          {(9 === currentRange || hovered === 9) && "✱"} 900-999{" "}
          {(9 === currentRange || hovered === 9) && "✱"}
        </MenuItem>
        <MenuItem
          onMouseEnter={() => handleHover(10)}
          onMouseLeave={() => handleHover(null)}
          onClick={() => handleRangeChange(10)}
          selected={10 === currentRange || hovered === 10}
        >
          {(10 === currentRange || hovered === 10) && "✱"} 1000-1999{" "}
          {(10 === currentRange || hovered === 10) && "✱"}
        </MenuItem>
        {/* <MenuItem>
          300-399
        </a> */}
      </MenuContainer>
    </ContentContainer>
  );
};

export default Range;
