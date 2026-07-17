import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Webinar CV-HRD — Dibatalkan | Titi Academy",
  description:
    "Webinar CV yang Bikin HRD Berhenti Scroll telah dibatalkan. Nantikan program kami berikutnya.",
  openGraph: {
    title: "Webinar CV-HRD — Dibatalkan",
    description:
      "Webinar ini telah dibatalkan. Ikuti terus Titi Academy untuk program dan webinar berikutnya.",
    type: "website",
    locale: "id_ID",
  },
};

export default function WebinarCVPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f7f4] to-white flex flex-col">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center">
          <span className="font-bold text-[#1a2744] text-lg tracking-tight">
            Titi<span className="text-[#c7923c]">Academy</span>
          </span>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="max-w-lg mx-auto text-center">
          {/* Icon */}
          <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-[#f8f7f4] border border-black/5 flex items-center justify-center">
            <svg
              className="w-10 h-10 text-[#c7923c]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>

          {/* Heading */}
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            DIBATALKAN
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1a2744] leading-tight mb-4">
            Webinar CV-HRD
            <span className="block text-[#c7923c]">Telah Dibatalkan</span>
          </h1>

          <p className="text-lg text-[#6b7280] leading-relaxed mb-2">
            Webinar &quot;CV yang Bikin HRD Berhenti Scroll&quot; yang
            dijadwalkan pada 16 Juli 2026 telah dibatalkan.
          </p>

          <p className="text-[#6b7280] leading-relaxed mb-10">
            Kami mohon maaf atas ketidaknyamanan ini. Titi Academy sedang dalam
            proses penataan ulang program untuk memberikan layanan yang lebih
            baik. Nantikan program dan webinar kami berikutnya.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/program"
              className="inline-flex items-center justify-center gap-2 bg-[#c7923c] hover:bg-[#a87a30] text-white font-semibold px-8 py-3 rounded-xl transition-all"
            >
              Lihat Program Lain
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
            <a
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-white border border-black/10 hover:border-[#c7923c]/30 text-[#1a2744] font-semibold px-8 py-3 rounded-xl transition-all"
            >
              Kembali ke Beranda
            </a>
          </div>

          {/* Contact */}
          <p className="mt-8 text-sm text-[#6b7280]">
            Ada pertanyaan?{" "}
            <a
              href="https://wa.me/6285174145800"
              className="text-[#c7923c] hover:underline font-medium"
            >
              Hubungi kami via WhatsApp
            </a>
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#1a2744] text-white/60 text-center py-6 text-sm">
        &copy; 2026 Titi Academy. All rights reserved.
      </footer>
    </div>
  );
}
