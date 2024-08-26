import { useState } from "react";
import { HiOutlineBars4, HiOutlineXCircle } from "react-icons/hi2";
import styled from "styled-components";
import MainNav from "./MainNav";

const StyledMobileNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const MenuIcon = styled.div`
  background: none;
  border: none;
  border-radius: var(--border-radius-sm);
  padding: 0.25rem;
  transition: all 0.2s;

  & svg {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledMobileNav>
      <MenuIcon onClick={toggleNavbar}>
        {isOpen ? <HiOutlineXCircle /> : <HiOutlineBars4 />}
      </MenuIcon>
      {isOpen && <MainNav />}
    </StyledMobileNav>
  );
}
