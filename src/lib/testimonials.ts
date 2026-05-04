export type Testimonial = {
  id: string;
  name: string;
  height: string;
  city: string;
  /** Empire title we award. */
  title: string;
  /** Days since the buyer joined the Empire. */
  daysIn: number;
  product: "Empire Bundle" | "Counsel AI" | "Royal Counsel";
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
    name: "Sir Marcus T.",
    height: "5'6",
    city: "Los Angeles, CA",
    title: "Knight of the Approach",
    daysIn: 92,
    product: "Empire Bundle",
    quote:
      "Three dates in week one with women I would have called out of my league. The Approach Blueprint did not change my height. It changed the first ten seconds.",
    initial: "M",
    rating: 5,
  },
  {
    id: "james-r",
    name: "Lord James R.",
    height: "5'5",
    city: "Austin, TX",
    title: "Lord of the Frame",
    daysIn: 184,
    product: "Empire Bundle",
    quote:
      "Six months in, my profile gets four times the matches and the conversations actually go somewhere. Unshakeable was the chapter that flipped the switch.",
    initial: "J",
    rating: 5,
  },
  {
    id: "david-k",
    name: "Baron David K.",
    height: "5'7",
    city: "Chicago, IL",
    title: "Baron of the Counsel",
    daysIn: 41,
    product: "Royal Counsel",
    quote:
      "I asked the Counsel for a text reply at 11pm on a Saturday. Got a frame, a question, and a plan. Tuesday I was on a date. The AI is the unfair advantage.",
    initial: "D",
    rating: 5,
  },
  {
    id: "ryan-s",
    name: "Sir Ryan S.",
    height: "5'8",
    city: "Brooklyn, NY",
    title: "Knight of the Frame",
    daysIn: 67,
    product: "Counsel AI",
    quote:
      "I ran the Counsel for a month before I bought the bundle. The AI alone reframed three situations I was about to fumble. Then I got the books and the rest of the system clicked.",
    initial: "R",
    rating: 5,
  },
  {
    id: "tony-l",
    name: "Sir Tony L.",
    height: "5'4",
    city: "Miami, FL",
    title: "Knight of the Throne Room",
    daysIn: 121,
    product: "Empire Bundle",
    quote:
      "Style Guide alone earned the bundle back in a week. Tailoring my existing closet to the inseam math added two visual inches and zero dollars.",
    initial: "T",
    rating: 5,
  },
  {
    id: "alex-b",
    name: "Sir Alex B.",
    height: "5'6",
    city: "Seattle, WA",
    title: "Knight of the Empire",
    daysIn: 58,
    product: "Empire Bundle",
    quote:
      "The frame work hit different than every PUA channel I had seen. Less acting, more identity. I stopped feeling like I was performing on dates.",
    initial: "A",
    rating: 5,
  },
];
