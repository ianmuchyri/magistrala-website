"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface FAQItemProps {
  question: string;
  answer: string;
}

const LINK_RE = /\[([^\]]+)\]\(([^)]+)\)/g;

function renderAnswer(text: string) {
  const parts: React.ReactNode[] = [];
  const matches = [...text.matchAll(LINK_RE)];
  let last = 0;
  for (const match of matches) {
    if (match.index > last) parts.push(text.slice(last, match.index));
    parts.push(
      <Link
        key={match.index}
        href={match[2]}
        className="text-primary underline underline-offset-2 hover:text-primary/80"
      >
        {match[1]}
      </Link>,
    );
    last = match.index + match[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

export function FAQAccordionItem({ question, answer }: FAQItemProps) {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const showAnswer = !mounted || isOpen;

  return (
    <div className="py-5">
      <button
        type="button"
        onClick={() => setIsOpen((o) => !o)}
        aria-expanded={mounted ? isOpen : false}
        className="flex w-full items-start justify-between gap-4 text-left p-2"
      >
        <span className="text-xl font-medium text-foreground">{question}</span>
        <ChevronDown
          className={cn(
            "size-4 text-muted-foreground shrink-0 mt-1 transition-transform duration-200",
            mounted && isOpen && "rotate-180",
          )}
        />
      </button>

      <div
        className={cn(
          "grid transition-all duration-200",
          showAnswer
            ? "grid-rows-[1fr] opacity-100 mt-3"
            : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <p className="text-lg text-muted-foreground leading-relaxed pr-8">
            {renderAnswer(answer)}
          </p>
        </div>
      </div>
    </div>
  );
}
