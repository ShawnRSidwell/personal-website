import { HiOutlineBars4, HiOutlineXCircle } from "react-icons/hi2";
import styled from "styled-components";

interface MenuIconProps {
  isOpen: boolean;
}

const StyledMobileNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  position: relative; // Add this to position children absolutely if needed
`;

const MenuIcon = styled.div<MenuIconProps>`
  background: none;
  border: none;
  border-radius: var(--border-radius-sm);
  padding: 0.25rem;
  transition: all 0.2s;
  display: flex;
  justify-content: ${({ isOpen }) => (isOpen ? "flex-end" : "flex-start")};
  width: 100%;

  & svg {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

interface MobileMenuProps {
  isOpen: boolean;
  toggleNavbar: (isOpen: boolean) => void;
}

export default function MobileMenu({ isOpen, toggleNavbar }: MobileMenuProps) {
  return (
    <StyledMobileNav>
      <MenuIcon isOpen={isOpen} onClick={() => toggleNavbar(!isOpen)}>
        {isOpen ? <HiOutlineXCircle /> : <HiOutlineBars4 />}
      </MenuIcon>
    </StyledMobileNav>
  );
}
