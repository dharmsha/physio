import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "PhysioCare | Best Physiotherapy Clinic in Patna",
  description:
    "PhysioCare provides expert physiotherapy treatment for back pain, sports injury, post-surgery rehab, and home physiotherapy services in Patna.",
  keywords: [
    "Physiotherapy in Patna",
    "Best Physio Clinic",
    "Back Pain Treatment",
    "Sports Injury Therapy",
    "Home Visit Physiotherapy",
  ],
  authors: [{ name: "PhysioCare Clinic" }],
  creator: "PhysioCare",
  metadataBase: new URL("https://yourdomain.com"), // 🔁 domain baad me change karna
  openGraph: {
    title: "PhysioCare - Recover Faster. Live Pain-Free.",
    description:
      "Expert physiotherapy treatment in Patna. Book your appointment today.",
    url: "https://yourdomain.com",
    siteName: "PhysioCare",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800 flex flex-col min-h-screen">
        
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer */}
        <Footer />

      </body>
    </html>
  );
}