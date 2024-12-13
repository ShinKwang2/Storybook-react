import styled from '@emotion/styled';

const Input = styled.input`
  font-size: 1.2rem;
`;

type InputTextProps = {
  readonly value: string;
  readonly onChange: (text: string) => void;
};

export default function InputText({ value, onChange }: InputTextProps) {
  return <Input value={value} onChange={(e) => onChange(e.target.value)} />;
}
