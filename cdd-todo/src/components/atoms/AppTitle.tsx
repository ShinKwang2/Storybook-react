import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Container = styled(Link)`
  color: #ffffff;
  font-size: 20px;
  text-decoration: none;
  cursor: pointer;
`;

export default function AppTitle() {
  return <Container to="/">할일목록앱</Container>;
}
