import styled from '@emotion/styled';

const Container = styled.div`
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #eeeeee;
`;

export default function NotFound() {
  return (
    <Container>
      404
      <br />
      NOT FOUND
    </Container>
  );
}
