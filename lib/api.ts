export const API_BASE =
  process.env.API_BASE_URL ?? "https://web-production-1ab9.up.railway.app";


// Sigma's own backend. Used ONLY by the /booking and /booking-confirmation
// pages. All other pages still read from API_BASE above.
export const SIGMA_API_BASE =
  (process.env.SIGMA_API_BASE_URL ?? "https://web-production-d7058.up.railway.app").replace(/\/+$/, "");
