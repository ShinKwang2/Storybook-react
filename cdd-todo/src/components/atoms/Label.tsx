import styled from '@emotion/styled';

const Container = styled.div`
  flex: 1;
  font-size: 1.2rem;
  margin-right: 16px;
`;

type LabelProps = {
  readonly label: string;
};

export default function Label({ label }: LabelProps) {
  return <Container>{label}</Container>;
}
