import styled from "styled-components";
import DefaultLink from "../components/Link";

const Container = styled.div`
  margin-top: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Content = styled.div`
  margin-top: 200px;
  width: 1000px;
  display: flex;
  justify-content: space-around;
`;

const Link = styled(DefaultLink)`
  border: 1px solid gray;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    border: 3px solid #CCE;
    color: #CCE;
  }
`;

const TresEnRaya = () => {
  return (
    <Container>
      <DefaultLink to="/">Go back</DefaultLink>
      <Content>
        <Link to="/tres/indi">Player vs Ia</Link>
        <Link to="/tres/multi">Player vs Player</Link>
      </Content>
    </Container>
  );
};

export default TresEnRaya;
