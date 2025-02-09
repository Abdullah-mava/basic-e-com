// app/layout.tsx
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import "./globals.css";

export const metadata = {
  title: "Book Store",
  description: "A basic ecommerce site for books",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1 container mx-auto p-6">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
