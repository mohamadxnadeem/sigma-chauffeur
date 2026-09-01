"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styled from "styled-components";

import { testimonials } from "./data";

const sigmaTestimonials = testimonials.filter((t) => t.brand === "sigma");

const Section = styled.section`
  padding: 80px 0;
  background: ${({ theme }) => theme.colors.background};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 96px 0;
  }
`;

const Container = styled.div`
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: min(1180px, calc(100% - 64px));
  }
`;

const Header = styled.div`
  max-width: 760px;
  margin-bottom: 32px;
`;

const Eyebrow = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 12px;
`;

const Title = styled.h2`
  margin: 0 0 12px;
  color: ${({ theme }) => theme.colors.heading};
  font-size: 2rem;
  line-height: 1.08;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2.6rem;
  }
`;

const Description = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.85;
`;

const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 24px;
`;

const Controls = styled.div`
  display: flex;
  gap: 10px;
`;

const Arrow = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 14px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.heading};
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadows.soft};
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.card};
    border-color: rgba(201, 168, 76, 0.18);
  }
`;

const Slider = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 86%;
  gap: 18px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  padding-bottom: 8px;

  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-auto-columns: 60%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-auto-columns: 42%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-auto-columns: 31%;
  }
`;

const Card = styled.div`
  scroll-snap-align: start;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 22px;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.soft};
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 16px;
`;

const Avatar = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  overflow: hidden;
  flex: 0 0 auto;
  border: 2px solid rgba(201, 168, 76, 0.12);
  box-shadow: 0 8px 20px rgba(201, 168, 76, 0.1);
  position: relative;
  background: rgba(201, 168, 76, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AvatarInitials = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1;
`;

const ClientMeta = styled.div`
  min-width: 0;
`;

const Name = styled.div`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.heading};
  margin-bottom: 6px;
  line-height: 1.2;
`;

const VerifiedBadge = styled.div`
  display: inline-flex;
  align-items: center;
  min-height: 28px;
  padding: 0 10px;
  border-radius: 999px;
  background: rgba(201, 168, 76, 0.08);
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.74rem;
  font-weight: 700;
`;

const Stars = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: 14px;
  color: #d4a017;
  font-size: 0.95rem;
  letter-spacing: 0.04em;
`;

const Review = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.8;
  font-size: 0.98rem;
  flex: 1;
`;

const FooterNote = styled.div`
  margin-top: 18px;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.78rem;
  font-weight: 700;
`;

const GoogleLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 24px;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.88rem;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

function StarRating({ count = 5 }: { count?: number }) {
  return <>{Array.from({ length: count }).map((_, i) => <span key={i}>★</span>)}</>;
}

export default function TestimonialsSection() {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const autoScrollRef = useRef<number | null>(null);

  const scroll = (dir: "left" | "right") => {
    if (!sliderRef.current) return;

    const amount = sliderRef.current.clientWidth * 0.9;

    sliderRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  const stopAutoScroll = () => {
    if (autoScrollRef.current) {
      window.clearInterval(autoScrollRef.current);
      autoScrollRef.current = null;
    }
  };

  const startAutoScroll = () => {
    if (!sliderRef.current) return;

    stopAutoScroll();

    autoScrollRef.current = window.setInterval(() => {
      const slider = sliderRef.current;
      if (!slider) return;

      const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
      const nextPosition = slider.scrollLeft + slider.clientWidth * 0.9;

      if (nextPosition >= maxScrollLeft - 10) {
        slider.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        slider.scrollBy({ left: slider.clientWidth * 0.9, behavior: "smooth" });
      }
    }, 4200);
  };

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, []);

  return (
    <Section>
      <Container>
        <Header>
          <Eyebrow>Client Reviews</Eyebrow>
          <Title>Trusted by Executives, PAs, and Private Clients</Title>
          <Description>
            Feedback from C-suite executives, personal assistants, and private
            clients who rely on Sigma VIP for chauffeur hire in Cape Town.
          </Description>
        </Header>

        <TopBar>
          <Controls>
            <Arrow type="button" aria-label="Scroll testimonials left" onClick={() => scroll("left")}>
              ←
            </Arrow>
            <Arrow type="button" aria-label="Scroll testimonials right" onClick={() => scroll("right")}>
              →
            </Arrow>
          </Controls>
        </TopBar>

        <Slider
          ref={sliderRef}
          onMouseEnter={stopAutoScroll}
          onMouseLeave={startAutoScroll}
          onTouchStart={stopAutoScroll}
          onTouchEnd={startAutoScroll}
        >
          {sigmaTestimonials.map((item, index) => (
            <Card key={`${item.name}-${index}`}>
              <CardHeader>
                <Avatar>
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="64px"
                    />
                  ) : (
                    <AvatarInitials aria-hidden="true">
                      {item.name.charAt(0).toUpperCase()}
                    </AvatarInitials>
                  )}
                </Avatar>

                <ClientMeta>
                  <Name>{item.name}</Name>
                  <VerifiedBadge>Google Review</VerifiedBadge>
                </ClientMeta>
              </CardHeader>

              <Stars aria-label="5 star rating">
                <StarRating />
              </Stars>

              <Review>"{item.review}"</Review>

              {item.service && <FooterNote>{item.service}</FooterNote>}
            </Card>
          ))}
        </Slider>

        <GoogleLink
          href="https://share.google/MGmGJd2UjR7Z1EUFp"
          target="_blank"
          rel="noopener noreferrer"
        >
          ★ Read our reviews on Google
        </GoogleLink>
      </Container>
    </Section>
  );
}
