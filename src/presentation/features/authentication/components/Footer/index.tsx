import Link from "next/link";
import type { FooterProps } from "./types";

export function Footer({ navigateTo, label, linkLabel }: FooterProps) {
  return (
    <div className="mt-8 text-center text-sm text-muted-foreground">
      {label}{" "}
      <Link
        href={navigateTo}
        className="font-medium text-primary hover:opacity-80 cursor-pointer transition"
      >
        {linkLabel}
      </Link>
    </div>
  );
}
