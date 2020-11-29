import styled from 'styled-components';
import { Link as DefaultLink } from 'react-router-dom';

const Link = styled(DefaultLink)`
  width: 260px;
  color: #ccc;
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  text-decoration: none;

  :hover {
    color: #cca;
  }
`;

export default Link;