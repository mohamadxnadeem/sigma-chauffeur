"use client";

import styled from "styled-components";
import Container from "./Container";

const Wrapper = styled.footer`
  padding: 48px 0;
  background: ${({ theme }) => theme.colors.white};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const FooterInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Text = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.7;
`;

const ContactRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
`;

const ContactLink = styled.a`
  color: ${({ theme }) => theme.colors.heading};
  font-weight: 600;
  font-size: 0.92rem;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export default function Footer() {
  return (
    <Wrapper>
      <Container>
        <FooterInner>
          <Text>
            © Sigma VIP. Serving Cape Town since 2021 — luxury chauffeur
            services, private tours, and premium travel experiences.
          </Text>

          <ContactRow>
            <ContactLink href="tel:+27711081227">
              ✆ +27 71 108 1227
            </ContactLink>
            <ContactLink href="mailto:info@sigmavip.co.za">
              info@sigmavip.co.za
            </ContactLink>
          </ContactRow>
        </FooterInner>
      </Container>
    </Wrapper>
  );
}
