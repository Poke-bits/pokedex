"use client";

import React from "react";
import styled from "styled-components";


const Header = styled.header`
  background-color: #333333;
  padding: 30px;
  border: none;
`;

const TitleSpan = styled.span`
    color: white;
    cursor: pointer;
    font-size: 2em;
    &:hover {
        color: #666;
    }
`;


const Main = styled.main`
  background-color: white;
  min-height: 10px;
`;

export default function Navbar() {
  return (
    <div>
      <Header>
        <TitleSpan onClick={() => window.location.href = '/'}>
          PokeCoreX
        </TitleSpan>
      </Header>
      <Main />
    </div>
  );
}
