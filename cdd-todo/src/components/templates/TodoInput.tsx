import styled from '@emotion/styled';

import Button from '../atoms/Button';
import PageTitle from '../atoms/PageTitle';
import InputTodo from '../organisms/InputTodo';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  padding: 32px;
  border-radius: 8px;
`;

const ButtonContainer = styled.div`
  position: absolute;
  right: 40px;
  bottom: 40px;
  z-index: 1;
`;

export default function TodoInput() {
  const navigate = useNavigate();

  return (
    <Container>
      <Contents>
        <PageTitle title="할 일 추가" />
        <InputTodo />
      </Contents>
      <ButtonContainer>
        <Button label="닫기" onClick={() => navigate('/')} />
      </ButtonContainer>
    </Container>
  );
}
