import styled from '@emotion/styled';
import Label from '@/components/atoms/Label';
import Button from '@/components/atoms/Button';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

type TodoItemProps = {
  readonly label: string;
  readonly onDelete?: () => void;
};

export default function TodoItem({ label, onDelete }: TodoItemProps) {
  return (
    <Container>
      <Label label={label} />
      <Button label="삭제" onClick={onDelete} />
    </Container>
  );
}
