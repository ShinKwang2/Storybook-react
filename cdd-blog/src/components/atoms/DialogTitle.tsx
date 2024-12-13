import styled from '@emotion/styled';

const Title = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 16px;
`;

type DialogTitleProps = {
  readonly title: string;
};

export default function DialogTitle({ title }: DialogTitleProps) {
  return <Title>{title}</Title>;
}
