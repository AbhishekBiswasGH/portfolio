// fonts
import { geist } from "@fonts/geist";

// components
import Footer from "@/layouts/footer/Footer";
import Header from "@layouts/header/Header";

// styles
import "./globals.css";

// types
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.sans.variable}`}
    >
      <body
        className={`overflow-x-hidden bg-matte font-sans text-snow antialiased sm:bg-latex`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
