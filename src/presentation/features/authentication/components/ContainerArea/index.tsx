import type { ContainerAreaProps } from "./types";

export function ContainerArea({ children }: ContainerAreaProps) {
  return(
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background p-6">
      <div className="absolute left-0 top-0 h-full w-32 bg-primary/30 blur-3xl" />
      <div className="absolute right-0 top-0 h-full w-32 bg-primary/20 blur-3xl" />

      {children}
    </main>
  );
}