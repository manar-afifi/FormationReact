import React from "react";
import styled from "styled-components";

export default function Navbar() {
    return (
        <Header>
            <Nav>
                <LogoContainer>
                    <Logo src="/logo192.png" alt="React logo" />
                    <Brand>ReactFacts</Brand>
                </LogoContainer>
                <Subtitle>React Course - Project 1</Subtitle>
            </Nav>
        </Header>
    );
}

const Header = styled.header`
  background-color: #21222A;
  padding: 20px 36px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Logo = styled.img`
  width: 40px;
`;

const Brand = styled.h1`
  color: #61DAFB;
  font-size: 1.5rem;
`;

const Subtitle = styled.h4`
  color: #DEEBF8;
  font-weight: 400;
`;

