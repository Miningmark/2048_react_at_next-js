import styled from "styled-components";
import Link from "next/link";
import Head from "next/head.js";

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  background-color: #505050;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30px;
  height: 60px;
`;

const StyledMain = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #303030;
  height: calc(100vh - 60px);
`;

const TitleName = styled.h1`
  color: rgb(194, 140, 90);
`;

const MenuItem = styled(Link)`
  color: white;
  text-decoration: none;
  transform: scale(1);
  transition: 0.5s;

  &:hover {
    transform: scale(1.2);
    transition: 0.5s;
  }
`;

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>2048 React </title>
      </Head>
      <StyledHeader>
        <TitleName>2048</TitleName>
        <MenuItem href="/">Home</MenuItem>
        <MenuItem href="/">Highscore</MenuItem>
        <MenuItem href="/game">New Game</MenuItem>
      </StyledHeader>
      <StyledMain>{children}</StyledMain>
    </>
  );
}
