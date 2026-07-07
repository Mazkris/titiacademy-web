import Link from "next/link";
import { allPrograms } from "@/lib/programs";

const levels = [
  {
    key: "basic",
    title: "Basic Level",
    subtitle: "Untuk Staf & Entry Level",
    desc: "Membangun fondasi ketrampilan komunikasi, teamwork, dan customer service.",
    count: allPrograms.filter((p) => p.level === "basic").length,
    color: "from-emerald-500 to-teal-600",
  },
  {
    key: "middle",
    title: "Middle Level",
    subtitle: "Untuk Supervisor & Manajer Muda",
    desc: "Mengembangkan kemampuan supervisi, delegasi, dan analisis SDM.",
    count: allPrograms.filter((p) => p.level === "middle").length,
    color: "from-primary to-primary-light",
  },
  {
    key: "upper",
    title: "Upper / Manajerial",
    subtitle: "Untuk Manajer Senior & Direktur",
    desc: "Leadership strategis, remunerasi, grading, dan program suksesi.",
    count: allPrograms.filter((p) => p.level === "upper").length,
    color: "from-accent to-accent-light",
  },
];

export default function TrainingByLevel() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">
            Program Berdasarkan Level
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-3 mb-4">
            Pelatihan untuk Setiap Jenjang Karir
          </h2>
          <p className="text-muted">
            Pilih program sesuai level dan kebutuhan pengembangan tim Anda — dari staf hingga direksi.
          </p>
        </div>

        {/* Level cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {levels.map((level) => (
            <Link
              key={level.key}
              href={`/program?level=${level.key}`}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              {/* Color bar */}
              <div className={`h-2 bg-gradient-to-r ${level.color}`} />

              <div className="p-8">
                <div className="text-sm text-accent font-semibold mb-2">
                  {level.subtitle}
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                  {level.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-6">
                  {level.desc}
                </p>

                {/* Program count */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted">
                    {level.count} program tersedia
                  </span>
                  <span className="text-accent group-hover:translate-x-1 transition-transform text-lg">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-12">
          <Link
            href="/program"
            className="inline-flex items-center text-primary font-medium hover:text-accent transition-colors"
          >
            Lihat semua program →
          </Link>
        </div>
      </div>
    </section>
  );
}
