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
  const router = useRouter();
  const [size, setSize] = useState(3);
  const [grid, setGrid] = useState([]);

  useEffect(() => {
    const gridSize = parseInt(router.query.size) || 3;
    setSize(gridSize);
  }, [router.query.size]);

  useEffect(() => {
    const grid = [];
    for (let i = 0; i < size; i++) {
      let row = [];
      for (let j = 0; j < size; j++) {
        row.push(0);
      }
      grid.push(row);
    }
    let x = Math.floor(Math.random() * size);
    let y = Math.floor(Math.random() * size);
    console.log("grid", grid);
    grid[x][y] = 2;
    setGrid(grid);
  }, [size]);

  function moveLeft() {
    const newGrid = [...grid];
    for (let j = 0; j < size; j++) {
      for (let i = 1; i < size; i++) {
        if (newGrid[j][i] !== 0) {
          let k = i;
          while (k > 0 && newGrid[j][k - 1] === 0) {
            newGrid[j][k - 1] = newGrid[j][k];
            newGrid[j][k] = 0;
            k--;
          }
          if (k > 0 && newGrid[j][k - 1] === newGrid[j][k]) {
            newGrid[j][k - 1] *= 2;
            newGrid[j][k] = 0;
          }
        }
      }
    }
    setGrid(newGrid);
    newNumber();
  }

  function moveRight() {
    const newGrid = [...grid];
    for (let j = 0; j < size; j++) {
      for (let i = size - 2; i >= 0; i--) {
        if (newGrid[j][i] !== 0) {
          let k = i;
          while (k < size - 1 && newGrid[j][k + 1] === 0) {
            newGrid[j][k + 1] = newGrid[j][k];
            newGrid[j][k] = 0;
            k++;
          }
          if (k < size - 1 && newGrid[j][k + 1] === newGrid[j][k]) {
            newGrid[j][k + 1] *= 2;
            newGrid[j][k] = 0;
          }
        }
      }
    }
    setGrid(newGrid);
    newNumber();
  }

  function moveUp() {
    const newGrid = [...grid];
    for (let i = 0; i < size; i++) {
      for (let j = 1; j < size; j++) {
        if (newGrid[j][i] !== 0) {
          let k = j;
          while (k > 0 && newGrid[k - 1][i] === 0) {
            newGrid[k - 1][i] = newGrid[k][i];
            newGrid[k][i] = 0;
            k--;
          }
          if (k > 0 && newGrid[k - 1][i] === newGrid[k][i]) {
            newGrid[k - 1][i] *= 2;
            newGrid[k][i] = 0;
          }
        }
      }
    }
    setGrid(newGrid);
    newNumber();
  }

  function moveDown() {
    const newGrid = [...grid];
    for (let i = 0; i < size; i++) {
      for (let j = size - 2; j >= 0; j--) {
        if (newGrid[j][i] !== 0) {
          let k = j;
          while (k < size - 1 && newGrid[k + 1][i] === 0) {
            newGrid[k + 1][i] = newGrid[k][i];
            newGrid[k][i] = 0;
            k++;
          }
          if (k < size - 1 && newGrid[k + 1][i] === newGrid[k][i]) {
            newGrid[k + 1][i] *= 2;
            newGrid[k][i] = 0;
          }
        }
      }
    }
    setGrid(newGrid);
    newNumber();
  }

  function newNumber() {
    const emptyCells = [];

    // Durchlaufen des Gitters, um leere Zellen zu finden
    for (let j = 0; j < size; j++) {
      for (let i = 0; i < size; i++) {
        if (grid[j][i] === 0) {
          emptyCells.push([j, i]); // Hinzufügen der Koordinaten der leeren Zelle
        }
      }
    }

    // Überprüfen, ob es leere Zellen gibt
    if (emptyCells.length === 0) {
      console.log("Game Over");
      //TODO: Game over screen anzeigen
      return;
    }

    // Zufällige Auswahl einer leeren Zelle
    const randomIndex = Math.floor(Math.random() * emptyCells.length);
    const [newX, newY] = emptyCells[randomIndex];

    // Setzen der neuen Zahl (in diesem Fall 2) an der ausgewählten Zelle
    const newGrid = [...grid]; // Kopie des aktuellen Gitters
    newGrid[newX][newY] = 2; // Setzen der neuen Zahl
    setGrid(newGrid); // Aktualisieren des Zustands des Gitters
  }

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
      <div>
        <button onClick={moveLeft}>Left</button>
        <button onClick={moveRight}>Right</button>
        <button onClick={moveUp}>Up</button>
        <button onClick={moveDown}>Down</button>
      </div>
    </div>
  );
}
