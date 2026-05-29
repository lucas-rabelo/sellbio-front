import type { LogoProps } from "./types";

export function Logo({ hasSlogan = true }: LogoProps) {
  return (
    <div className="mb-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold tracking-tight">
        Sell
        <span className="text-primary">Bio</span>
      </h1>

      {hasSlogan ? (
        <p className="mt-2 text-sm text-muted-foreground">
          Seu link, suas vendas.
        </p>
      ) : null}
    </div>
  );
}
