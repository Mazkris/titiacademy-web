import type { Metadata } from "next";
import { CountdownTimer } from "./CountdownTimer";

export const metadata: Metadata = {
  title: "CV yang Bikin HRD Berhenti Scroll — Webinar Eksklusif | Titi Academy",
  description:
    "Belajar langsung dari Assessor HRD profesional. Pelajari cara membuat CV yang lolos screening, jawaban interview yang dicari HRD, dan personal branding untuk fresh graduate.",
  openGraph: {
    title: "CV yang Bikin HRD Berhenti Scroll — Webinar Eksklusif",
    description:
      "Belajar dari yang biasanya mewawancarai kamu. Webinar 2 jam bareng Titi Agustina, Assessor HRD profesional.",
    type: "website",
    locale: "id_ID",
  },
};

// Set webinar date: 5 days from now = 16 Juli 2026, 19:00 WIB
const WEBINAR_DATE = new Date("2026-07-16T19:00:00+07:00");

const WHAT_YOU_LEARN = [
  {
    icon: "📄",
    title: "Struktur CV yang Lolos ATS",
    desc: "90% CV fresh graduate ditolak sistem ATS sebelum dibaca manusia. Pelajari format dan kata kunci yang membuat CV-mu lolos.",
  },
  {
    icon: "🎯",
    title: "4 Elemen yang HRD Cari dalam 6 Detik",
    desc: "HRD rata-rata hanya menghabiskan 6 detik pertama untuk memutuskan lanjut atau buang. Ketahui elemen yang mereka cari.",
  },
  {
    icon: "💡",
    title: "Cara Menjual Diri Tanpa Pengalaman Kerja",
    desc: "Magang, organisasi, proyek kuliah — cara mengubah pengalaman 'sepele' jadi nilai jual yang HRD lihat.",
  },
  {
    icon: "🚫",
    title: "7 Kesalahan Fatal di CV Fresh Graduate",
    desc: "Kesalahan yang bikin CV langsung masuk tong sampah — dan cara menghindarinya.",
  },
  {
    icon: "🔗",
    title: "LinkedIn yang Menarik Recruiter",
    desc: "Setup profil LinkedIn dalam 15 menit yang bikin recruiter kirim DM duluan.",
  },
];

const BONUS = [
  "Template CV ATS-friendly (3 varian) — siap edit",
  "Daftar 50 pertanyaan interview + jawaban yang HRD cari",
  "Email template follow-up pasca interview",
  "Checklist persiapan interview (H-7 sampai H-1)",
  "30 hari grup Telegram eksklusif — tanya jawab karir",
  "Sertifikat digital peserta webinar",
];

const FAQ = [
  {
    q: "Webinarnya lewat mana?",
    a: "Zoom. Link akan dikirim via email dan WhatsApp 1 jam sebelum acara.",
  },
  {
    q: "Ada rekamannya?",
    a: "Ya! Rekaman bisa diakses 7 hari setelah webinar. Cocok buat yang bentrok jadwal.",
  },
  {
    q: "Cocok buat mahasiswa semester berapa?",
    a: "Semua semester. Tapi paling cocok buat semester 5 ke atas yang mulai siap-siap cari kerja.",
  },
  {
    q: "Aku belum punya pengalaman kerja, masih cocok?",
    a: "Justru ini buat kamu. Kita akan bahas cara menjual pengalaman organisasi, magang, dan proyek kuliah.",
  },
  {
    q: "Ada jaminan uang kembali?",
    a: "Ya. Tidak cocok setelah webinar? Email kami 1×24 jam — uang kembali 100%. No questions asked.",
  },
];

