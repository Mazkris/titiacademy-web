export default function WhyTiti() {
  const reasons = [
    {
      icon: "🎓",
      title: "Praktisi Berpengalaman",
      desc: "Dipimpin oleh Titi Agustina, SE.Cmt.CPHRM — praktisi HR 15+ tahun dengan sertifikasi nasional.",
    },
    {
      icon: "📋",
      title: "Metode Aplikatif",
      desc: "Bukan teori kosong. Setiap program dilengkapi form tools, template, dan pendampingan implementasi.",
    },
    {
      icon: "🏢",
      title: "Ratusan Klien",
      desc: "Dipercaya oleh perusahaan manufaktur, logistik, teknologi, dan berbagai sektor industri.",
    },
    {
      icon: "🔧",
      title: "Customizable",
      desc: "Program dapat disesuaikan dengan kebutuhan spesifik organisasi Anda — in-house atau public workshop.",
    },
    {
      icon: "📊",
      title: "Terukur & Terstruktur",
      desc: "Setiap pelatihan memiliki KPI evaluasi: reaction, learning, behavior, dan business impact.",
    },
    {
      icon: "🤝",
      title: "Pendampingan Lanjutan",
      desc: "Kami tidak berhenti di training. Pendampingan post-training memastikan implementasi berjalan efektif.",
    },
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">
            Mengapa Titi Academy
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-3 mb-4">
            Lebih dari Sekadar Training Biasa
          </h2>
          <p className="text-muted">
            Kami hadir sebagai mitra strategis pengembangan SDM — bukan sekadar vendor pelatihan.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="bg-white rounded-xl p-6 border border-gray-100 hover:border-accent/30 hover:shadow-md transition-all duration-300"
            >
              <div className="text-3xl mb-4">{r.icon}</div>
              <h3 className="text-lg font-bold text-primary mb-2">{r.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
