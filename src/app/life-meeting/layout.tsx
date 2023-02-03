import "@/styles/globals.css";

export default function LifeMeetingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <head />
      <body>{children}</body>
    </main>
  );
}
