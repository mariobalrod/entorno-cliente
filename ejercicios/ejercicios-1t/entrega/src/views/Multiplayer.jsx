import React from "react";
import Link from "../components/Link";
import Indicator from "../components/Indicator";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Header = styled.div`
  margin-top: 50px;
  width: 800px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Multiplayer = () => {
  return (
    <Container>
      <Link to="/tres">Go back</Link>
      <Header>
        <Indicator text="Numero de victorias: " value="0" />
        <Indicator text="Turno de: " value="X" />
      </Header>
    </Container>
  );
};

export default Multiplayer;
