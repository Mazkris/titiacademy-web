const services = [
  {
    category: "SOFT COMPETENCY",
    items: [
      {
        title: "Supervisory Development Program",
        duration: "16 jam",
        level: "Middle Up",
        desc: "Mengembangkan kemampuan supervisi manajer & supervisor: perencanaan, pengendalian, pemberdayaan tim, problem solving, dan delegasi.",
        modules: ["Peran Supervisor", "Prinsip Manajemen", "Leadership", "Komunikasi Interpersonal", "Problem Solving", "Delegasi"],
      },
      {
        title: "Developing Basic Communication Skills",
        duration: "8 jam",
        level: "Basic",
        desc: "Meningkatkan ketrampilan vokal, visual, dan verbal dalam komunikasi lisan dan tulisan untuk produktivitas kerja.",
        modules: ["Aspek Vokal/Visual/Verbal", "Komunikasi Lisan & Tertulis", "Trilogi Komunikasi Efektif"],
      },
      {
        title: "Building Great Teamwork",
        duration: "8 jam",
        level: "Basic",
        desc: "Memahami dinamika tim, fase pertumbuhan, dan membangun komunikasi efektif antar anggota tim.",
        modules: ["Dinamika Kerjasama Tim", "Fase Pertumbuhan Tim", "Mengelola Konflik Tim"],
      },
      {
        title: "Customer Service Excellence",
        duration: "8 jam",
        level: "Basic",
        desc: "Mengembangkan customer-focused behaviors dan ketrampilan kunci untuk layanan prima.",
        modules: ["Customer-focused Behaviors", "Great Service Skills", "4 Elemen Service Excellence"],
      },
      {
        title: "How to Delegate Work Effectively",
        duration: "8 jam",
        level: "Middle",
        desc: "Memahami peran delegasi dan menerapkan tahapan proses delegasi secara efektif.",
        modules: ["Pengertian & Peran Delegasi", "Tahapan Delegasi Efektif"],
      },
    ],
  },
  {
    category: "PROGRAM MSDM KOMPREHENSIF",
    items: [
      {
        title: "Program Pengembangan MSDM",
        duration: "3-4 bulan",
        level: "All Levels",
        desc: "Program end-to-end: analisa jabatan, beban kerja, uraian jabatan, matriks kompetensi, SOP MSDM, sistem penilaian kinerja, talent pool, dan program suksesi.",
        modules: ["Analisa Jabatan & Beban Kerja", "Matriks & Kamus Kompetensi", "SOP MSDM (12 dokumen)", "Penilaian Kinerja", "Talent Pool & Suksesi", "12 Program Modul"],
      },
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">
            Program Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-3 mb-4">
            Katalog Pelatihan & Konsultasi
          </h2>
          <p className="text-muted">
            Program dirancang oleh praktisi HR profesional untuk memenuhi kebutuhan 
            pengembangan SDM di berbagai level organisasi.
          </p>
        </div>

        {/* Service categories */}
        {services.map((category) => (
          <div key={category.category} className="mb-16 last:mb-0">
            <h3 className="text-sm font-bold text-accent uppercase tracking-widest mb-8 border-b border-gray-200 pb-3">
              {category.category}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((service) => (
                <div
                  key={service.title}
                  className="group border border-gray-200 rounded-xl p-6 hover:border-accent hover:shadow-lg transition-all duration-300"
                >
                  {/* Badges */}
                  <div className="flex gap-2 mb-4">
                    <span className="text-xs font-medium bg-primary/10 text-primary px-2.5 py-1 rounded-full">
                      {service.duration}
                    </span>
                    <span className="text-xs font-medium bg-accent/10 text-accent px-2.5 py-1 rounded-full">
                      {service.level}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-sm text-muted mb-4 leading-relaxed">
                    {service.desc}
                  </p>

                  {/* Modules */}
                  <div className="flex flex-wrap gap-1.5">
                    {service.modules.map((mod) => (
                      <span
                        key={mod}
                        className="text-xs bg-surface text-muted px-2 py-1 rounded"
                      >
                        {mod}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* CTA inside services */}
        <div className="text-center mt-16 pt-12 border-t border-gray-200">
          <p className="text-muted mb-4">
            Butuh program yang disesuaikan dengan kebutuhan perusahaan Anda?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-accent text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-accent-light transition-colors"
          >
            Request Custom Program →
          </a>
        </div>
      </div>
    </section>
  );
}
