export function Reveal({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`reveal ${className}`} data-reveal>
      {children}
    </div>
  );
}
