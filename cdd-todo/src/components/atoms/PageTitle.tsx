import styled from '@emotion/styled';

const Container = styled.h1`
  margin-top: 0;
`;

type PageTitleProps = {
  readonly title: string;
};

export default function PageTitle({ title }: PageTitleProps) {
  return <Container>{title}</Container>;
}
