import styled from 'styled-components';
import Link from '../components/Link';

const Container = styled.div`
  width: 1000px;
  margin: 450px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Main = () => {
  return (
    <Container>
      <Link to="/among">Among Us</Link>
      <Link to="/tres">Tres en raya</Link>
      <Link to="/groups">Creación Grupos</Link>
    </Container>
  );
}

export default Main;
