import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary-light text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-white mb-4">
              <span className="text-accent-light text-2xl">◆</span>
              <span>Titi<span className="text-accent-light">Academy</span></span>
            </Link>
            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              Mitra pengembangan SDM perusahaan Anda. Program pelatihan profesional 
              oleh Titi Agustina SE.Cmt.CPHRM — praktisi HR berpengalaman 15+ tahun.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Menu</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#about" className="hover:text-accent-light transition-colors">Tentang</Link></li>
              <li><Link href="#services" className="hover:text-accent-light transition-colors">Program</Link></li>
              <li><Link href="#testimonials" className="hover:text-accent-light transition-colors">Testimoni</Link></li>
              <li><Link href="/blog" className="hover:text-accent-light transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Kontak</h4>
            <ul className="space-y-2 text-sm">
              <li>info@titiacademy.id</li>
              <li>+62 812-xxxx-xxxx</li>
              <li>Jakarta, Indonesia</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Titi Academy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