export default function WebinarCVPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f7f4] to-white">
      <WebinarNav />

      {/* SECTION 1 — HERO */}
      <HeroSection />

      {/* SECTION 2 — LOGOS */}
      <SpeakerBadge />

      {/* SECTION 3 — WHAT YOU'LL LEARN */}
      <WhatYouLearn />

      {/* SECTION 4 — SPEAKER */}
      <SpeakerSection />

      {/* SECTION 5 — BONUS */}
      <BonusSection />

      {/* SECTION 6 — PRICING */}
      <PricingSection />

      {/* SECTION 7 — COUNTDOWN */}
      <CountdownSection />

      {/* SECTION 8 — FAQ */}
      <FAQSection />

      {/* SECTION 9 — CLOSING CTA */}
      <ClosingCTA />

      <footer className="bg-[#1a2744] text-white/60 text-center py-6 text-sm">
        © 2026 Titi Academy. All rights reserved.
      </footer>
    </div>
  );
}

/* ── Micro components ─────────────────────────────────── */

function WebinarNav() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <span className="font-bold text-[#1a2744] text-lg tracking-tight">
          Titi<span className="text-[#c7923c]">Academy</span>
        </span>
        <a
          href="#daftar"
          className="bg-[#c7923c] hover:bg-[#a87a30] text-white text-sm font-semibold px-5 py-2 rounded-full transition"
        >
          Daftar Sekarang
        </a>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 pt-16 pb-20 text-center relative z-10">
        {/* Label */}
        <div className="inline-flex items-center gap-2 bg-[#c7923c]/10 text-[#c7923c] text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c7923c] opacity-40" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#c7923c]" />
          </span>
          Webinar Eksklusif — 16 Juli 2026
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1a2744] leading-tight tracking-tight">
          CV yang Bikin HRD{" "}
          <span className="block text-[#c7923c]">Berhenti Scroll</span>
        </h1>

        {/* Subheadline */}
        <p className="mt-6 text-lg sm:text-xl text-[#6b7280] max-w-2xl mx-auto leading-relaxed">
          Webinar 2 jam yang akan mengubah cara kamu dilihat recruiter.{" "}
          <span className="font-semibold text-[#1a2744]">
            Belajar dari yang biasanya mewawancarai kamu.
          </span>
        </p>

        {/* Pain points */}
        <div className="mt-4 flex flex-wrap justify-center gap-2 text-sm text-[#6b7280]">
          <span className="bg-white border px-3 py-1 rounded-full">
            😩 CV sudah kirim 50+ tapi tidak dipanggil?
          </span>
          <span className="bg-white border px-3 py-1 rounded-full">
            🤔 Tidak tahu apa yang sebenarnya HRD cari?
          </span>
          <span className="bg-white border px-3 py-1 rounded-full">
            😰 Grogi interview dan blank saat ditanya?
          </span>
        </div>

        {/* CTA */}
        <div className="mt-10">
          <a
            href="#daftar"
            className="inline-flex items-center gap-2 bg-[#c7923c] hover:bg-[#a87a30] text-white font-bold text-lg px-10 py-4 rounded-xl shadow-lg shadow-[#c7923c]/25 hover:shadow-xl hover:shadow-[#c7923c]/30 transition-all transform hover:-translate-y-0.5"
          >
            Daftar Sekarang — Rp 39.000
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <p className="mt-3 text-sm text-[#6b7280]">
            ⚡ Early bird. Harga normal Rp 79.000.
          </p>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 opacity-[0.03]">
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#c7923c] rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#1a2744] rounded-full blur-3xl" />
      </div>
    </section>
  );
}

