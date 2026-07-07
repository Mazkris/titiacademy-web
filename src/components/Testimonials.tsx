const testimonials = [
  {
    quote: "Program Supervisory Development dari Titi Academy berhasil mengubah cara supervisor kami memimpin tim. Materi aplikatif dan langsung bisa dipraktikkan.",
    name: "HR Manager",
    company: "Perusahaan Manufaktur Nasional",
  },
  {
    quote: "Pendampingan MSDM sangat komprehensif. Dari analisa jabatan sampai program suksesi, semua delivered dengan profesional. Highly recommended!",
    name: "Direktur Operasional",
    company: "Perusahaan Logistik",
  },
  {
    quote: "Pelatihan komunikasi membantu tim sales kami berkomunikasi lebih efektif dengan klien. Ada peningkatan signifikan di customer satisfaction score.",
    name: "Sales Director",
    company: "Perusahaan Teknologi",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">
            Testimoni
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-3 mb-4">
            Dipercaya oleh Puluhan Perusahaan
          </h2>
          <p className="text-muted">
            Apa kata klien kami tentang program pelatihan dan konsultasi Titi Academy.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm"
            >
              {/* Quote icon */}
              <div className="text-accent text-4xl mb-4">&ldquo;</div>
              <p className="text-muted leading-relaxed mb-6">{t.quote}</p>
              <div className="border-t border-gray-100 pt-4">
                <div className="font-semibold text-primary">{t.name}</div>
                <div className="text-sm text-muted">{t.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
