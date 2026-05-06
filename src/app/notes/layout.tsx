import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/notes" },
};

export default function NotesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
