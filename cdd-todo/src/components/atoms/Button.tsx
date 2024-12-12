import styled from '@emotion/styled';

type ContainerProps = {
  readonly color: string;
};
type ButtonProps = {
  readonly label: string;
  readonly color?: string;
  readonly onClick?: () => void;
};

const Container = styled.button<ContainerProps>`
  border: 0;
  color: #ffffff;
  background-color: ${(props) => props.color};
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 4px;

  &:hover {
    background-color: ${(props) => props.color};
    opacity: 0.8;
  }

  &:active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

export default function Button({ label, color = '#ff5722', onClick }: ButtonProps) {
  return (
    <Container color={color} onClick={onClick}>
      {label}
    </Container>
  );
}
