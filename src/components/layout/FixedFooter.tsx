import Link from "next/link";

interface FixedFotoerProps {
  children: React.ReactNode;
}

export default function FixedFooter({ children }: FixedFotoerProps) {
  return (
    <div className="fixed bottom-0 w-full">
      <div className="container mx-auto p-4">{children}</div>
    </div>
  );
}