function SpeakerBadge() {
  return (
    <section className="max-w-4xl mx-auto px-4 pb-8">
      <p className="text-center text-sm text-[#6b7280] mb-4">
        Bersama Assessor HRD Profesional
      </p>
      <div className="flex justify-center">
        <div className="inline-flex items-center gap-3 bg-white border border-[#c7923c]/20 rounded-2xl px-6 py-4 shadow-sm">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#c7923c] to-[#e0b866] flex items-center justify-center text-white font-bold text-xl">
            TA
          </div>
          <div className="text-left">
            <p className="font-bold text-[#1a2744]">Titi Agustina</p>
            <p className="text-sm text-[#6b7280]">
              SE, Cmt, CPHRM — 15+ tahun di HRD
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatYouLearn() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-20">
      <div className="text-center mb-14">
        <p className="text-[#c7923c] font-semibold text-sm uppercase tracking-wider mb-2">
          Yang Akan Kamu Pelajari
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a2744]">
          Dalam 2 jam, kamu akan kuasai ini
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {WHAT_YOU_LEARN.map((item) => (
          <div
            key={item.title}
            className="bg-white border border-black/5 rounded-2xl p-6 hover:border-[#c7923c]/30 hover:shadow-md transition-all group"
          >
            <div className="text-3xl mb-3">{item.icon}</div>
            <h3 className="font-bold text-[#1a2744] text-lg mb-2 group-hover:text-[#c7923c] transition-colors">
              {item.title}
            </h3>
            <p className="text-sm text-[#6b7280] leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function SpeakerSection() {
  return (
    <section className="bg-white border-y border-black/5 py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Avatar */}
          <div className="shrink-0">
            <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl bg-gradient-to-br from-[#c7923c] to-[#e0b866] flex items-center justify-center text-white text-6xl font-bold shadow-xl">
              TA
            </div>
          </div>

          {/* Bio */}
          <div>
            <p className="text-[#c7923c] font-semibold text-sm uppercase tracking-wider mb-1">
              Tentang Speaker
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a2744] mb-4">
              Titi Agustina, SE, Cmt, CPHRM
            </h2>
            <div className="space-y-3 text-[#1a2744]/80 leading-relaxed">
              <p>
                <strong>15+ tahun pengalaman</strong> di dunia Human Resource
                Development. Certified Professional Human Resource Management
                (CPHRM) dan Certified Management Trainer (CMT).
              </p>
              <p>
                Telah mewawancarai <strong>5.000+ kandidat</strong>, mulai dari
                fresh graduate hingga level manajerial, untuk perusahaan
                nasional dan multinasional.
              </p>
              <p>
                Sekarang, Ibu Titi membuka ilmunya —{" "}
                <strong>bagaimana cara dipilih HRD</strong> — bukan cuma teori,
                tapi pengalaman langsung dari sisi interviewer.
              </p>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="bg-[#f8f7f4] text-[#1a2744] text-xs font-semibold px-3 py-1 rounded-full">
                Assessor MSDM
              </span>
              <span className="bg-[#f8f7f4] text-[#1a2744] text-xs font-semibold px-3 py-1 rounded-full">
                CPHRM Certified
              </span>
              <span className="bg-[#f8f7f4] text-[#1a2744] text-xs font-semibold px-3 py-1 rounded-full">
                CMT
              </span>
              <span className="bg-[#f8f7f4] text-[#1a2744] text-xs font-semibold px-3 py-1 rounded-full">
                15+ Tahun HRD
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BonusSection() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-20">
      <div className="text-center mb-14">
        <p className="text-[#c7923c] font-semibold text-sm uppercase tracking-wider mb-2">
          Bonus Eksklusif
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a2744]">
          Daftar sekarang dapat ini semua
        </h2>
        <p className="mt-3 text-[#6b7280]">
          Nilai total bonus: Rp 350.000+ — sudah include harga tiket
        </p>
      </div>

      <div className="bg-gradient-to-br from-[#1a2744] to-[#2d3f6a] rounded-3xl p-8 sm:p-10">
        <div className="grid sm:grid-cols-2 gap-4">
          {BONUS.map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#c7923c] text-white text-xs font-bold mt-0.5">
                ✓
              </span>
              <span className="text-white/90 text-sm leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="daftar" className="bg-[#f8f7f4] py-20">
      <div className="max-w-lg mx-auto px-4 text-center">
        <p className="text-[#c7923c] font-semibold text-sm uppercase tracking-wider mb-2">
          Harga Spesial
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a2744] mb-10">
          Investasi untuk karir impianmu
        </h2>

        {/* Price Card */}
        <div className="bg-white border-2 border-[#c7923c] rounded-3xl p-8 shadow-xl relative overflow-hidden">
          {/* Badge */}
          <div className="absolute top-0 right-0 bg-[#c7923c] text-white text-xs font-bold px-4 py-1.5 rounded-bl-2xl">
            EARLY BIRD
          </div>

          <p className="text-[#6b7280] text-sm mb-1">Harga Normal</p>
          <p className="text-2xl text-[#6b7280] line-through mb-2">Rp 79.000</p>

          <p className="text-5xl sm:text-6xl font-extrabold text-[#1a2744] mb-3">
            Rp 39<span className="text-2xl">.000</span>
          </p>
          <p className="text-[#6b7280] text-sm mb-8">
            Harga early bird — terbatas 100 slot pertama
          </p>

          {/* What's included */}
          <div className="text-left space-y-2 mb-8">
            {[
              "Webinar 2 jam — 16 Juli 2026, 19:00 WIB",
              "Tanya jawab langsung dengan Ibu Titi",
              "6 bonus eksklusif (Rp 350.000+)",
              "Rekaman bisa diakses 7 hari",
              "Sertifikat digital",
              "Garansi uang kembali 100%",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-[#1a2744]">
                <span className="text-[#c7923c]">✓</span> {item}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="https://wa.me/6285174145800?text=Halo%2C%20saya%20mau%20daftar%20webinar%20CV%20yang%20Bikin%20HRD%20Berhenti%20Scroll%20tanggal%2016%20Juli%202026."
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-[#c7923c] hover:bg-[#a87a30] text-white font-bold text-lg py-4 rounded-2xl transition-all shadow-lg shadow-[#c7923c]/25 hover:shadow-xl hover:shadow-[#c7923c]/30"
          >
            Daftar via WhatsApp →
          </a>
          <p className="text-xs text-[#6b7280] mt-3">
            Atau transfer langsung, konfirmasi via WhatsApp
          </p>
        </div>
      </div>
    </section>
  );
}

function CountdownSection() {
  return (
    <section className="py-12">
      <CountdownTimer targetDate={WEBINAR_DATE} />
    </section>
  );
}

function FAQSection() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <p className="text-[#c7923c] font-semibold text-sm uppercase tracking-wider mb-2">
          FAQ
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a2744]">
          Masih ragu? Mungkin ini jawabannya
        </h2>
      </div>

      <div className="space-y-3">
        {FAQ.map((item) => (
          <details
            key={item.q}
            className="group bg-white border border-black/5 rounded-2xl p-5 hover:border-[#c7923c]/20 transition-colors"
          >
            <summary className="font-semibold text-[#1a2744] cursor-pointer list-none flex justify-between items-center">
              {item.q}
              <span className="text-[#c7923c] group-open:rotate-45 transition-transform text-lg">
                +
              </span>
            </summary>
            <p className="mt-3 text-sm text-[#6b7280] leading-relaxed">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function ClosingCTA() {
  return (
    <section className="bg-gradient-to-br from-[#1a2744] to-[#2d3f6a] py-20">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
          Siap bikin HRD berhenti scroll?
        </h2>
        <p className="text-white/70 text-lg mb-10">
          Jangan biarkan CV-mu jadi yang ke-100 dibuang hari ini.{" "}
          <strong className="text-white">Ambil slotmu sekarang.</strong>
        </p>
        <a
          href="https://wa.me/6285174145800?text=Halo%2C%20saya%20mau%20daftar%20webinar%20CV%20yang%20Bikin%20HRD%20Berhenti%20Scroll%20tanggal%2016%20Juli%202026."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#c7923c] hover:bg-[#e0b866] text-white font-bold text-lg px-12 py-5 rounded-2xl shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-black/25 transition-all"
        >
          Daftar Sekarang — Rp 39.000
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
        <p className="text-white/40 text-sm mt-5">
          💬 Ada pertanyaan?{" "}
          <a href="https://wa.me/6285174145800" className="underline hover:text-white/60">
            Chat WhatsApp
          </a>
        </p>
      </div>
    </section>
  );
}
