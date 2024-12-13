import styled from '@emotion/styled';

const Container = styled.div`
  font-size: 1.2rem;
`;

type LabelProps = {
  readonly text: string;
};

export default function Label({ text }: LabelProps) {
  return <Container>{text}</Container>;
}
