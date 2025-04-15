import React from "react";
import styled from "styled-components";
import reactLogo from "../images/react-icon-large.jpg";

export default function Main() {
    return (
        <MainSection>
            <Title>Fun facts about React</Title>
            <List>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 200K stars on GitHub</li>
                <li>Is maintained by Meta</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </List>
        </MainSection>
    );
}

const MainSection = styled.main`
    padding: 60px 30px;
    background-color: #24272e;
    color: white;
    min-height: 100vh;

    background-image: url(${reactLogo});
    background-repeat: no-repeat;
    background-position: 200% 20% ;
    background-size: 500px;
    

`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
`;
const List = styled.ul`
  margin-top: 46px;
  max-width: 400px;
  padding-left: 20px;
  font-size: 1.2rem;
  line-height: 1.8;

  li {
    padding-block: 10px;
    line-height: 1.4;
  }

  li::marker {
    color: #61DAFB;
      font-size: 1.5rem;
  }
`;
