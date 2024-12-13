import styled from '@emotion/styled';

const Title = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

type BlogTitleProps = {
  readonly title: string;
};

export default function BlogTitle({ title }: BlogTitleProps) {
  return <Title>{title}</Title>;
}
