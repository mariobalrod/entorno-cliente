import styled from 'styled-components';
import { Link as DefaultLink } from 'react-router-dom'

const Container = styled.div`
  width: 1000px;
  margin: 450px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Link = styled(DefaultLink)`
    width: 260px;
    color:  #ccc;
    font-size: 30px;
    font-weight: 700;
    text-align: center;
    text-decoration: none;

    :hover {
        color: #cca;
    }
`;

const Main = () => {
    return (
        <Container>
            <Link to="/among">Among Us</Link>
            <Link to="/tres">Tres en raya</Link>
            <Link to="/groups">Creación Grupos</Link>
        </Container>
    )
}

export default Main
