/* ==========================================================================
   BROFIT MENSWEAR — PRODUCT DATA
   ==========================================================================
   This is the ONLY file you need to touch to manage your catalogue.

   TO ADD A NEW CATEGORY:
     Add a new object to the CATEGORIES array below.
     - id     : short lowercase code, no spaces (used to link products)
     - name   : what customers see
     - image  : a picture representing the category

   TO ADD A NEW PRODUCT:
     Add a new object to the PRODUCTS array below.
     - id          : unique code, no spaces (e.g. "bp-004")
     - name        : product name
     - category    : must match a category "id" from CATEGORIES above it
     - price       : number only, no currency symbol
     - images      : array of one or more image URLs or local file paths
     - sizes       : array of available sizes, e.g. ["S","M","L","XL"]
     - description : one or two lines about the product
     - available   : true = shows "Order on WhatsApp", false = shows "Out of Stock"

   TO DELETE A PRODUCT:
     Remove its whole { ... } block from the PRODUCTS array.

   TO EDIT A PRODUCT:
     Just change the values inside its { ... } block.

   IMAGES:
     Replace the sample image links with your own photos. You can use:
       - A local file, e.g. "assets/products/baggy-pants-black.jpg"
       - Any direct image URL
   ========================================================================== */

const CATEGORIES = [
  {
    id: "baggy-pants",
    name: "Baggy Pants",
    image: "assets/BAGGY.jpeg"
  },
  {
    id: "formal-shirts",
    name: "Formal Shirts",
    image: "assets/BAGGY.jpeg"
  },
  {
    id: "jerseys",
    name: "Jerseys",
    image: "assets/BAGGY.jpeg"
  },
  {
    id: "printed-T-shirts",
    name: "Printed-T-shirts",
    image: "assets/BAGGY.jpeg"
  },
  {
    id: "baggy-shirts",
    name: "Baggy Shirts",
    image: "assets/BAGGY.jpeg"
  },
];

const PRODUCTS = [
  {
    id: "bp-001",
    name: "BARALEL FIT ",
    category: "baggy-pants",
    price: 699,
    images: [
      "assets/1.jpeg"
    ],
    sizes: ["28", "30", "32", "34 " , "36"],
    description: "Premium baggy fit for a modern look.",
    available: true
  },
  {
    id: "bp-002",
    name: "BARREL FIT",
    category: "baggy-pants",
    price: 699,
    images: [
      "assets/2.jpeg"
    ],
    sizes: ["28", "30", "32", "34" , "36"],
    description: "Premium baggy fit for a modern look.",
    available: true
  },
  {
    id: "bp-003",
    name: "BAGGY FIT",
    category: "baggy-pants",
    price: 699,
    images: [
      "assets/3.jpeg"
    ],
    sizes: ["28", "30", "32", "34", "36"],
    description: "Premium baggy fit for a modern look.",
    available: true
  },
   {
    id: "bp-004",
    name: "BAGGY FIT",
    category: "baggy-pants",
    price: 699,
    images: [
      "assets/4.jpeg"
    ],
    sizes: ["28", "30", "32", "34", "36"],
    description: "Premium baggy fit for a modern look.",
    available: true
  },
   {
    id: "bp-005",
    name: "BAGGY FIT",
    category: "baggy-pants",
    price: 699,
    images: [
      "assets/5.jpeg"
    ],
    sizes: ["28", "30", "32", "34", "36"],
    description: "Premium baggy fit for a modern look.",
    available: true
  },
   {
    id: "bp-006",
    name: "BAGGY FIT",
    category: "baggy-pants",
    price: 699,
    images: [
      "assets/6.jpeg"
    ],
    sizes: ["28", "30", "32", "34", "36"],
    description: "Premium baggy fit for a modern look.",
    available: true
  },
   {
    id: "bp-007",
    name: "BAGGY FIT",
    category: "baggy-pants",
    price: 699,
    images: [
      "assets/7.jpeg"
    ],
    sizes: ["28", "30", "32", "34", "36"],
    description: "Premium baggy fit for a modern look.",
    available: true
  },
  {
    id: "fs-001",
    name: "Ivory Slim Formal Shirt",
    category: "formal-shirts",
    price: 999,
    images: [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=1000&q=80&auto=format&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL"],
    description: "Crisp ivory cotton-blend shirt with a clean spread collar. Built for the boardroom.",
    available: true
  },
  {
    id: "fs-002",
    name: "Midnight Blue Formal Shirt",
    category: "formal-shirts",
    price: 1099,
    images: [
      "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=1000&q=80&auto=format&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Deep midnight blue with subtle self-stripe texture. Non-iron finish.",
    available: true
  },
  {
    id: "jr-001",
    name: "Onyx Performance Jersey",
    category: "jerseys",
    price: 799,
    images: [
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=1000&q=80&auto=format&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL"],
    description: "Breathable stretch jersey with a raglan cut, made for everyday movement.",
    available: true
  },
  {
    id: "jr-002",
    name: "Crimson Edge Jersey",
    category: "jerseys",
    price: 849,
    images: [
      "https://images.unsplash.com/photo-1580087433264-9f8f119b9c98?w=1000&q=80&auto=format&fit=crop"
    ],
    sizes: ["M", "L", "XL"],
    description: "Bold crimson panel jersey with a ribbed crew neck.",
    available: false
  },
  {
    id: "pj-001",
    name: "Monogram Printed Jersey",
    category: "printed-jerseys",
    price: 949,
    images: [
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=1000&q=80&auto=format&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL"],
    description: "All-over monogram print on a soft-touch jersey base.",
    available: true
  },
  {
    id: "pj-002",
    name: "Street Graphic Printed Jersey",
    category: "printed-jerseys",
    price: 999,
    images: [
      "https://images.unsplash.com/photo-1622445275576-721325763afe?w=1000&q=80&auto=format&fit=crop"
    ],
    sizes: ["S", "M", "L"],
    description: "Bold street-graphic print with a dropped shoulder fit.",
    available: true
  },
  {
    id: "bs-001",
    name: "Stone Oversized Baggy Shirt",
    category: "baggy-shirts",
    price: 1199,
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1000&q=80&auto=format&fit=crop"
    ],
    sizes: ["M", "L", "XL"],
    description: "Boxy oversized shirt in soft stone cotton, designed to be worn open or buttoned.",
    available: true
  },
  {
    id: "bs-002",
    name: "Olive Drop-Shoulder Baggy Shirt",
    category: "baggy-shirts",
    price: 1249,
    images: [
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=1000&q=80&auto=format&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL"],
    description: "Heavy drop-shoulder shirt in olive, garment-washed for a lived-in feel.",
    available: true
  }
];

/* Don't edit below — used by the site to read the data above. */
if (typeof module !== "undefined") {
  module.exports = { CATEGORIES, PRODUCTS };
}
