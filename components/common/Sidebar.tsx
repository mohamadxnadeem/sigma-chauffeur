"use client";

import Link from "next/link";
import styled from "styled-components";
import { trackWhatsAppClick } from "../../lib/tracking";

const Overlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  inset: 0;
  background: rgba(13, 13, 13, 0.55);
  backdrop-filter: blur(3px);
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
  transition: 0.25s ease;
  z-index: 1200;
`;

const Drawer = styled.aside<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: min(360px, 88vw);
  height: 100vh;
  background: linear-gradient(180deg, #0D0D0D 0%, #1C1C1C 100%);
  box-shadow: 10px 0 30px rgba(13, 13, 13, 0.3);
  transform: translateX(${({ $isOpen }) => ($isOpen ? "0" : "-100%")});
  transition: transform 0.3s ease;
  z-index: 1300;
  padding: 24px;
  display: flex;
  flex-direction: column;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`;

const Title = styled.div`
  font-size: 1rem;
  font-weight: 700;
  color: white;
  letter-spacing: 0.04em;
`;

const CloseButton = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.14);
  color: white;
  cursor: pointer;
  font-size: 1.2rem;
  transition: 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.22);
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const NavLink = styled(Link)`
  padding: 14px 16px;
  border-radius: 14px;
  color: rgba(255, 255, 255, 0.92);
  font-weight: 600;
  transition: 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.12);
    color: white;
  }
`;

const Divider = styled.div`
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin: 8px 0;
`;

const WhatsAppButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 16px;
  padding: 14px 16px;
  border-radius: 14px;
  background: #25d366;
  color: white;
  font-weight: 700;
  text-decoration: none;
  transition: 0.2s ease;

  &:hover {
    background: #20bd5a;
  }
`;

const CallButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 16px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-weight: 700;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.15);
  transition: 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.18);
  }
`;

const FooterNote = styled.div`
  margin-top: auto;
  padding-top: 24px;
  color: rgba(255, 255, 255, 0.68);
  font-size: 0.9rem;
  line-height: 1.6;
`;

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      <Overlay $isOpen={isOpen} onClick={onClose} />
      <Drawer $isOpen={isOpen}>
        <TopRow>
          <Title>Sigma VIP</Title>
          <CloseButton onClick={onClose} aria-label="Close menu">
            ×
          </CloseButton>
        </TopRow>

        <Nav>
          <NavLink href="/" onClick={onClose}>
            Home
          </NavLink>
          <NavLink href="/chauffeur-services" onClick={onClose}>
            Chauffeur Services
          </NavLink>
          <NavLink href="/private-jet-transfer" onClick={onClose}>
            Private Jet Transfer
          </NavLink>

          <Divider />

          <NavLink href="/best-wine-farms-in-cape-town" onClick={onClose}>
            Wine Farms Guide
          </NavLink>
          <NavLink href="/best-activities-to-do-in-cape-town" onClick={onClose}>
            Cape Town Activities
          </NavLink>
          <NavLink href="/7-day-cape-town-itinerary" onClick={onClose}>
            7-Day Itinerary
          </NavLink>

          <Divider />

          <NavLink href="/contact" onClick={onClose}>
            Contact
          </NavLink>
        </Nav>

        <WhatsAppButton
          href="https://wa.me/27711081227"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            trackWhatsAppClick({
              source: "sidebar_menu",
              label: "WhatsApp — Sidebar",
            })
          }
        >
          WhatsApp Us
        </WhatsAppButton>

        <CallButton href="tel:+27711081227" style={{ marginTop: 10 }}>
          Call +27 71 108 1227
        </CallButton>

        <FooterNote>
          Luxury chauffeur services and private tours in Cape Town since 2021.
        </FooterNote>
      </Drawer>
    </>
  );
}
