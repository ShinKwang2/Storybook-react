import { useState } from 'react';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function InputTodo() {
  const [todo, setTodo] = useState('');
  const navigate = useNavigate();

  const onAdd = () => {
    setTodo('');
    navigate('/');
  };

  return (
    <Container>
      <Input value={todo} onChange={setTodo} />
      <Button label="추가" color="#304FFE" onClick={onAdd} />
    </Container>
  );
}
