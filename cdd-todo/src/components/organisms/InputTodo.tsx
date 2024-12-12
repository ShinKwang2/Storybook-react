import { useState } from 'react';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  align-item: center;
  justify-content: center;
`;

export default function InputTodo() {
  const [todo, setTodo] = useState('');

  const onAdd = () => {
    setTodo('');
  };

  return (
    <Container>
      <Input value={todo} onChange={setTodo} />
      <Button label="추가" color="#304FFE" onClick={onAdd} />
    </Container>
  );
}
