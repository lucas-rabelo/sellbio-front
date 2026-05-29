import type { HeaderProps } from "./types";

export function Header({ title, description }: HeaderProps) {
  return (
    <div className="mb-8 text-center">
      <h2 className="text-xl font-bold text-foreground">
        {title}
      </h2>

      <p className="mt-2 text-sm text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
