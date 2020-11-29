import styled from "styled-components";

const Container = styled.div`
  width: 100px;
  height: 100px;
  padding: 20px;
  background-color: white;
  color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid gray;
`;

const Value = styled.span`
  font-size: 78px;
  font-weight: 600;
`;

const Indicator = ({ pos, value, handleClickSquare }) => {
  return (
    <Container onClick={() => handleClickSquare(pos)}>
      <Value>{value}</Value>
    </Container>
  );
};

export default Indicator;