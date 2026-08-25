"use client";

import { useState } from "react";
import styled from "styled-components";
import {
  Container,
  SectionWhite,
  SectionEyebrow,
  SectionHeader,
  SectionTitle,
  SectionText,
} from "./shared";

type FaqItem = {
  question: string;
  answer: string;
};

const faqItems: FaqItem[] = [
  {
    question: "What is included in a multi-day package?",
    answer:
      "Every multi-day package includes airport transfers on arrival and departure, full-day touring on scheduled itinerary days, and the same dedicated chauffeur and vehicle throughout. Activities such as cable car tickets, wine-tasting fees, or entry to Botlierskop Private Game Reserve are arranged on request and can be included in your quote.",
  },
  {
    question: "Do we get the same driver every day?",
    answer:
      "Yes. The same chauffeur is assigned to your package for the full duration. This is central to how multi-day packages work — your driver learns your pace, your preferences, and your routine. By day two there is no recalibration needed.",
  },
  {
    question: "Can we customise the itinerary?",
    answer:
      "Fully. The 3, 5, and 7-day programmes are starting points. You can swap destinations, add routes, adjust timing, or change the order of days. If you have a specific experience in mind that isn't in the standard itinerary, we build around it.",
  },
  {
    question: "What vehicles are available for multi-day hire?",
    answer:
      "The full fleet is available for multi-day packages: Mercedes-Benz S-Class and E-Class for solo travellers and couples, BMW X5 and Range Rover for small groups or families, Mercedes-Benz V-Class for groups of up to six, and the Hyundai Staria for groups of up to eight. All vehicles are maintained to the same standard.",
  },
  {
    question: "Is all-inclusive pricing available?",
    answer:
      "Yes. We provide a single all-inclusive quote that covers chauffeur hire, fuel, and the agreed itinerary. You receive one number before confirming. There are no daily recalculations, no metered charges, and no end-of-trip surprises.",
  },
  {
    question: "How far in advance do I need to book?",
    answer:
      "We recommend booking at least 7 days in advance for multi-day packages to ensure the right vehicle and chauffeur are available. For peak season (December to March) and large groups, two to four weeks notice is advisable. Same-week bookings can sometimes be accommodated — WhatsApp us directly to check availability.",
  },
];

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.soft};
  overflow: hidden;
`;

const Item = styled.div<{ $last: boolean }>`
  border-bottom: ${({ $last, theme }) =>
    $last ? "none" : `1px solid ${theme.colors.border}`};
`;

const Question = styled.button`
  width: 100%;
  border: none;
  background: transparent;
  padding: 20px 24px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  cursor: pointer;
  text-align: left;

  &:hover {
    background: rgba(201, 168, 76, 0.03);
  }
`;

const QuestionText = styled.div`
  color: ${({ theme }) => theme.colors.heading};
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.4;
`;

const ToggleIcon = styled.div<{ $open: boolean }>`
  width: 32px;
  height: 32px;
  border-radius: 999px;
  background: rgba(201, 168, 76, 0.08);
  color: ${({ theme }) => theme.colors.primary};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 700;
  flex-shrink: 0;
  transform: ${({ $open }) => ($open ? "rotate(45deg)" : "rotate(0deg)")};
  transition: transform 0.2s ease;
`;

const AnswerWrap = styled.div<{ $open: boolean }>`
  display: grid;
  grid-template-rows: ${({ $open }) => ($open ? "1fr" : "0fr")};
  transition: grid-template-rows 0.25s ease;
`;

const AnswerInner = styled.div`
  overflow: hidden;
`;

const Answer = styled.div`
  padding: 0 24px 20px;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.95rem;
  line-height: 1.8;
`;

export default function MultiDayFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <SectionWhite>
      <Container>
        <SectionHeader>
          <SectionEyebrow>Frequently Asked Questions</SectionEyebrow>
          <SectionTitle>Common Questions About Multi-Day Packages</SectionTitle>
          <SectionText>
            If something is not answered below, WhatsApp us directly. Most
            enquiries are responded to within the hour.
          </SectionText>
        </SectionHeader>

        <List>
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <Item key={index} $last={index === faqItems.length - 1}>
                <Question
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <QuestionText>{item.question}</QuestionText>
                  <ToggleIcon $open={isOpen}>+</ToggleIcon>
                </Question>
                <AnswerWrap $open={isOpen}>
                  <AnswerInner>
                    <Answer>{item.answer}</Answer>
                  </AnswerInner>
                </AnswerWrap>
              </Item>
            );
          })}
        </List>
      </Container>
    </SectionWhite>
  );
}
