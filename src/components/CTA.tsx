export default function CTA() {
  return (
    <section id="contact" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - CTA text */}
          <div>
            <span className="text-accent-light text-sm font-semibold uppercase tracking-wider">
              Mulai Sekarang
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-6">
              Siap Kembangkan{" "}
              <span className="text-accent-light">SDM</span>{" "}
              Perusahaan Anda?
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              Hubungi kami untuk konsultasi gratis. Kami akan membantu mengidentifikasi 
              kebutuhan pelatihan dan menyusun program yang tepat untuk organisasi Anda.
            </p>

            {/* Contact info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <span className="text-accent-light text-xl">📧</span>
                <span>info@titiacademy.id</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <span className="text-accent-light text-xl">📱</span>
                <span>+62 812-xxxx-xxxx</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <span className="text-accent-light text-xl">📍</span>
                <span>Jakarta, Indonesia</span>
              </div>
            </div>
          </div>

          {/* Right - Contact form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-xl font-bold text-primary mb-6">
              Kirim Pesan
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-primary mb-1">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="Nama Anda"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="email@perusahaan.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-1">
                  Perusahaan
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="Nama Perusahaan"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-1">
                  Program yang Diminati
                </label>
                <select className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent">
                  <option value="">Pilih Program</option>
                  <option>Supervisory Development Program</option>
                  <option>Basic Communication Skills</option>
                  <option>Building Great Teamwork</option>
                  <option>Customer Service Excellence</option>
                  <option>Effective Delegation</option>
                  <option>Program MSDM Komprehensif</option>
                  <option>Custom Program</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-1">
                  Pesan
                </label>
                <textarea
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  rows={3}
                  placeholder="Ceritakan kebutuhan pelatihan perusahaan Anda..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-light transition-colors"
              >
                Kirim Pesan →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
