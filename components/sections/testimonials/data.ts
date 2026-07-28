export type TestimonialBrand = "sigma" | "ctc";

export type Testimonial = {
  name: string;
  image: string;
  service: string;
  review: string;
  brand: TestimonialBrand;
};

export const testimonials: Testimonial[] = [
  {
    name: "Aashish",
    image: "/images/testimonials/Aashish.jpg",
    service: "Cape Peninsula Private Tour",
    review:
      "We had the full Cape Peninsula in one day: Chapman's Peak, Boulders Beach, Cape Point. All at our own pace. Our chauffeur knew exactly where to stop for the best views and even arranged a lunch reservation in Kalk Bay. Far better than any group tour.",
    brand: "ctc",
  },
  {
    name: "Achmat",
    image: "/images/testimonials/achmat.png",
    service: "Airport Transfer",
    review:
      "Flight landed 40 minutes early and the driver was already waiting. Luggage handled, cold water in the car, and we were at our hotel in Camps Bay within 25 minutes. Exactly the kind of arrival you want after a long flight.",
    brand: "sigma",
  },
  {
    name: "Asad",
    image: "/images/testimonials/asad.jpg",
    service: "Stellenbosch Winelands Tour",
    review:
      "Visited four estates across Stellenbosch and Franschhoek in a single day. Our chauffeur coordinated all the tastings in advance and knew which cellar doors to skip. The S-Class was immaculate. We've already booked again for next month.",
    brand: "ctc",
  },
  {
    name: "Becca",
    image: "/images/testimonials/becca.jpg",
    service: "City & Table Mountain Tour",
    review:
      "Table Mountain at sunrise with no queues, then Bo-Kaap, the waterfront, and a sunset drive along the Atlantic Seaboard. Having a private chauffeur meant we could adjust the whole day around the weather. Worth every rand.",
    brand: "ctc",
  },
  {
    name: "Gunnar",
    image: "/images/testimonials/gunnar.jpg",
    service: "Aquila Safari Day Trip",
    review:
      "Picked up at 6am from our hotel in the BMW X5, arrived at Aquila before the crowds. The drive through the Karoo was stunning. Our chauffeur waited the entire day and had the vehicle cooled and ready when we finished. Seamless.",
    brand: "ctc",
  },
  {
    name: "Jana",
    image: "/images/testimonials/jana.jpg",
    service: "Cape Peninsula Private Tour",
    review:
      "We changed our route three times during the day and it was never an issue. Stopped for photos wherever we wanted, spent extra time at Boulders Beach with the kids. The flexibility of having your own vehicle and driver is unmatched.",
    brand: "ctc",
  },
  {
    name: "Jodi",
    image: "/images/testimonials/jodi.jpg",
    service: "Mercedes V-Class Group Hire",
    review:
      "Six of us in the V-Class for a full-day Winelands tour. Plenty of space, the air conditioning was perfect, and our driver handled all the logistics. We just had to show up, taste wine, and enjoy the day. Exactly what we needed.",
    brand: "sigma",
  },
  {
    name: "Jones",
    image: "/images/testimonials/jones.png",
    service: "Airport Transfer",
    review:
      "Used Sigma VIP for both arrival and departure transfers. Both times the driver was early, the car was spotless, and the communication via WhatsApp was instant. No stress, no waiting, no confusion at the terminal.",
    brand: "sigma",
  },
  {
    name: "Kazi",
    image: "/images/testimonials/kazi.png",
    service: "Cape Peninsula Private Tour",
    review:
      "One of the best days of our trip. Our chauffeur took us on a route we would never have found on our own. Quiet coastal roads, a hidden viewpoint above Hout Bay, and lunch at a spot only locals know about. This is why you hire a private driver.",
    brand: "ctc",
  },
  {
    name: "Kresmir",
    image: "/images/testimonials/kresmir.jpg",
    service: "Stellenbosch Winelands Tour",
    review:
      "Third time using Sigma VIP for Winelands days. They remember our preferences: which estates we like, where we want to eat, how long we spend at each stop. That kind of personal service is rare and it keeps us coming back.",
    brand: "ctc",
  },
  {
    name: "Luka",
    image: "/images/testimonials/luka.png",
    service: "BMW X5 Full-Day Hire",
    review:
      "Had the X5 for a full day exploring the Cape. The vehicle was in perfect condition, the driver was professional but not intrusive, and the all-inclusive pricing meant no surprises at the end. Exactly how private travel should work.",
    brand: "sigma",
  },
  {
    name: "Lungi",
    image: "/images/testimonials/lungi.jpg",
    service: "City & Table Mountain Tour",
    review:
      "Organised a surprise birthday tour for my partner. Sigma VIP helped plan the entire route, suggested photo spots I didn't know existed, and the driver even had champagne waiting in the car. The attention to detail was exceptional.",
    brand: "ctc",
  },
  {
    name: "Mampuru",
    image: "/images/testimonials/mampuru.png",
    service: "Airport Transfer",
    review:
      "Our flight was delayed by two hours. No phone calls needed. They tracked the flight automatically and the driver was there when we walked out. That level of service sets them apart from every other transfer company we've used.",
    brand: "sigma",
  },
  {
    name: "Marie",
    image: "/images/testimonials/marie.jpg",
    service: "Stellenbosch Winelands Tour",
    review:
      "The whole experience felt private and unhurried. We visited three estates, had a long lunch at Delaire Graff, and our chauffeur handled the timing perfectly. No rushing, no pressure. It felt like having a personal concierge for the day.",
    brand: "ctc",
  },
  {
    name: "Moz",
    image: "/images/testimonials/moz.png",
    service: "Cape Peninsula Private Tour",
    review:
      "We were a family of five including young children. The chauffeur was patient, helped with car seats, and adjusted the day around nap times. Chapman's Peak was breathtaking and the penguins at Boulders Beach were the highlight for the kids.",
    brand: "ctc",
  },
  {
    name: "Nadine",
    image: "/images/testimonials/nadine.jpg",
    service: "Multi-Day Package",
    review:
      "Booked Sigma VIP for five days: airport transfer on arrival, Peninsula day tour, Winelands, Hermanus, and a final transfer back. Same driver the entire time. By day three he felt like part of the family. The consistency made the whole trip effortless.",
    brand: "sigma",
  },
  {
    name: "Nicholas",
    image: "/images/testimonials/nicholas.png",
    service: "Aquila Safari Day Trip",
    review:
      "Long drive to Aquila but the BMW X5 made it comfortable and our driver knew exactly where to stop for the best views along the N1. The safari itself was incredible and having private transport there and back made it a proper luxury experience.",
    brand: "ctc",
  },
  {
    name: "Noor",
    image: "/images/testimonials/noor.png",
    service: "City & Table Mountain Tour",
    review:
      "As a solo female traveller, safety and professionalism were my top priorities. Sigma VIP exceeded both. My chauffeur was respectful, knowledgeable, and made me feel completely at ease the entire day. I felt like a VIP from start to finish.",
    brand: "ctc",
  },
  {
    name: "Rachel",
    image: "/images/testimonials/rachel.png",
    service: "Cape Peninsula Private Tour",
    review:
      "We skipped the cable car queues at Table Mountain, drove the entire Peninsula at our own pace, and ended the day watching the sunset from Signal Hill, all arranged by our chauffeur on the spot. That kind of flexibility is priceless.",
    brand: "ctc",
  },
  {
    name: "Ru",
    image: "/images/testimonials/ru.jpg",
    service: "Airport Transfer",
    review:
      "International flight landing at 5am. Not a problem. Driver was there with a name board, helped with all four suitcases, and the S-Class was waiting right outside. After 14 hours of flying, that level of comfort made all the difference.",
    brand: "sigma",
  },
  {
    name: "Ruth",
    image: "/images/testimonials/ruth.jpg",
    service: "Stellenbosch Winelands Tour",
    review:
      "We told our driver we wanted smaller, boutique wine farms rather than the big names. He took us to three estates we would never have discovered on our own. The local knowledge alone is worth the booking.",
    brand: "ctc",
  },
  {
    name: "Saad",
    image: "/images/testimonials/saad.jpg",
    service: "Mercedes V-Class Private Hire",
    review:
      "Needed a vehicle for my family of seven across three days in Cape Town. The V-Class was spacious, the driver was punctual every morning, and the all-inclusive pricing made budgeting simple. We could focus entirely on enjoying Cape Town.",
    brand: "sigma",
  },
  {
    name: "Sarah",
    image: "/images/testimonials/sarah.jpg",
    service: "Cape Peninsula Private Tour",
    review:
      "Our chauffeur rearranged the entire day when the weather changed, moving Table Mountain to the morning when it was clear and saving the Peninsula drive for the afternoon. That kind of real-time flexibility is exactly why you go private.",
    brand: "ctc",
  },
  {
    name: "Tim",
    image: "/images/testimonials/tim.png",
    service: "BMW 5-Series Airport & City",
    review:
      "Used the BMW 5-Series for airport transfers and two days of meetings around the city. The driver was always five minutes early, the car was immaculate, and the communication on WhatsApp was instant. It felt like having a personal driver on staff.",
    brand: "sigma",
  },
  {
    name: "Tuleen",
    image: "/images/testimonials/tuleen.jpg",
    service: "City & Table Mountain Tour",
    review:
      "Every detail was considered, from the temperature of the water bottles to the route timing to avoid traffic. Our chauffeur treated the day like it was his own family's trip. That personal touch is what separates Sigma VIP from the rest.",
    brand: "ctc",
  },
  {
    name: "Yasir",
    image: "/images/testimonials/yaasir.png",
    service: "Stellenbosch Winelands Tour",
    review:
      "Organised a Winelands day for a group of eight across two vehicles. Both drivers arrived together, followed the same route, and coordinated stops perfectly. The logistics were handled entirely by Sigma VIP. We just enjoyed the wine.",
    brand: "ctc",
  },
  {
    name: "Yasmin",
    image: "/images/testimonials/yasmin.jpg",
    service: "Cape Peninsula Private Tour",
    review:
      "The Peninsula tour was the highlight of our entire South Africa trip. Our driver knew every viewpoint, every quiet beach, and the best time to arrive at each stop. We saw more in one day than friends who spent three days self-driving.",
    brand: "ctc",
  },
];
