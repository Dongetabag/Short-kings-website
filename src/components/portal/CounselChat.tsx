"use client";

import { useState, useRef, useEffect, FormEvent } from "react";
import { Send, Sparkles, RefreshCw, Crown } from "lucide-react";
import { COUNSEL_QUICK_ACTIONS } from "@/lib/counsel";

type Message = { role: "user" | "assistant"; content: string };

const GREETING: Message = {
  role: "assistant",
  content:
    "Sovereign. Speak. Bring me the situation, the screenshot, the profile, the question. The Counsel is open.",
};

export function CounselChat() {
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, pending]);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || pending) return;
    setError(null);
    const next: Message[] = [...messages, { role: "user", content: trimmed }];
    setMessages(next);
    setInput("");
    setPending(true);

    try {
      const res = await fetch("/api/counsel/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: next.filter((m) => m.role !== "assistant" || m !== GREETING),
        }),
      });

      if (!res.ok) {
        const payload = await res.json().catch(() => null);
        throw new Error(payload?.message ?? `Counsel returned ${res.status}`);
      }

      const reader = res.body?.getReader();
      if (!reader) throw new Error("No response stream from the Counsel.");
      const decoder = new TextDecoder();
      let acc = "";
      setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        acc += decoder.decode(value, { stream: true });
        setMessages((prev) => {
          const copy = [...prev];
          copy[copy.length - 1] = { role: "assistant", content: acc };
          return copy;
        });
      }
    } catch (e) {
      const msg = e instanceof Error ? e.message : "The Counsel is silent.";
      setError(msg);
      setMessages((prev) => prev.slice(0, -1));
    } finally {
      setPending(false);
    }
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    send(input);
  }

  function reset() {
    setMessages([GREETING]);
    setError(null);
  }

  return (
    <div className="flex flex-col gap-5">
      {/* Quick actions */}
      <div className="flex flex-wrap gap-2">
        {COUNSEL_QUICK_ACTIONS.map((q) => (
          <button
            key={q.label}
            type="button"
            disabled={pending}
            onClick={() => send(q.prompt)}
            className="inline-flex h-9 items-center gap-2 rounded-md border border-gold/30 bg-white/[0.03] px-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/80 hover:border-gold/60 hover:text-white disabled:opacity-50"
          >
            <Sparkles className="h-3 w-3 text-gold" /> {q.label}
          </button>
        ))}
        <button
          type="button"
          onClick={reset}
          className="ml-auto inline-flex h-9 items-center gap-2 rounded-md border border-white/10 bg-transparent px-4 text-xs uppercase tracking-[0.16em] text-white/55 hover:text-white"
        >
          <RefreshCw className="h-3 w-3" /> New Audience
        </button>
      </div>

      {/* Conversation */}
      <div
        ref={scrollRef}
        className="relative h-[60vh] min-h-[480px] overflow-y-auto rounded-2xl border border-gold/30 bg-stone/40 p-5"
      >
        <div className="absolute inset-x-0 top-0 h-px crown-hairline" />
        <div className="flex flex-col gap-4">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-7 whitespace-pre-wrap ${
                m.role === "user"
                  ? "self-end bg-gold/15 text-white border border-gold/30"
                  : "self-start bg-white/[0.04] text-white/85 border border-white/10"
              }`}
            >
              {m.role === "assistant" ? (
                <p className="mb-2 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">
                  <Crown className="h-3 w-3" /> Counsel
                </p>
              ) : null}
              {m.content || (pending && i === messages.length - 1 ? "…" : "")}
            </div>
          ))}
          {pending && messages[messages.length - 1]?.role === "user" ? (
            <div className="self-start max-w-[85%] rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/60">
              <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-gold" />
              <span className="ml-2">Counsel is composing…</span>
            </div>
          ) : null}
        </div>
      </div>

      {error ? (
        <p className="rounded-md border border-ruby/40 bg-ruby/[0.06] px-4 py-3 text-sm text-ruby">
          {error}
        </p>
      ) : null}

      {/* Input */}
      <form
        onSubmit={onSubmit}
        className="flex items-end gap-2 rounded-xl border border-gold/30 bg-stone/40 p-3"
      >
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              send(input);
            }
          }}
          placeholder="Speak to the Counsel… (Shift+Enter for newline)"
          rows={2}
          className="flex-1 resize-none bg-transparent px-2 py-2 text-sm text-white placeholder:text-white/35 outline-none"
        />
        <button
          type="submit"
          disabled={pending || !input.trim()}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-gold text-black hover:bg-goldLight disabled:opacity-50"
          aria-label="Send"
        >
          <Send className="h-4 w-4" />
        </button>
      </form>

      <p className="text-[10px] uppercase tracking-[0.22em] text-white/30">
        Counsel responses are AI-generated. Use the lessons. Apply judgment.
      </p>
    </div>
  );
}
