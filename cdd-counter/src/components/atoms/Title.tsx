import styled from '@emotion/styled';

const Label = styled.h1`
  margin-bottom: 32px;
`;

type TitleProps = {
  readonly title: string;
};

export default function Title({ title }: TitleProps) {
  return <Label>{title}</Label>;
}
