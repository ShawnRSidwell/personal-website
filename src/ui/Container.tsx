import styled from "styled-components";

const StyledContainer = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-200);
  margin-top: 2.4em;
  border-radius: 0.5rem;
  padding: 1.2rem 2.4rem;
  height: 90dvh;
`;

export default function Container({ children }: { children: React.ReactNode }) {
  return <StyledContainer>{children}</StyledContainer>;
}
