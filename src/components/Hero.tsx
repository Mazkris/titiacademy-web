import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-accent/5" />
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-40 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-block text-accent text-sm font-semibold uppercase tracking-wider mb-4">
            Human Capital & Business Excellence Consultant
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-6">
            Kembangkan Potensi{" "}
            <span className="text-accent">SDM</span>{" "}
            Perusahaan Anda
          </h1>
          <p className="text-lg sm:text-xl text-muted mb-8 leading-relaxed max-w-2xl">
            Titi Academy hadir sebagai mitra strategis pengembangan SDM. Program pelatihan terstruktur 
            untuk meningkatkan kompetensi karyawan, dari level staf hingga manajemen puncak.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#services"
              className="inline-flex justify-center items-center bg-primary text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-primary-light transition-colors"
            >
              Lihat Program →
            </a>
            <a
              href="#contact"
              className="inline-flex justify-center items-center border-2 border-primary text-primary px-8 py-3.5 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              Konsultasi Gratis
            </a>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 pt-12 border-t border-gray-200">
          {[
            { value: "25+", label: "Modul Pelatihan" },
            { value: "15+", label: "Tahun Pengalaman" },
            { value: "100+", label: "Perusahaan Mitra" },
            { value: "5,000+", label: "Alumni Training" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-bold text-accent">{stat.value}</div>
              <div className="text-sm text-muted mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
