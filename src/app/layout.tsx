import "@/styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className=" bg-primary">
      <head />
      <body>{children}</body>
    </html>
  );
}
