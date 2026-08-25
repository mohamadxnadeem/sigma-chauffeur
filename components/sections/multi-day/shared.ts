"use client";

import styled from "styled-components";
import { buildWhatsAppLink } from "../../../lib/whatsapp";

export const whatsappLink = buildWhatsAppLink(
  "Hi, I'm interested in a multi-day chauffeur package in Cape Town. My dates and party size:"
);

export const PageWrap = styled.div``;

export const Container = styled.div`
  width: min(1120px, calc(100% - 32px));
  margin: 0 auto;

  @media (min-width: 768px) {
    width: min(1120px, calc(100% - 64px));
  }
`;

export const Section = styled.section`
  padding: 72px 0;
  background: ${({ theme }) => theme.colors.background};

  @media (min-width: 768px) {
    padding: 96px 0;
  }
`;

export const SectionWhite = styled.section`
  padding: 72px 0;
  background: ${({ theme }) => theme.colors.white};

  @media (min-width: 768px) {
    padding: 96px 0;
  }
`;

export const SectionHeader = styled.div`
  max-width: 760px;
  margin-bottom: 40px;
`;

export const SectionEyebrow = styled.div`
  margin-bottom: 12px;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const SectionTitle = styled.h2`
  margin: 0 0 14px;
  color: ${({ theme }) => theme.colors.heading};
  font-size: 2rem;
  line-height: 1.08;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const SectionText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 1rem;
  line-height: 1.9;
`;

export const Anchor = styled.a`
  text-decoration: none;
`;

export const StyledLink = styled.a`
  text-decoration: none;
`;
