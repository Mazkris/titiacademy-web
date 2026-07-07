import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Titi Academy | Human Capital & Business Excellence Consultant",
  description:
    "Titi Academy — Human Capital & Business Excellence Consultant. Pelatihan dan konsultasi MSDM profesional untuk perusahaan.",
  keywords: [
    "HR training",
    "pelatihan MSDM",
    "konsultan HR",
    "Titi Academy",
    "Supervisory Development",
    "training karyawan",
    "pengembangan SDM",
  ],
  openGraph: {
    title: "Titi Academy | Human Capital & Business Excellence Consultant",
    description:
      "Mitra pengembangan SDM perusahaan Anda. Program pelatihan profesional oleh Titi Agustina SE.Cmt.CPHRM.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
