import fs from "node:fs";
import path from "node:path";
import { NextResponse } from "next/server";
import { auth } from "@/auth";

export const runtime = "nodejs";

type ProtectedFile = {
  privatePath: string;
  downloadName: string;
  requiredEntitlements: string[];
};

const FILES: Record<string, ProtectedFile> = {
  "she-replied-now-what.pdf": {
    privatePath: "ebooks/she-replied-now-what.pdf",
    downloadName: "she-replied-now-what.pdf",
    requiredEntitlements: ["protocols", "playbook", "coaching", "empire"],
  },
  "first-date-blueprint.pdf": {
    privatePath: "ebooks/first-date-blueprint.pdf",
    downloadName: "first-date-blueprint.pdf",
    requiredEntitlements: ["protocols", "playbook", "coaching", "empire"],
  },
  "unshakeable.pdf": {
    privatePath: "ebooks/unshakeable.pdf",
    downloadName: "unshakeable.pdf",
    requiredEntitlements: ["protocols", "playbook", "coaching", "empire"],
  },
  "presence-code.pdf": {
    privatePath: "ebooks/presence-code.pdf",
    downloadName: "presence-code.pdf",
    requiredEntitlements: ["protocols", "playbook", "coaching", "empire"],
  },
  "approach-like-a-king.pdf": {
    privatePath: "ebooks/approach-like-a-king.pdf",
    downloadName: "approach-like-a-king.pdf",
    requiredEntitlements: ["protocols", "playbook", "coaching", "empire"],
  },
  "attraction-conversation.pdf": {
    privatePath: "ebooks/attraction-conversation.pdf",
    downloadName: "attraction-conversation.pdf",
    requiredEntitlements: ["protocols", "playbook", "coaching", "empire"],
  },
  "swipe-right-on-yourself.pdf": {
    privatePath: "ebooks/swipe-right-on-yourself.pdf",
    downloadName: "swipe-right-on-yourself.pdf",
    requiredEntitlements: ["protocols", "playbook", "coaching", "empire"],
  },
  "SKE-fitness-3-day-program.pdf": {
    privatePath: "fitness/SKE Fitness 3 day program.pdf",
    downloadName: "SKE Fitness 3 day program.pdf",
    requiredEntitlements: ["built-different", "empire"],
  },
  "SKE-fitness-program-2.pdf": {
    privatePath: "fitness/SKE Fitness program 2.pdf",
    downloadName: "SKE Fitness program 2.pdf",
    requiredEntitlements: ["built-different", "empire"],
  },
  "SKE-fitness-program-3.pdf": {
    privatePath: "fitness/SKE Fitness program 3.pdf",
    downloadName: "SKE Fitness program 3.pdf",
    requiredEntitlements: ["built-different", "empire"],
  },
  "SKE-fitness-program-4.pdf": {
    privatePath: "fitness/SKE Fitness program 4.pdf",
    downloadName: "SKE Fitness program 4.pdf",
    requiredEntitlements: ["built-different", "empire"],
  },
  "SKE-fitness-program-5.pdf": {
    privatePath: "fitness/SKE Fitness program 5.pdf",
    downloadName: "SKE Fitness program 5.pdf",
    requiredEntitlements: ["built-different", "empire"],
  },
};

type SessionShape = {
  user?: {
    entitlements?: unknown;
  };
};

function getSessionEntitlements(session: SessionShape | null): string[] {
  const value = session?.user?.entitlements;
  if (!Array.isArray(value)) return [];
  return value.filter((v): v is string => typeof v === "string");
}

function hasRequiredEntitlement(entitlements: string[], required: string[]): boolean {
  const set = new Set(entitlements);
  return required.some((ent) => set.has(ent));
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ filename: string }> },
) {
  const { filename: rawFilename } = await params;
  const filename = decodeURIComponent(rawFilename);
  const file = FILES[filename];
  if (!file) {
    return NextResponse.json({ message: "File not found." }, { status: 404 });
  }

  const session = (await auth()) as SessionShape | null;
  if (!session?.user) {
    const redirectTo = "/portal/counsel?message=You%20need%20an%20account%20to%20access%20this%20content.";
    return NextResponse.json(
      {
        message: "You need an account to access this content.",
        redirectTo,
      },
      {
        status: 401,
        headers: { Location: redirectTo },
      },
    );
  }

  const entitlements = getSessionEntitlements(session);
  if (!hasRequiredEntitlement(entitlements, file.requiredEntitlements)) {
    const redirectTo =
      "https://short-kings-website.vercel.app/products?message=Upgrade%20your%20plan%20to%20access%20this%20content.";
    return NextResponse.json(
      {
        message: "Upgrade your plan to access this content.",
        redirectTo,
      },
      {
        status: 403,
        headers: { Location: redirectTo },
      },
    );
  }

  const absolutePath = path.join(process.cwd(), "private", file.privatePath);
  if (!fs.existsSync(absolutePath)) {
    return NextResponse.json({ message: "File not found." }, { status: 404 });
  }

  const stream = fs.createReadStream(absolutePath);
  return new NextResponse(stream as unknown as ReadableStream, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${file.downloadName}"`,
    },
  });
}
