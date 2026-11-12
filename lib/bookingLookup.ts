import { SIGMA_API_BASE } from "./api";

export type BookingDay = {
  date: string;
  start_time?: string | null;
  end_time?: string | null;
  day_type_display?: string | null;
  client_rate?: string | null;
};

export type NamedItem = { title?: string; name?: string };

export type BookingCar = {
  title?: string;
  registration_number?: string | null;
  cover_photos?: { image?: string }[];
} | null;

export type BookingData = {
  booking_reference: string;
  title?: string;
  status?: string;
  status_display?: string;
  car?: BookingCar;
  vehicle_plate?: string | null;
  driver?: { full_name?: string } | null;
  customer_name?: string;
  pickup_location?: string;
  dropoff_location?: string;
  trip_description?: string;
  days?: BookingDay[];
  total_client_amount?: string;
  payment_link?: string | null;
  is_paid?: boolean;
  paid_at?: string | null;
  experiences?: NamedItem[];
  included_packages?: NamedItem[];
};

export type GroupData = {
  group_reference: string;
  title?: string;
  customer_name?: string;
  status?: string;
  total_client_amount?: string;
  currency?: string;
  payment_link?: string | null;
  is_paid?: boolean;
  paid_at?: string | null;
  bookings?: BookingData[];
};

export type LookupResult<T> =
  | { kind: "ok"; data: T }
  | { kind: "not_found" }
  | { kind: "error" };

async function lookup<T>(path: string): Promise<LookupResult<T>> {
  try {
    const res = await fetch(`${SIGMA_API_BASE}${path}`, {
      cache: "no-store",
      headers: { Accept: "application/json" },
    });
    if (res.status === 404) return { kind: "not_found" };
    if (!res.ok) return { kind: "error" };
    return { kind: "ok", data: (await res.json()) as T };
  } catch {
    return { kind: "error" };
  }
}

function cleanRef(ref: string) {
  return encodeURIComponent(decodeURIComponent(ref).trim().replace(/\/+$/, ""));
}

export function getBooking(ref: string) {
  let r: string;
  try {
    r = cleanRef(ref);
  } catch {
    return Promise.resolve<LookupResult<BookingData>>({ kind: "not_found" });
  }
  return lookup<BookingData>(`/api/public/bookings/${r}/`);
}

export function getBookingGroup(ref: string) {
  let r: string;
  try {
    r = cleanRef(ref);
  } catch {
    return Promise.resolve<LookupResult<GroupData>>({ kind: "not_found" });
  }
  return lookup<GroupData>(`/api/booking-groups/${r}/`);
}
