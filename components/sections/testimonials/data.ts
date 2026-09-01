export type TestimonialBrand = "sigma" | "ctc";

export type Testimonial = {
  name: string;
  image?: string;
  service?: string;
  review: string;
  brand: TestimonialBrand;
};

export const testimonials: Testimonial[] = [
  {
    name: "Nafeesa Vallie",
    review:
      "The owner of Sigma VIP Shameem Mohamed gave us the most extraordinary hands on VIP service. His staff treated us like royalty. They are so well trained and such gentleman at all times. The chauffers are so professional and well trained. The …More",
    brand: "sigma",
  },
  {
    name: "Adam Zartz",
    review:
      "My family and I had an unforgettable experience, complete luxury from start to finish! …More",
    brand: "sigma",
  },
  {
    name: "Alli Olivier",
    review: "The best and professional Drivers and there services",
    brand: "sigma",
  },
];
