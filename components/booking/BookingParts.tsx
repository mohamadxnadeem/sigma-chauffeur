import type { CSSProperties } from "react";
import { brand } from "@/lib/brand";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import type { BookingData, NamedItem } from "@/lib/bookingLookup";

const c = brand.colors;

const page: CSSProperties = {
  background: c.background,
  color: c.text,
  minHeight: "70vh",
  padding: "140px 20px 80px",
};
const wrap: CSSProperties = { maxWidth: 760, margin: "0 auto" };
const card: CSSProperties = {
  background: c.white,
  border: `1px solid ${c.border}`,
  borderRadius: 12,
  padding: 24,
  marginBottom: 20,
};
const h1: CSSProperties = {
  fontFamily: "var(--font-playfair), serif",
  color: c.heading,
  fontSize: 32,
  margin: "0 0 8px",
};
const h2: CSSProperties = {
  fontFamily: "var(--font-playfair), serif",
  color: c.heading,
  fontSize: 20,
  margin: "0 0 12px",
};
const muted: CSSProperties = { color: c.textMuted, margin: 0 };
const btn: CSSProperties = {
  display: "inline-block",
  background: c.primary,
  color: c.heading,
  padding: "14px 28px",
  borderRadius: 8,
  fontWeight: 600,
  textDecoration: "none",
};

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main style={page}>
      <div style={wrap}>{children}</div>
    </main>
  );
}

export function Message({
  title,
  text,
  whatsapp,
}: {
  title: string;
  text: string;
  whatsapp?: string;
}) {
  return (
    <PageShell>
      <div style={{ ...card, textAlign: "center" }}>
        <h1 style={h1}>{title}</h1>
        <p style={{ ...muted, marginBottom: 20 }}>{text}</p>
        <a
          style={btn}
          href={buildWhatsAppLink(whatsapp ?? "Hello, I need help with my booking.")}
          target="_blank"
          rel="noopener noreferrer"
        >
          Message us on WhatsApp
        </a>
        <p style={{ ...muted, marginTop: 16 }}>Or call {brand.phone}</p>
      </div>
    </PageShell>
  );
}

