import styled from "styled-components";
import UserAvatar from "./UserAvatar";
import MobileMenu from "./MobileMenu";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: space-between;
`;

function MobileHeader() {
  return (
    <StyledHeader>
      <UserAvatar />
      <MobileMenu />
    </StyledHeader>
  );
}

export default MobileHeader;
