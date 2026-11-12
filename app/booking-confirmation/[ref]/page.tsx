import type { Metadata } from "next";
import { getBookingGroup } from "@/lib/bookingLookup";
import {
  BookingCard,
  Header1,
  Message,
  PageShell,
  PaymentBox,
  StatusPill,
} from "@/components/booking/BookingParts";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Your booking confirmation | Sigma VIP",
  robots: { index: false, follow: false },
};

export default async function BookingConfirmationPage({
  params,
}: {
  params: Promise<{ ref: string }>;
}) {
  const { ref } = await params;
  const result = await getBookingGroup(ref);

  if (result.kind === "not_found") {
    return (
      <Message
        title="We could not find this booking"
        text="Please check the link or reference. If you need help, message us and we will sort it out."
        whatsapp={`Hello, I could not open my booking confirmation (reference ${ref}).`}
      />
    );
  }
  if (result.kind === "error") {
    return (
      <Message
        title="Something went wrong"
        text="We could not load your booking just now. Please try again in a moment."
      />
    );
  }

  const g = result.data;
  const bookings = g.bookings ?? [];
  return (
    <PageShell>
      <Header1
        title={g.title || "Your booking confirmation"}
        sub={
          <>
            {g.customer_name ? `${g.customer_name} · ` : ""}Reference {g.group_reference}{" "}
            <StatusPill text={g.status ? g.status.charAt(0).toUpperCase() + g.status.slice(1) : ""} />
          </>
        }
      />
      {bookings.map((b, i) => (
        <BookingCard key={b.booking_reference} b={b} heading={`Vehicle ${i + 1}${b.car?.title ? `: ${b.car.title}` : ""}`} />
      ))}
      <PaymentBox
        total={g.total_client_amount}
        currency={g.currency}
        isPaid={g.is_paid}
        paidAt={g.paid_at}
        link={g.payment_link}
      />
    </PageShell>
  );
}
