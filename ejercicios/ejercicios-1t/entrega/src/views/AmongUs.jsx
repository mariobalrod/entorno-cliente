import { useState, useCallback } from 'react';
import styled from 'styled-components';
import AmongCard from "../components/AmongCard";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  margin-top: 100px;
  width: 1000px;
  display: flex;
  flex-wrap: wrap;
`;

const playersData = [
  {
    id: 1,
    name: "Rodolfo",
    color: "red",
    votations: 0,
  },
  {
    id: 2,
    name: "Alfredo",
    color: "black",
    votations: 0,
  },
  {
    id: 3,
    name: "Manolo",
    color: "yellow",
    votations: 0,
  },
  {
    id: 4,
    name: "Antonio",
    color: "green",
    votations: 0,
  },
];

const AmongUs = () => {
  const [hideVotation, setHideVotation] = useState(true);

  const handleHideVotation = useCallback(() => {
    setHideVotation(false);
  }, [setHideVotation]);

  const handleVote = useCallback(
    (id) => {
      console.log("You voted to: ", id);
      handleHideVotation();
    },
    [handleHideVotation]
  );

  return (
    <Container>
      <Content>
        {playersData.map((player) => (
          <AmongCard
            key={player.id}
            player={player}
            handleVote={handleVote}
            hideVotation={hideVotation}
          />
        ))}
      </Content>
    </Container>
  );
}

export default AmongUs;
