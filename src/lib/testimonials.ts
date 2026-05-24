export type Testimonial = {
  id: string;
  name: string;
  height: string;
  city: string;
  title: string;
  daysIn: number;
  product: string;
  quote: string;
  initial: string;
  avatar?: string;
  proofImage?: string;
  rating: 5 | 4;
};

/** Member before/after snapshots shown in the reviews proof strip. */
export const MEMBER_SNAPSHOTS = [
  "/media/testimonials/member-1.png",
  "/media/testimonials/member-2.png",
  "/media/testimonials/member-3.png",
  "/media/testimonials/member-4.png",
] as const;

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "marcus-t",
    name: "Marcus T.",
    height: "5'6",
    city: "Dallas, TX",
    title: "Hinge optimization",
    daysIn: 21,
    product: "Swipe Right on Yourself",
    quote:
      "My Hinge was embarrassing before this. Wrong photos, no bio, opening with hey. Axel rebuilt the whole thing. Within two weeks I had more matches than the previous six months combined.",
    initial: "M",
    rating: 5,
  },
  {
    id: "james-r",
    name: "James R.",
    height: "5'5",
    city: "Atlanta, GA",
    title: "1-on-1 coaching",
    daysIn: 67,
    product: "1-on-1 Coaching",
    quote:
      "I messaged Axel on a Thursday night panicking about a first date the next day. He walked me through the whole thing. Venue, how to open, when to go for the second date close. She texted me first the next morning.",
    initial: "J",
    rating: 5,
  },
  {
    id: "david-k",
    name: "David K.",
    height: "5'7",
    city: "Chicago, IL",
    title: "Approach work",
    daysIn: 44,
    product: "Approach Like a King",
    quote:
      "I used to freeze up the second I saw a girl I wanted to talk to. This ebook killed that completely. The opener structure is so simple that you stop overthinking and just go. Three approaches my first week out.",
    initial: "D",
    rating: 5,
  },
  {
    id: "ryan-s",
    name: "Ryan S.",
    height: "5'6",
    city: "Brooklyn, NY",
    title: "Mindset reset",
    daysIn: 51,
    product: "Unshakeable",
    quote:
      "I kept getting in my head about my height before dates. Unshakeable is the only thing that actually fixed that. Not by ignoring it but by completely reframing what it means. I stopped performing and started just being myself.",
    initial: "R",
    rating: 5,
  },
  {
    id: "tony-l",
    name: "Tony L.",
    height: "5'4",
    city: "Miami, FL",
    title: "Texting game",
    daysIn: 38,
    product: "She Replied, Now What",
    quote:
      "I was getting matches but never getting to the date. I would just run out of things to say or wait too long and she would ghost. This ebook gave me a clear system. My date rate went from almost zero to multiple a month.",
    initial: "T",
    rating: 5,
  },
  {
    id: "alex-b",
    name: "Alex B.",
    height: "5'6",
    city: "Phoenix, AZ",
    title: "Full system",
    daysIn: 91,
    product: "3 Month Transformation",
    quote:
      "Three months ago I had not been on a date in over a year. Axel fixed my Hinge, my approach, my texting, and my frame all at the same time. I am now seeing two women consistently and none of it feels forced.",
    initial: "A",
    rating: 5,
  },
];
