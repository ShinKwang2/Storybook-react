import styled from '@emotion/styled';

const TextInput = styled.input`
  font-size: 1.2rem;
  padding: 8px;
`;

type InputProps = {
  readonly value: string;
  readonly onChange: (text: string) => void;
};

export default function Input({ value, onChange }: InputProps) {
  return <TextInput value={value} onChange={(e) => onChange(e.target.value)} />;
}
