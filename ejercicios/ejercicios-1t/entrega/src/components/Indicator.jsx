import styled from "styled-components";

const Container = styled.div`
  width: 280px;
  padding: 20px;
  background-color: gray;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 15px;
`;

const Text = styled.h4`
  font-size: 18px;
  font-weight: 500;
`;

const Value = styled.span`
  font-size: 18px;
`;

const Indicator = ({ text, value }) => {
  return (
    <Container>
      <Text>{text}</Text>
      <Value>{value}</Value>
    </Container>
  );
};

export default Indicator;
