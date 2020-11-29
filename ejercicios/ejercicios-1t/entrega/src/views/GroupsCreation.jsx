import styled from "styled-components";
import Link from "../components/Link";

const Container = styled.div`
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Content = styled.div`
  margin-top: 50px;
  width: 1000px;
  display: flex;
  flex-wrap: wrap;
`;

const GroupsCreation = () => {
  return (
    <Container>
      <Link to="/">Go back</Link>
      <Content></Content>
    </Container>
  );
};

export default GroupsCreation;
