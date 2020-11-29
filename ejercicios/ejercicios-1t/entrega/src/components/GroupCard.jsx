import styled from 'styled-components';

const Container = styled.div`
  height: 205px;
  padding: 40px;
  background-color: #ccc;
  color: #38433f;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  margin: 20px;
`;

const People = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const Title = styled.h2`
  font-size: 25px;
  font-weight: 600;
  text-align: center;
`;

const Name = styled.h2`
  margin-top: 10px;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;
`;


const GroupCard = ({group, number}) => {
  return (
    <Container>
      <Title>Grupo {number}</Title>
      <People>
        {group.map(name => (
            <Name key={name}>{name}</Name>
        ))}
      </People>
    </Container>
  );
}

export default GroupCard;