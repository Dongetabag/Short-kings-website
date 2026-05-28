"use client";

import { useCallback, useEffect } from "react";

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

function ensureTypeformScript(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.tf?.createPopup) return Promise.resolve();
  const existing = document.querySelector<HTMLScriptElement>(
    `script[src="${TYPEFORM_SCRIPT_SRC}"]`
  );
  if (existing) {
    if (existing.dataset.tfLoaded === "true") return Promise.resolve();
    return new Promise<void>((resolve) => {
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => resolve(), { once: true });
    });
  }
  return new Promise<void>((resolve) => {
    const s = document.createElement("script");
    s.src = TYPEFORM_SCRIPT_SRC;
    s.async = true;
    s.addEventListener(
      "load",
      () => {
        s.dataset.tfLoaded = "true";
        resolve();
      },
      { once: true }
    );
    s.addEventListener("error", () => resolve(), { once: true });
    document.head.appendChild(s);
  });
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
    void ensureTypeformScript();
  }, []);

  const onClick = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      await ensureTypeformScript();
      const create = window.tf?.createPopup;
      if (create) {
        try {
          create(formId, { opacity: 100 }).open();
          return;
        } catch {
          // fall through to redirect
        }
      }
      window.open(
        `https://form.typeform.com/to/${formId}`,
        "_blank",
        "noopener,noreferrer"
      );
    },
    [formId]
  );

  return (
    <button type="button" onClick={onClick} className={className}>
      {children}
    </button>
  );
}
