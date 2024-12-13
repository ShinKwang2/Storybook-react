import styled from '@emotion/styled';

const Body = styled.div`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

type BlogBodyProps = {
  readonly body: string;
};

export default function BlogBody({ body }: BlogBodyProps) {
  return <Body>{body}</Body>;
}
