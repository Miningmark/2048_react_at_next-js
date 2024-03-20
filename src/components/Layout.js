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

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>2048 React </title>
      </Head>
      <StyledHeader>
        <h1>test</h1>
        <Link href="/">Home</Link>
        <Link href="/">Highscore</Link>
        <Link href="/newGame">New Game</Link>
      </StyledHeader>
      <StyledMain>{children}</StyledMain>
    </>
  );
}
