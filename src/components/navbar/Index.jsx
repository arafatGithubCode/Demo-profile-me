import { useState } from "react";
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";
import {
  ButtonContainer,
  GitHubButton,
  MobileIcon,
  MobileLink,
  MobileMenu,
  MobileMenuItems,
  Nav,
  NavContainer,
  NavItems,
  NavLink,
  NavLogo,
} from "./NavbarStyleComp";
import { Bio } from "../../data/constant";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/">
          <a
            style={{
              display: "flex",
              gap: "5px",
              alignItems: "center",
              color: "white",
              marginBottom: "20",
              cursor: "pointer",
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "1.5rem",
            }}
          >
            <DiCssdeck size="3rem" />
            <span>Portfolio</span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => setIsOpen(!isOpen)} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#project">Project</NavLink>
          <NavLink href="#education">Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">
            Github Profile
          </GitHubButton>
        </ButtonContainer>
        {isOpen && (
          <MobileMenu>
            <MobileMenuItems>
              <MobileLink href="#about" onClick={() => setIsOpen(!isOpen)}>
                About
              </MobileLink>
              <MobileLink href="#skills" onClick={() => setIsOpen(!isOpen)}>
                Skills
              </MobileLink>
              <MobileLink href="#experience" onClick={() => setIsOpen(!isOpen)}>
                Experience
              </MobileLink>
              <MobileLink href="#projects" onClick={() => setIsOpen(!isOpen)}>
                Projects
              </MobileLink>
              <MobileLink href="#education" onClick={() => setIsOpen(!isOpen)}>
                Education
              </MobileLink>
              <GitHubButton
                href={Bio.github}
                target="_blank"
                style={{ padding: "5px 20px", fontSize: "1.2rem" }}
              >
                Github Profile
              </GitHubButton>
            </MobileMenuItems>
          </MobileMenu>
        )}
      </NavContainer>
    </Nav>
  );
};

export default Index;
