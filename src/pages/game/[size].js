import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";

const PlayGround = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.$size}, 1fr);
  grid-template-rows: repeat(${(props) => props.$size}, 1fr);
  gap: 5px;
  height: ${(props) => props.$size * 50 + (props.$size - 1) * 5}px;
  width: ${(props) => props.$size * 50 + (props.$size - 1) * 5}px;
`;

const Square = styled.div`
  height: 50px;
  width: 50px;
  background-color: darkblue;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

export default function GameBoard() {
  const [grid, setGrid] = useState([]);
  //TODO: Grid save at Local Storage

  const router = useRouter();
  const size = router.query.size;

  useEffect(() => {
    setGrid(Array(size * size).fill(0));
  }, []);

  return (
    <div>
      <p>
        Board Size {size}x{size}
      </p>
      <PlayGround $size={size}>
        {grid.map((value, index) => (
          <Square key={index}>{value}</Square>
        ))}
      </PlayGround>
    </div>
  );
}
