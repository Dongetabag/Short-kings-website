/**
 * v1 mock data layer for the admin portal.
 *
 * Phase 2 swaps these functions for Neon Postgres queries.
 * Component code only imports these helpers — no DB knowledge in pages.
 */

export type Member = {
  id: string;
  email: string;
  name: string;
  height: string;
  city: string;
  joinedAt: string;
  lastActive: string;
  ltv: number;
  entitlements: string[];
};

export type Order = {
  id: string;
  email: string;
  product: string;
  amount: number;
  status: "paid" | "refunded" | "pending";
  date: string;
};

export type Lead = {
  id: string;
  email: string;
  source: "fitness-magnet" | "calendly-inquiry" | "newsletter" | "dating-funnel";
  receivedAt: string;
  notes?: string;
};

export async function listMembers(): Promise<Member[]> {
  return [
    {
      id: "m_001",
      email: "marcus@example.com",
      name: "Marcus T.",
      height: "5'6",
      city: "Los Angeles, CA",
      joinedAt: "2026-02-14",
      lastActive: "2026-05-02",
      ltv: 60,
      entitlements: ["bundle"],
    },
    {
      id: "m_002",
      email: "james@example.com",
      name: "James R.",
      height: "5'5",
      city: "Austin, TX",
      joinedAt: "2026-01-09",
      lastActive: "2026-04-29",
      ltv: 105,
      entitlements: ["bundle"],
    },
    {
      id: "m_003",
      email: "david@example.com",
      name: "David K.",
      height: "5'7",
      city: "Chicago, IL",
      joinedAt: "2026-03-22",
      lastActive: "2026-05-03",
      ltv: 195,
      entitlements: ["bundle", "coaching"],
    },
  ];
}

export async function listOrders(): Promise<Order[]> {
  return [
    { id: "o_104", email: "david@example.com", product: "1-on-1 Coaching", amount: 150, status: "paid", date: "2026-05-01" },
    { id: "o_102", email: "marcus@example.com", product: "The Full Library", amount: 60, status: "paid", date: "2026-02-14" },
    { id: "o_101", email: "ryan@example.com", product: "The Approach Blueprint", amount: 20, status: "refunded", date: "2026-02-09" },
  ];
}

export async function listLeads(): Promise<Lead[]> {
  return [
    {
      id: "l_001",
      email: "incoming@example.com",
      source: "fitness-magnet",
      receivedAt: "2026-05-03",
      notes: "Downloaded SKE Fitness 3 Day. No follow up yet.",
    },
    {
      id: "l_002",
      email: "anothermember@example.com",
      source: "calendly-inquiry",
      receivedAt: "2026-05-02",
      notes: "Asked about pricing for 1-on-1.",
    },
  ];
}

export async function getKpis() {
  return {
    visitors30d: 12480,
    heroCtaClicks30d: 1872,
    productsViews30d: 3104,
    bundleConversions30d: 64,
    coachingSessions30d: 9,
    revenue30dUsd: 6240,
  };
}
