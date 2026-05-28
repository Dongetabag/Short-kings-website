"use client";

import { useEffect } from "react";

const TYPEFORM_SCRIPT_SRC = "https://embed.typeform.com/next/embed.js";

type TfPopupHandle = { open: () => void; close?: () => void };
type TfCreatePopup = (
  id: string,
  options?: { opacity?: number; hideHeaders?: boolean; hideFooter?: boolean }
) => TfPopupHandle;

declare global {
  interface Window {
    tf?: { createPopup?: TfCreatePopup };
  }
}

function ensureTypeformScript(): void {
  if (typeof window === "undefined") return;
  if (window.tf?.createPopup) return;
  if (document.querySelector(`script[src="${TYPEFORM_SCRIPT_SRC}"]`)) return;
  const s = document.createElement("script");
  s.src = TYPEFORM_SCRIPT_SRC;
  s.async = true;
  document.head.appendChild(s);
}

type TypeformPopupButtonProps = {
  formId: string;
  className?: string;
  children: React.ReactNode;
};

export function TypeformPopupButton({
  formId,
  className,
  children,
}: TypeformPopupButtonProps) {
  useEffect(() => {
    ensureTypeformScript();
  }, []);

  // Render as a real link to the Typeform URL so the apply path is
  // never dead — if JS fails, popup blockers fire, or embed.js never
  // loaded, the browser still navigates to the form. When embed.js is
  // ready by click time, we synchronously open the popup overlay
  // instead and preventDefault. Synchronous == keeps the user gesture
  // intact so the popup isn't blocked.
  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    const create = window.tf?.createPopup;
    if (!create) return;
    try {
      create(formId, { opacity: 100 }).open();
      e.preventDefault();
    } catch {
      // let the link navigate as a fallback
    }
  };

  return (
    <a
      href={`https://form.typeform.com/to/${formId}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={className}
    >
      {children}
    </a>
  );
}
