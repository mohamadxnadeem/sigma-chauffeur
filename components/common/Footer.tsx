"use client";

import Link from "next/link";
import styled from "styled-components";
import { buildWhatsAppLink, buildGeneralWhatsAppMessage } from "../../lib/whatsapp";
import { trackWhatsAppClick, trackPhoneClick } from "../../lib/tracking";

const whatsappLink = buildWhatsAppLink(
  "Hi, I'd like to make a booking. Details:"
);

const Wrapper = styled.footer`
  padding: 64px 0 40px;
  background: #0D0D0D;
  color: rgba(255, 255, 255, 0.7);
`;

const Container = styled.div`
  width: min(1120px, calc(100% - 32px));
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: min(1120px, calc(100% - 64px));
  }
`;

const TopRow = styled.div`
  display: grid;
  gap: 40px;
  margin-bottom: 48px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1.4fr 1fr 1fr;
    gap: 32px;
  }
`;

const BrandCol = styled.div``;

const BrandName = styled.div`
  color: #C9A84C;
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  margin-bottom: 14px;
`;

const BrandText = styled.p`
  margin: 0;
  line-height: 1.8;
  font-size: 0.92rem;
  max-width: 360px;
`;

const ColTitle = styled.div`
  color: #ffffff;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 18px;
`;

const NavList = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const NavLink = styled(Link)`
  color: rgba(255, 255, 255, 0.65);
  text-decoration: none;
  font-size: 0.92rem;
  transition: color 0.2s ease;

  &:hover {
    color: #C9A84C;
  }
`;

const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ContactLink = styled.a`
  color: rgba(255, 255, 255, 0.65);
  text-decoration: none;
  font-size: 0.92rem;
  transition: color 0.2s ease;

  &:hover {
    color: #C9A84C;
  }
`;

const WhatsAppLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 4px;
  padding: 10px 18px;
  border-radius: 12px;
  background: rgba(201, 168, 76, 0.1);
  border: 1px solid rgba(201, 168, 76, 0.18);
  color: #C9A84C;
  font-weight: 700;
  font-size: 0.88rem;
  text-decoration: none;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(201, 168, 76, 0.16);
  }
`;

const Divider = styled.div`
  height: 1px;
  background: rgba(255, 255, 255, 0.08);
  margin-bottom: 24px;
`;

const BottomRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Copyright = styled.p`
  margin: 0;
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.4);
`;

const Legal = styled.p`
  margin: 0;
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.4);
`;

export default function Footer() {
  return (
    <Wrapper>
      <Container>
        <TopRow>
          <BrandCol>
            <BrandName>Sigma VIP</BrandName>
            <BrandText>
              Private chauffeur hire, multi-day packages, and bespoke travel
              across Cape Town and the Western Cape. One vehicle, one chauffeur,
              your schedule.
            </BrandText>
          </BrandCol>

          <div>
            <ColTitle>Services</ColTitle>
            <NavList>
              <NavLink href="/airport-transfers-cape-town">Airport Transfers</NavLink>
              <NavLink href="/multi-day-packages-cape-town">Multi-Day Packages</NavLink>
              <NavLink href="/7-day-cape-town-itinerary">7-Day Cape Town Itinerary</NavLink>
              <NavLink href="/best-wine-farms-in-cape-town">Best Wine Farms</NavLink>
              <NavLink href="/best-activities-to-do-in-cape-town">Best Activities in Cape Town</NavLink>
            </NavList>
          </div>

          <div>
            <ColTitle>Contact</ColTitle>
            <ContactList>
              <ContactLink
                href="tel:+27711081227"
                onClick={() =>
                  trackPhoneClick({ source: "footer", label: "Call" })
                }
              >
                +27 71 108 1227
              </ContactLink>
              <WhatsAppLink
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackWhatsAppClick({
                    source: "footer",
                    label: "WhatsApp Footer",
                  })
                }
              >
                WhatsApp Us
              </WhatsAppLink>
            </ContactList>
          </div>
        </TopRow>

        <Divider />

        <BottomRow>
          <Copyright>
            © {new Date().getFullYear()} Sigma VIP. All rights reserved.
          </Copyright>
          <Legal>Cape Town, Western Cape, South Africa</Legal>
        </BottomRow>
      </Container>
    </Wrapper>
  );
}
