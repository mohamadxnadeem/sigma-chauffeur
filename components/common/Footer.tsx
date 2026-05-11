"use client";

import styled from "styled-components";
import Container from "./Container";

const Wrapper = styled.footer`
  padding: 48px 0;
  background: ${({ theme }) => theme.colors.white};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const Text = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.7;
`;

export default function Footer() {
  return (
    <Wrapper>
      <Container>
        <Text>
          © Sigma VIP. Serving Cape Town since 2021 — luxury chauffeur
          services, private tours, and premium travel experiences.
        </Text>
      </Container>
    </Wrapper>
  );
}