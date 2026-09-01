"use client";

import { useState, FormEvent } from "react";
import styled from "styled-components";
import Button from "../../common/Button";
import { Container, Anchor, whatsappLink } from "./shared";
import { trackWhatsAppClick, trackPhoneClick } from "../../../lib/tracking";
import { buildWhatsAppLink } from "../../../lib/whatsapp";

const Section = styled.section`
  padding: 80px 0;
  background: ${({ theme }) => theme.colors.background};

  @media (min-width: 768px) {
    padding: 104px 0;
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
  font-size: 2rem;
  line-height: 1.1;

  @media (min-width: 768px) {
    font-size: 2.4rem;
  }
`;

const Description = styled.p`
  margin: 0 0 28px;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 1rem;
  line-height: 1.9;
`;

const WhatsAppCta = styled(Anchor)`
  display: block;
`;

const OrDivider = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 20px 0;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.88rem;

  &::before,
  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: ${({ theme }) => theme.colors.border};
  }
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
  margin-top: 1px;
`;

const PhoneLink = styled.a`
  display: block;
  margin-top: 16px;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.92rem;
  text-decoration: none;
  text-align: center;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
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
  font-size: 1.15rem;
  line-height: 1.3;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const FieldGroup = styled.div`
  display: grid;
  gap: 14px;

  @media (min-width: 480px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Label = styled.label`
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.heading};
  margin-bottom: 6px;
`;

const FieldWrap = styled.div``;

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

const Select = styled.select`
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
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: rgba(201, 168, 76, 0.5);
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  min-height: 100px;
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

const SuccessMessage = styled.div`
  padding: 16px 20px;
  border-radius: 14px;
  background: rgba(201, 168, 76, 0.08);
  border: 1px solid rgba(201, 168, 76, 0.25);
  color: ${({ theme }) => theme.colors.heading};
  font-size: 0.95rem;
  line-height: 1.6;
  text-align: center;
`;

export default function MultiDayEnquiry() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [groupSize, setGroupSize] = useState("");
  const [packagePref, setPackagePref] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const lines = [
      `Hi, I'd like to enquire about a multi-day chauffeur package.`,
      `Name: ${name}`,
      contact ? `Contact: ${contact}` : null,
      dateFrom && dateTo ? `Dates: ${dateFrom} to ${dateTo}` : null,
      groupSize ? `Group size: ${groupSize}` : null,
      packagePref ? `Package interest: ${packagePref}` : null,
      notes ? `Notes: ${notes}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const waLink = buildWhatsAppLink(lines);

    trackWhatsAppClick({
      source: "multiday_enquiry_form",
      label: "Multi-Day Enquiry Form",
    });

    window.open(waLink, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  return (
    <Section id="plan">
      <Container>
        <Inner>
          <LeftCol>
            <Eyebrow>Plan Your Package</Eyebrow>
            <Title>Ready to Plan Your Cape Town Stay?</Title>
            <Description>
              Tell us your dates, group size, and what you have in mind. We'll
              put together a programme and quote within 24 hours.
            </Description>

            <WhatsAppCta
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="whatsapp-multiday"
              onClick={() =>
                trackWhatsAppClick({
                  source: "multiday_enquiry_whatsapp",
                  label: "WhatsApp — Enquiry Section",
                })
              }
            >
              <Button as="span" style={{ width: "100%" }}>
                WhatsApp Us Directly
              </Button>
            </WhatsAppCta>

            <PhoneLink
              href="tel:+27711081227"
              onClick={() =>
                trackPhoneClick({
                  source: "multiday_enquiry_phone",
                  label: "Call — Enquiry Section",
                })
              }
            >
              or call +27 71 108 1227
            </PhoneLink>

            <OrDivider>or use the enquiry form</OrDivider>

            <TrustList>
              <TrustItem>
                <TrustCheck>✦</TrustCheck>
                Response within 24 hours on all enquiries
              </TrustItem>
              <TrustItem>
                <TrustCheck>✦</TrustCheck>
                No commitment required to receive a quote
              </TrustItem>
              <TrustItem>
                <TrustCheck>✦</TrustCheck>
                Custom packages available for any duration
              </TrustItem>
              <TrustItem>
                <TrustCheck>✦</TrustCheck>
                All-inclusive pricing with no hidden charges
              </TrustItem>
            </TrustList>
          </LeftCol>

          <FormCard>
            <FormTitle>Send an Enquiry</FormTitle>

            {submitted ? (
              <SuccessMessage>
                Opening WhatsApp with your details. We&apos;ll respond within
                24 hours to confirm availability and send a quote.
              </SuccessMessage>
            ) : (
              <Form onSubmit={handleSubmit}>
                <FieldWrap>
                  <Label htmlFor="md-name">Your Name *</Label>
                  <Input
                    id="md-name"
                    type="text"
                    placeholder="e.g. Sarah Johnson"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </FieldWrap>

                <FieldWrap>
                  <Label htmlFor="md-contact">WhatsApp Number</Label>
                  <Input
                    id="md-contact"
                    type="tel"
                    placeholder="+1 555 000 0000"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                  />
                </FieldWrap>

                <FieldGroup>
                  <FieldWrap>
                    <Label htmlFor="md-from">Arrival Date</Label>
                    <Input
                      id="md-from"
                      type="date"
                      value={dateFrom}
                      onChange={(e) => setDateFrom(e.target.value)}
                    />
                  </FieldWrap>
                  <FieldWrap>
                    <Label htmlFor="md-to">Departure Date</Label>
                    <Input
                      id="md-to"
                      type="date"
                      value={dateTo}
                      onChange={(e) => setDateTo(e.target.value)}
                    />
                  </FieldWrap>
                </FieldGroup>

                <FieldGroup>
                  <FieldWrap>
                    <Label htmlFor="md-group">Group Size</Label>
                    <Select
                      id="md-group"
                      value={groupSize}
                      onChange={(e) => setGroupSize(e.target.value)}
                    >
                      <option value="">Select...</option>
                      <option value="1">1 person</option>
                      <option value="2">2 people</option>
                      <option value="3-4">3–4 people</option>
                      <option value="5-6">5–6 people</option>
                      <option value="7-8">7–8 people</option>
                      <option value="9+">9+ people</option>
                    </Select>
                  </FieldWrap>

                  <FieldWrap>
                    <Label htmlFor="md-package">Package Interest</Label>
                    <Select
                      id="md-package"
                      value={packagePref}
                      onChange={(e) => setPackagePref(e.target.value)}
                    >
                      <option value="">Select...</option>
                      <option value="3-Day Cape Town Highlight">3-Day Highlight</option>
                      <option value="5-Day Cape Town & Winelands">5-Day Winelands</option>
                      <option value="10-Day Full Cape Experience">10-Day Full Experience</option>
                      <option value="Custom">Custom / Not sure yet</option>
                    </Select>
                  </FieldWrap>
                </FieldGroup>

                <FieldWrap>
                  <Label htmlFor="md-notes">Any Specific Requests</Label>
                  <Textarea
                    id="md-notes"
                    placeholder="Wine farm preferences, private jet arrival, large group, dietary requirements, other experiences..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                </FieldWrap>

                <Button
                  as="button"
                  type="submit"
                  data-cta="form-multiday"
                  style={{ width: "100%", cursor: "pointer" }}
                >
                  Send Enquiry via WhatsApp
                </Button>
              </Form>
            )}
          </FormCard>
        </Inner>
      </Container>
    </Section>
  );
}
