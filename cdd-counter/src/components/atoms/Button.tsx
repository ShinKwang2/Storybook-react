import styled from '@emotion/styled';

const Container = styled.button`
  border: 0;
  color: #ffffff;
  background-color: #ff5722;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 4px;

  &:hover {
    background-color: #ff5722;
    opacity: 0.8;
  }

  &:active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

type ButtonProps = {
  readonly label: string;
  readonly onClick?: () => void;
};

export default function Button({ label, onClick }: ButtonProps) {
  return <Container onClick={onClick}>{label}</Container>;
}
