"use client";

import Image from "next/image";
import styled from "styled-components";
import {
  Container,
  Section,
  SectionEyebrow,
  SectionHeader,
  SectionTitle,
} from "./shared";

const Grid = styled.div`
  display: grid;
  gap: 18px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Card = styled.div`
  padding: 28px 24px;
  border-radius: 22px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.soft};
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const Stars = styled.div`
  color: #c9a84c;
  font-size: 0.95rem;
  letter-spacing: 0.06em;
`;

const ReviewText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.heading};
  font-size: 1rem;
  line-height: 1.8;
  flex: 1;
`;

const AuthorRow = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const Avatar = styled.div`
  width: 46px;
  height: 46px;
  border-radius: 999px;
  overflow: hidden;
  background: rgba(201, 168, 76, 0.1);
  flex-shrink: 0;
  position: relative;
`;

const AuthorInfo = styled.div``;

const AuthorName = styled.div`
  color: ${({ theme }) => theme.colors.heading};
  font-weight: 700;
  font-size: 0.95rem;
`;

const ServiceLabel = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.82rem;
  font-weight: 600;
  margin-top: 2px;
`;

const testimonials = [
  {
    name: "Nadine",
    image: "/images/testimonials/nadine.jpg",
    service: "Multi-Day Package",
    review:
      "Booked Sigma VIP for five days: airport transfer on arrival, Peninsula day tour, Winelands, Hermanus, and a final transfer back. Same driver the entire time. By day three he felt like part of the family. The consistency made the whole trip effortless.",
  },
  {
    name: "Saad",
    image: "/images/testimonials/saad.jpg",
    service: "Mercedes V-Class Private Hire",
    review:
      "Needed a vehicle for my family of seven across three days in Cape Town. The V-Class was spacious, the driver was punctual every morning, and the all-inclusive pricing made budgeting simple. We could focus entirely on enjoying Cape Town.",
  },
];

export default function MultiDayTestimonials() {
  return (
    <Section>
      <Container>
        <SectionHeader>
          <SectionEyebrow>Client Experiences</SectionEyebrow>
          <SectionTitle>What Multi-Day Clients Say</SectionTitle>
        </SectionHeader>

        <Grid>
          {testimonials.map((t) => (
            <Card key={t.name}>
              <Stars>★★★★★</Stars>
              <ReviewText>{`"${t.review}"`}</ReviewText>
              <AuthorRow>
                <Avatar>
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="46px"
                  />
                </Avatar>
                <AuthorInfo>
                  <AuthorName>{t.name}</AuthorName>
                  <ServiceLabel>{t.service}</ServiceLabel>
                </AuthorInfo>
              </AuthorRow>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
