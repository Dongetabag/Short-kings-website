export type Testimonial = {
  id: string;
  name: string;
  height: string;
  city: string;
  /** Short tag we surface on the testimonial card. */
  title: string;
  /** Days since the buyer joined. */
  daysIn: number;
  product: "The Full Library" | "Counsel AI" | "1-on-1 Coaching";
  quote: string;
  /** Single-letter monogram for the gradient avatar. Real photos land later. */
  initial: string;
  /** When real headshots are uploaded, set this to /media/testimonials/<id>.jpg */
  avatar?: string;
  /** Optional context image used as proof B-roll on the testimonial page. */
  proofImage?: string;
  rating: 5 | 4;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "marcus-t",
    name: "Marcus T.",
    height: "5'6",
    city: "Los Angeles, CA",
    title: "Approach work",
    daysIn: 92,
    product: "The Full Library",
    quote:
      "Three dates in week one with women I would have called out of my league. The Approach Blueprint did not change my height. It changed the first ten seconds.",
    initial: "M",
    rating: 5,
  },
  {
    id: "james-r",
    name: "James R.",
    height: "5'5",
    city: "Austin, TX",
    title: "Frame + mindset",
    daysIn: 184,
    product: "The Full Library",
    quote:
      "Six months in, my profile gets four times the matches and the conversations actually go somewhere. Unshakeable was the chapter that flipped the switch.",
    initial: "J",
    rating: 5,
  },
  {
    id: "david-k",
    name: "David K.",
    height: "5'7",
    city: "Chicago, IL",
    title: "AI advisor",
    daysIn: 41,
    product: "1-on-1 Coaching",
    quote:
      "I asked Counsel for a text reply at 11pm on a Saturday. Got a frame, a question, and a plan. Tuesday I was on a date. The AI is the unfair advantage.",
    initial: "D",
    rating: 5,
  },
  {
    id: "ryan-s",
    name: "Ryan S.",
    height: "5'8",
    city: "Brooklyn, NY",
    title: "AI advisor",
    daysIn: 67,
    product: "Counsel AI",
    quote:
      "I ran Counsel for a month before I bought the bundle. The AI alone reframed three situations I was about to fumble. Then I got the books and the rest of the system clicked.",
    initial: "R",
    rating: 5,
  },
  {
    id: "tony-l",
    name: "Tony L.",
    height: "5'4",
    city: "Miami, FL",
    title: "Style work",
    daysIn: 121,
    product: "The Full Library",
    quote:
      "The style chapter alone earned the bundle back in a week. Tailoring my existing closet to the inseam math added two visual inches and zero dollars.",
    initial: "T",
    rating: 5,
  },
  {
    id: "alex-b",
    name: "Alex B.",
    height: "5'6",
    city: "Seattle, WA",
    title: "Mindset reset",
    daysIn: 58,
    product: "The Full Library",
    quote:
      "The frame work hit different than every PUA channel I had seen. Less acting, more identity. I stopped feeling like I was performing on dates.",
    initial: "A",
    rating: 5,
  },
];
