import { Link as linkR } from "react-router-dom";
import styled from "styled-components";
// import _default from "../../themes/default";

export const Nav = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: all 0.8s ease;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  height: 60px;
  padding: 0 24px;
  z-index: 1;
`;

export const NavLogo = styled(linkR)`
  width: 80%;
  padding: 0 6px;
  text-decoration: none;
  display: flex;
  justify-content: start;
  align-items: center;
  @media screen and (max-width: 640px) {
    padding: 0 0;
  }
`;

export const span = styled.div``;

export const NavItems = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 6px;
  list-style: none;
  gap: 32px;
  @media screen and (max-width: 786px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  cursor: pointer;
  font-weight: 500;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  &:active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

export const GitHubButton = styled.a`
  color: ${({ theme }) => theme.primary};
  border: 1.8px solid ${({ theme }) => theme.primary};
  text-decoration: none;
  border-radius: 1rem;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  font-size: 1.2rem;
  white-space: no-wrap;
  font-weight: 500;
  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }
  @media screen and (max-width: 786px) {
    font-size: 14px;
  }
`;

export const ButtonContainer = styled.div`
  width: 800%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`;

export const MobileMenu = styled.div`
  position: absolute;
  top: 80px;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background-color: ${({ theme }) => theme.card_light + 50};
  transition: all 0.6s ease-in-out;
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ isOpen }) => (isOpen ? "0" : "100%")};
  z-index: ${({ isOpen }) => (isOpen ? "-1000" : "1000")};
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(-100%)" : "translateY(0)"};
`;

export const MobileMenuItems = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 1.2rem;
  list-style: none;
  width: 100%;
  height: 100%;
`;

export const MobileLink = styled(linkR)`
  text-decoration: none;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  font-size: 1.2rem;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

export const MobileNabLogo = styled(linkR)``;

export const MobileMenuButton = styled.div``;
