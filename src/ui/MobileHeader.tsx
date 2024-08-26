import styled from "styled-components";
import UserAvatar from "./UserAvatar";
import MobileMenu from "./MobileMenu";
import { useState } from "react";
import MainNav from "./MainNav";

const StyledHeader = styled.header<{ isOpen: boolean }>`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: ${({ isOpen }) =>
    isOpen ? "none" : "1px solid var(--color-grey-100);"};
  transition: none;

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: space-between;
`;

function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <StyledHeader isOpen={isOpen}>
        <UserAvatar />
        <MobileMenu isOpen={isOpen} toggleNavbar={toggleNavbar} />
      </StyledHeader>
      {isOpen && <MainNav />}
    </>
  );
}

export default MobileHeader;
