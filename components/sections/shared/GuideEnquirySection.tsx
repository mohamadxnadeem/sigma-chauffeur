"use client";

import { useState, FormEvent } from "react";
import styled from "styled-components";
import Button from "../../common/Button";
import { buildWhatsAppLink } from "../../../lib/whatsapp";
import { trackWhatsAppClick } from "../../../lib/tracking";

const Section = styled.section`
  padding: 80px 0;
  background: ${({ theme }) => theme.colors.background};

  @media (min-width: 768px) {
    padding: 100px 0;
  }
`;

const Container = styled.div`
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: min(1180px, calc(100% - 64px));
  }
`;

const Inner = styled.div`
  display: grid;
  gap: 40px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: start;
  }
`;

const LeftCol = styled.div``;

const Eyebrow = styled.div`
  margin-bottom: 12px;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const Title = styled.h2`
  margin: 0 0 14px;
  color: ${({ theme }) => theme.colors.heading};
  font-size: 1.9rem;
  line-height: 1.1;

  @media (min-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Description = styled.p`
  margin: 0 0 28px;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 1rem;
  line-height: 1.9;
`;

const TrustList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TrustItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.93rem;
  line-height: 1.5;
`;

const TrustCheck = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  flex-shrink: 0;
  font-size: 0.85rem;
  margin-top: 2px;
`;

const FormCard = styled.div`
  padding: 28px 24px;
  border-radius: 22px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.soft};
`;

const FormTitle = styled.h3`
  margin: 0 0 20px;
  color: ${({ theme }) => theme.colors.heading};
  font-size: 1.1rem;
  line-height: 1.3;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const FieldWrap = styled.div``;

const Label = styled.label`
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.heading};
  margin-bottom: 6px;
`;

const Input = styled.input`
  width: 100%;
  height: 46px;
  padding: 0 14px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.heading};
  font-size: 0.95rem;
  box-sizing: border-box;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: rgba(201, 168, 76, 0.5);
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  min-height: 90px;
  padding: 12px 14px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.heading};
  font-size: 0.95rem;
  box-sizing: border-box;
  resize: vertical;
  transition: border-color 0.2s ease;
  font-family: inherit;
  line-height: 1.6;

  &:focus {
    outline: none;
    border-color: rgba(201, 168, 76, 0.5);
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

const SuccessCard = styled.div`
  padding: 20px;
  border-radius: 14px;
  background: rgba(201, 168, 76, 0.08);
  border: 1px solid rgba(201, 168, 76, 0.25);
  color: ${({ theme }) => theme.colors.heading};
  font-size: 0.95rem;
  line-height: 1.65;
  text-align: center;
`;

const PrivacyNote = styled.p`
  margin: 8px 0 0;
  font-size: 0.78rem;
  color: ${({ theme }) => theme.colors.textMuted};
  text-align: center;
  line-height: 1.5;
`;

type Props = {
  eyebrow?: string;
  title?: string;
  description?: string;
  formTitle?: string;
  trustPoints?: string[];
  waContext: string;
  trackingSource: string;
};

export default function GuideEnquirySection({
  eyebrow = "Arrange Your Day",
  title = "Tell Us What You Have in Mind",
  description = "Send us your dates and preferences and we will confirm availability, suggest a route, and have everything arranged before you arrive.",
  formTitle = "Send an Enquiry",
  trustPoints = [
    "Response within a few hours",
    "No commitment required to receive a quote",
    "Private vehicle and driver throughout",
    "Flexible — change plans any time",
  ],
  waContext,
  trackingSource,
}: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [groupSize, setGroupSize] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const lines = [
      `Hi, I'd like to arrange ${waContext}.`,
      `Name: ${name}`,
      email ? `Email: ${email}` : null,
      date ? `Preferred date: ${date}` : null,
      groupSize ? `Group size: ${groupSize}` : null,
      notes ? `Details: ${notes}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    trackWhatsAppClick({ source: trackingSource, label: "Guide Enquiry Form" });
    window.open(buildWhatsAppLink(lines), "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  return (
    <Section>
      <Container>
        <Inner>
          <LeftCol>
            <Eyebrow>{eyebrow}</Eyebrow>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <TrustList>
              {trustPoints.map((point) => (
                <TrustItem key={point}>
                  <TrustCheck>✦</TrustCheck>
                  {point}
                </TrustItem>
              ))}
            </TrustList>
          </LeftCol>

          <FormCard>
            <FormTitle>{formTitle}</FormTitle>

            {submitted ? (
              <SuccessCard>
                Opening WhatsApp with your enquiry. We&apos;ll come back to you
                shortly to confirm availability and share a quote.
              </SuccessCard>
            ) : (
              <Form onSubmit={handleSubmit}>
                <FieldWrap>
                  <Label htmlFor={`${trackingSource}-name`}>Your Name *</Label>
                  <Input
                    id={`${trackingSource}-name`}
                    type="text"
                    placeholder="e.g. James Richards"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </FieldWrap>

                <FieldWrap>
                  <Label htmlFor={`${trackingSource}-email`}>Email Address</Label>
                  <Input
                    id={`${trackingSource}-email`}
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FieldWrap>

                <FieldWrap>
                  <Label htmlFor={`${trackingSource}-date`}>Preferred Date</Label>
                  <Input
                    id={`${trackingSource}-date`}
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </FieldWrap>

                <FieldWrap>
                  <Label htmlFor={`${trackingSource}-group`}>Group Size</Label>
                  <Input
                    id={`${trackingSource}-group`}
                    type="text"
                    placeholder="e.g. 2 adults"
                    value={groupSize}
                    onChange={(e) => setGroupSize(e.target.value)}
                  />
                </FieldWrap>

                <FieldWrap>
                  <Label htmlFor={`${trackingSource}-notes`}>
                    Preferences or Questions
                  </Label>
                  <Textarea
                    id={`${trackingSource}-notes`}
                    placeholder="Specific estates, experiences, accessibility needs, or anything else..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                </FieldWrap>

                <Button
                  as="button"
                  type="submit"
                  style={{ width: "100%", cursor: "pointer" }}
                >
                  Send Enquiry via WhatsApp
                </Button>

                <PrivacyNote>
                  Your details are used only to arrange this booking. We do not
                  share them with third parties.
                </PrivacyNote>
              </Form>
            )}
          </FormCard>
        </Inner>
      </Container>
    </Section>
  );
}
