export function ContainerCard({ children }: { children: React.ReactNode }) {
  return(
    <div className="relative w-full max-w-md overflow-hidden rounded-xl border border-border bg-card/95 p-8 shadow-2xl backdrop-blur">
      {children}
    </div>
  );
}