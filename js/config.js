/* ==========================================================================
   BROFIT MENSWEAR — BRAND SETTINGS
   ==========================================================================
   Change these values and the whole website updates automatically.
   ========================================================================== */

const BRAND = {
  name: "BROFIT MENSWEAR",
  tagline: "Wear Your Confidence",

  // WhatsApp number in international format, no + no spaces no dashes.
  // Example: 91 9787102865  ->  919787102865
  whatsappNumber: "919787102865",

  // Instagram handle without the @ symbol
  instagramHandle: "brofit_mens.wear",

  // Shop address, shown on the Location section
  locationName: "BROFIT MENSWEAR",
  locationAddress: "Alangulam, Tenkasi, Tamil Nadu",

  // Paste a Google Maps share link here (Google Maps app -> Share -> Copy link)
  googleMapsUrl: "https://maps.app.goo.gl/?q=Alangulam,+Tenkasi",

  // Path to your logo file
  logo: "assets/logo.jpg"
};

if (typeof module !== "undefined") {
  module.exports = { BRAND };
}
