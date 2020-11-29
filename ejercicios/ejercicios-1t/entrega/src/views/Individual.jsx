import { useState, useCallback } from "react";
import Link from "../components/Link";
import Indicator from "../components/Indicator";
import Square from "../components/Square";
import styled from 'styled-components';

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

const Board = styled.div`
    margin-top: 100px;
`;

const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Individual = () => {
  const [boardValues, setBoardValues] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [victory, setVictory] = useState(0);

  const handleClickSquare = useCallback(
    (pos) => {
      const newBoardValues = boardValues.map((value, index) => {
        if (pos === index && !value) {
          return "X";
        } else {
          return value;
        }
      });

      setBoardValues(newBoardValues);
    },
    [boardValues, setBoardValues]
  );

  return (
    <Container>
      <Link to="/tres">Go back</Link>
      <Header>
        <Indicator text="Numero de victorias: " value={victory} />
      </Header>

      <Board>
        <Row>
          <Square
            pos={0}
            value={boardValues[0]}
            handleClickSquare={handleClickSquare}
          />
          <Square
            pos={1}
            value={boardValues[1]}
            handleClickSquare={handleClickSquare}
          />
          <Square
            pos={2}
            value={boardValues[2]}
            handleClickSquare={handleClickSquare}
          />
        </Row>
        <Row>
          <Square
            pos={3}
            value={boardValues[3]}
            handleClickSquare={handleClickSquare}
          />
          <Square
            pos={4}
            value={boardValues[4]}
            handleClickSquare={handleClickSquare}
          />
          <Square
            pos={5}
            value={boardValues[5]}
            handleClickSquare={handleClickSquare}
          />
        </Row>
        <Row>
          <Square
            pos={6}
            value={boardValues[6]}
            handleClickSquare={handleClickSquare}
          />
          <Square
            pos={7}
            value={boardValues[7]}
            handleClickSquare={handleClickSquare}
          />
          <Square
            pos={8}
            value={boardValues[8]}
            handleClickSquare={handleClickSquare}
          />
        </Row>
      </Board>
    </Container>
  );
};

export default Individual;
