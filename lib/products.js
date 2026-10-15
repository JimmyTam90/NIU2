// PRODUCT & COLLECTION MANIFEST. Source: shop.niu.com product pages, checked 2026-10-15.
// Availability, prices and specs were read from each product page; images are the page's own Shopify CDN files.
const IMG = "https://shop.niu.com/cdn/shop/";

export const products = [
  {
    id: "kqi-300x",
    key: "kqi-300x",
    name: "NIU KQi 300X",
    tagline: "All-terrain hydraulic suspension",
    description: "NIU's performance commuter scooter for rough pavement, with hydraulic suspension, self-healing tubeless tires and turn signals.",
    availability: "AVAILABLE_VERIFIED",
    price: "$899",
    listPrice: "$1,299",
    save: "Save $400",
    image: { src: `${IMG}files/K300-X.jpg?v=1768810569&width=900`, alt: "NIU KQi 300X electric kick scooter", width: 900, height: 900 },
    specs: { speed: "20 mph", range: "Up to 37.3 mi", power: "1000W peak (500W rated)", suspension: "Hydraulic", weight: "48.7 lbs", charge: "6 h", app: "Smart unlock, cruise control, OTA updates" },
    source: "shop.niu.com/products/niu-kqi-300x-electric-scooter",
  },
  {
    id: "kqi-air",
    key: "kqi-air",
    name: "NIU KQi Air",
    tagline: "Carbon fiber frame at 26.2 lbs",
    description: "NIU's lightest folding scooter, built around a carbon fiber frame so it is easy to carry up stairs or onto transit.",
    availability: "AVAILABLE_VERIFIED",
    price: "$899",
    listPrice: "$1,499",
    save: "Save $600",
    image: { src: `${IMG}files/3_e3c773b1-541a-4943-82fe-993e21d2a8da.jpg?v=1766985318&width=900`, alt: "NIU KQi Air carbon fiber electric scooter", width: 900, height: 900 },
    specs: { speed: "20 mph", range: "Up to 31 mi", power: "700W peak (350W rated)", suspension: "None", weight: "26.2 lbs", charge: "5 h", app: "NFC and Bluetooth unlock, cruise control, OTA updates" },
    source: "shop.niu.com/products/niu-kqi-air-lightest-electric-scooter",
  },
  {
    id: "kqi-100f",
    key: "kqi-100f",
    name: "NIU KQi 100F",
    tagline: "Foldable handlebar for campus and small spaces",
    description: "A mid-level scooter with a foldable handlebar (7.2 in wide when folded), spring suspension and turn signals.",
    availability: "AVAILABLE_VERIFIED",
    price: "$449",
    listPrice: "$479",
    save: "Save $30",
    image: { src: `${IMG}files/KQi-100F_Basic-Render_Gray_Left-45.jpg?v=1766985413&width=900`, alt: "NIU KQi 100F foldable handlebar electric scooter", width: 900, height: 900 },
    specs: { speed: "17.4 mph", range: "Up to 18 mi", power: "600W peak (300W rated)", suspension: "Spring (36mm stroke)", weight: "38.8 lbs", charge: "5-6 h", app: "Smart unlock, cruise control, OTA updates" },
    source: "shop.niu.com/products/niu-kqi-100f-electric-scooter",
  },
  {
    id: "bqi-c3-pro",
    key: "bqi-c3-pro",
    name: "NIU BQi-C3 Pro e-bike",
    tagline: "Swappable twin batteries, 60-90 mi range",
    description: "A step-through city e-bike with two swappable 480Wh batteries, a Gates carbon belt drive and a TFT display.",
    availability: "AVAILABLE_VERIFIED",
    price: "$799",
    listPrice: "$2,499",
    save: "Save $1,700",
    image: { src: `${IMG}products/NIU-Ebike-C3_8.png?v=1766985710&width=900`, alt: "NIU BQi-C3 Pro city e-bike in matte black", width: 900, height: 900 },
    specs: { speed: "28 mph pedal assist, 20 mph throttle", range: "60-90 mi", power: "750W peak (500W rated)", suspension: "None (rigid fork)", weight: "70.5 lbs", charge: "5 h", app: "Not app connected" },
    source: "shop.niu.com/products/niu-c3-pro-electric-urban-commuter-bike",
  },
];

export const specRows = [
  ["Top speed", "speed"],
  ["Max range", "range"],
  ["Motor power", "power"],
  ["Suspension", "suspension"],
  ["Weight", "weight"],
  ["Charging time", "charge"],
  ["Smart features", "app"],
];

export const categories = [
  { key: "electric-scooters", title: "Electric scooters", description: "NIU's KQi 100, 200, 300 and Air series.", cta: "Browse scooters", image: { src: `${IMG}files/K300-X.jpg?v=1768810569&width=600`, alt: "NIU KQi 300X electric scooter" } },
  { key: "electric-bikes", title: "Electric bikes", description: "City and fat tire e-bikes, including the BQi-C3 Pro.", cta: "Browse e-bikes", image: { src: `${IMG}products/NIU-Ebike-C3_8.png?v=1766985710&width=600`, alt: "NIU BQi-C3 Pro e-bike" } },
  { key: "accessories", title: "Accessories and parts", description: "Helmets, phone holders, chargers and tires for NIU scooters.", cta: "Browse accessories", image: { src: `${IMG}collections/NIU_Spare_Parts_Banner.png?v=1652335006&width=600`, alt: "NIU spare parts collection banner" } },
];

export const faqs = [
  ["Is shipping free in the US?", "NIU lists free shipping to the lower 48 US states (not Hawaii, Alaska or Puerto Rico). Orders usually ship within 3 working days and take 3-10 business days in transit."],
  ["What warranty does NIU offer?", "NIU lists a 2-year warranty on the main body, including battery and motor. Accessories (6 months) and consumable parts (3 months) have shorter terms."],
  ["Can I return a scooter?", "NIU accepts change-of-mind returns within 30 days of receipt, with an odometer reading of 10 miles or less. Check NIU's return policy before you order."],
  ["Is PrimeGearLab the seller?", "No. PrimeGearLab is an independent publisher. NIU handles purchases, shipping, returns and support on shop.niu.com."],
  ["Why do prices here differ from what I see?", "Prices and stock are what NIU's store showed when we checked and can change. Confirm the final price on NIU before you buy."],
];
