import type { Metadata } from "next";
import { getBooking } from "@/lib/bookingLookup";
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
  title: "Your booking | Sigma VIP",
  robots: { index: false, follow: false },
};

export default async function BookingPage({
  params,
}: {
  params: Promise<{ ref: string }>;
}) {
  const { ref } = await params;
  const result = await getBooking(ref);

  if (result.kind === "not_found") {
    return (
      <Message
        title="We could not find this booking"
        text="Please check the link or reference. If you need help, message us and we will sort it out."
        whatsapp={`Hello, I could not open my booking page (reference ${ref}).`}
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

  const b = result.data;
  return (
    <PageShell>
      <Header1
        title={b.customer_name ? `Booking for ${b.customer_name}` : "Your booking"}
        sub={<StatusPill text={b.status_display || b.status} />}
      />
      <BookingCard b={b} />
      <PaymentBox
        total={b.total_client_amount}
        isPaid={b.is_paid}
        paidAt={b.paid_at}
        link={b.payment_link}
      />
    </PageShell>
  );
}
