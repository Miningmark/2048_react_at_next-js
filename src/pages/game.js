import Link from "next/link";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  background-color: #202020;
  padding: 10px;
  border-radius: 10px;
  transform: scale(1);
  transition: 0.5s;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: scale(1.1);
    transition: 0.5s;
    background-color: #252525;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
`;

const NewGameDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export default function NewGame() {
  return (
    <NewGameDiv>
      <h2>New Game</h2>
      <p>Select Board Size</p>
      <StyledDiv>
        <StyledLink href="/game/3">3x3</StyledLink>
        <StyledLink href="/game/4">4x4</StyledLink>
        <StyledLink href="/game/5">5x5</StyledLink>
        <StyledLink href="/game/6">6x6</StyledLink>
      </StyledDiv>
    </NewGameDiv>
  );
}