export function money(value?: string | null, currency = "ZAR") {
  if (value === undefined || value === null || value === "") return "";
  const n = Number(value);
  if (Number.isNaN(n)) return `${currency} ${value}`;
  return `${currency === "ZAR" ? "R" : currency + " "}${n.toLocaleString("en-ZA", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

function fmtDate(d?: string | null) {
  if (!d) return "";
  const dt = new Date(d.length <= 10 ? `${d}T12:00:00` : d);
  if (Number.isNaN(dt.getTime())) return d;
  return dt.toLocaleDateString("en-ZA", {
    weekday: "short",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Africa/Johannesburg",
  });
}

const fmtTime = (t?: string | null) => (t ? t.slice(0, 5) : "");

export function PaymentBox({
  total,
  currency,
  isPaid,
  paidAt,
  link,
}: {
  total?: string;
  currency?: string;
  isPaid?: boolean;
  paidAt?: string | null;
  link?: string | null;
}) {
  return (
    <div style={card}>
      <h2 style={h2}>Payment</h2>
      <p style={{ fontSize: 28, margin: "0 0 12px", fontWeight: 600 }}>
        {money(total, currency || "ZAR")}
      </p>
      {isPaid ? (
        <p style={{ margin: 0, color: c.primaryDark, fontWeight: 600 }}>
          Paid{paidAt ? ` on ${fmtDate(paidAt)}` : ""}. Thank you.
        </p>
      ) : link ? (
        <a style={btn} href={link} target="_blank" rel="noopener noreferrer">
          Pay securely
        </a>
      ) : (
        <p style={muted}>Payment is not due at the moment.</p>
      )}
    </div>
  );
}

function List({ title, items }: { title: string; items?: NamedItem[] }) {
  const names = (items ?? []).map((i) => i.title || i.name).filter(Boolean);
  if (!names.length) return null;
  return (
    <div style={{ marginTop: 16 }}>
      <h3 style={{ ...h2, fontSize: 16 }}>{title}</h3>
      <ul style={{ margin: 0, paddingLeft: 20 }}>
        {names.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>
    </div>
  );
}

export function BookingCard({ b, heading }: { b: BookingData; heading?: string }) {
  // Featured photo first, then the rest in their set order.
  const photos = [...(b.car?.cover_photos ?? [])]
    .filter((p) => !!p.cover_photos)
    .sort(
      (a, z) =>
        Number(!!z.is_featured) - Number(!!a.is_featured) ||
        (a.order ?? 0) - (z.order ?? 0)
    )
    .map((p) => p.cover_photos as string);
  const photo = photos[0];
  const extraPhotos = photos.slice(1);
  const carAlt = b.car?.title ? `${b.car.title} with Sigma VIP` : "Sigma VIP vehicle";
  const plate = b.vehicle_plate ?? b.car?.registration_number;
  const days = b.days ?? [];
  return (
    <div style={card}>
      <h2 style={h2}>{heading ?? b.car?.title ?? "Your chauffeur booking"}</h2>
      <p style={{ ...muted, marginBottom: 12 }}>Reference {b.booking_reference}</p>
      {photo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={photo}
          alt={carAlt}
          style={{ width: "100%", maxHeight: 320, objectFit: "cover", borderRadius: 8, marginBottom: extraPhotos.length ? 8 : 16 }}
        />
      ) : null}
      {extraPhotos.length ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
            gap: 8,
            marginBottom: 16,
          }}
        >
          {extraPhotos.map((src, i) => (
            <a key={src} href={src} target="_blank" rel="noopener noreferrer">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={`${carAlt}, photo ${i + 2}`}
                loading="lazy"
                style={{ width: "100%", height: 90, objectFit: "cover", borderRadius: 6, display: "block" }}
              />
            </a>
          ))}
        </div>
      ) : null}
      <dl style={{ margin: 0, display: "grid", gridTemplateColumns: "120px 1fr", gap: "8px 16px" }}>
        {b.car?.title ? (<><dt style={muted}>Vehicle</dt><dd style={{ margin: 0 }}>{b.car.title}{plate ? ` (${plate})` : ""}</dd></>) : null}
        {b.driver?.full_name ? (<><dt style={muted}>Driver</dt><dd style={{ margin: 0 }}>{b.driver.full_name}</dd></>) : null}
        {b.pickup_location ? (<><dt style={muted}>Pickup</dt><dd style={{ margin: 0 }}>{b.pickup_location}</dd></>) : null}
        {b.dropoff_location ? (<><dt style={muted}>Drop-off</dt><dd style={{ margin: 0 }}>{b.dropoff_location}</dd></>) : null}
        {b.trip_description ? (<><dt style={muted}>Trip</dt><dd style={{ margin: 0 }}>{b.trip_description}</dd></>) : null}
      </dl>
      {days.length ? (
        <div style={{ marginTop: 16 }}>
          <h3 style={{ ...h2, fontSize: 16 }}>Schedule</h3>
          {days.map((d, i) => (
            <div
              key={i}
              style={{ display: "flex", justifyContent: "space-between", gap: 12, padding: "8px 0", borderTop: `1px solid ${c.border}` }}
            >
              <span>
                {fmtDate(d.date)}
                {d.start_time ? `, ${fmtTime(d.start_time)}` : ""}
                {d.end_time ? ` to ${fmtTime(d.end_time)}` : ""}
                {d.day_type_display ? ` (${d.day_type_display})` : ""}
              </span>
              <span>{money(d.client_rate)}</span>
            </div>
          ))}
        </div>
      ) : null}
      <List title="Experiences" items={b.experiences} />
      <List title="Included packages" items={b.included_packages} />
    </div>
  );
}

export function Header1({ title, sub }: { title: string; sub?: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 24 }}>
      <h1 style={h1}>{title}</h1>
      {sub ? <p style={muted}>{sub}</p> : null}
    </div>
  );
}

export function StatusPill({ text }: { text?: string }) {
  if (!text) return null;
  return (
    <span style={{ display: "inline-block", background: c.white, border: `1px solid ${c.primary}`, color: c.primaryDark, borderRadius: 999, padding: "2px 12px", fontSize: 14 }}>
      {text}
    </span>
  );
}
