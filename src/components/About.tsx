export default function About() {
  return (
    <section id="about" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center shadow-xl">
              <div className="text-white text-center p-8">
                <div className="text-6xl mb-4">◆</div>
                <div className="text-2xl font-bold">Titi Academy</div>
                <div className="text-accent-light mt-2">Est. 2010</div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-accent rounded-xl hidden lg:block" />
          </div>

          {/* Right - Content */}
          <div>
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">
              Tentang Kami
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-3 mb-6">
              Mitra Terpercaya Pengembangan{" "}
              <span className="text-accent">SDM</span>
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Titi Academy didirikan oleh <strong>Titi Agustina, SE.Cmt.CPHRM</strong>, 
              seorang praktisi HR profesional bersertifikasi dengan pengalaman lebih dari 
              15 tahun di bidang Manajemen Sumber Daya Manusia.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              Kami menyediakan program pelatihan dan konsultasi yang dirancang khusus 
              untuk membantu perusahaan membangun sistem MSDM yang efektif — mulai dari 
              analisa jabatan, manajemen kinerja, program suksesi, hingga membangun 
              budaya organisasi yang kuat.
            </p>
            <p className="text-muted leading-relaxed">
              Pendekatan kami bersifat <strong>participatif dan aplikatif</strong> — 
              bukan sekadar teori. Setiap program dilengkapi dengan pendampingan, 
              form tools, dan reporting yang siap diimplementasikan di organisasi Anda.
            </p>

            {/* Credentials */}
            <div className="flex flex-wrap gap-3 mt-8">
              {["CPHRM Certified", "15+ Tahun", "25+ Modul", "Bersertifikasi BNSP"].map((tag) => (
                <span
                  key={tag}
                  className="bg-white text-primary text-sm font-medium px-4 py-2 rounded-full border border-gray-200"
                >
                  ✓ {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
