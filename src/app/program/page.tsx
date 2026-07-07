"use client";

import { useState } from "react";
import Link from "next/link";
import { allPrograms, levelLabels, categoryLabels, type Program } from "@/lib/programs";

type LevelFilter = "all" | "basic" | "middle" | "upper";
type CategoryFilter = "all" | "soft" | "hard" | "comprehensive";

export default function ProgramPage() {
  const [level, setLevel] = useState<LevelFilter>("all");
  const [category, setCategory] = useState<CategoryFilter>("all");

  const filtered = allPrograms.filter((p) => {
    if (level !== "all" && p.level !== level && p.level !== "all") return false;
    if (category !== "all" && p.category !== category) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-primary py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent-light text-sm font-semibold uppercase tracking-wider">
            Program Pelatihan
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
            Katalog Training{" "}
            <span className="text-accent-light">Titi Academy</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Program dirancang oleh praktisi HR profesional bersertifikasi untuk memenuhi kebutuhan pengembangan SDM di berbagai level dan kategori.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="border-b border-gray-200 sticky top-16 bg-white/95 backdrop-blur z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Level Filter */}
          <div className="flex flex-wrap gap-1 py-3">
            <span className="text-xs font-semibold text-muted uppercase tracking-wider self-center mr-3">
              Level:
            </span>
            {(["all", "basic", "middle", "upper"] as LevelFilter[]).map((l) => (
              <button
                key={l}
                onClick={() => setLevel(l)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  level === l
                    ? "bg-primary text-white"
                    : "text-muted hover:text-primary hover:bg-surface"
                }`}
              >
                {l === "all" ? "Semua" : levelLabels[l]}
              </button>
            ))}
          </div>
          {/* Category Filter */}
          <div className="flex flex-wrap gap-1 py-3 border-t border-gray-100">
            <span className="text-xs font-semibold text-muted uppercase tracking-wider self-center mr-3">
              Kategori:
            </span>
            {(["all", "soft", "hard", "comprehensive"] as CategoryFilter[]).map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  category === c
                    ? "bg-accent text-white"
                    : "text-muted hover:text-accent hover:bg-surface"
                }`}
              >
                {c === "all" ? "Semua" : categoryLabels[c]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Program Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Results count */}
        <p className="text-sm text-muted mb-8">
          Menampilkan {filtered.length} dari {allPrograms.length} program
        </p>

        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted text-lg">Tidak ada program dengan filter ini.</p>
            <button
              onClick={() => { setLevel("all"); setCategory("all"); }}
              className="mt-4 text-accent font-medium hover:underline"
            >
              Reset filter
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        )}

        {/* Custom CTA */}
        <div className="text-center mt-16 pt-12 border-t border-gray-200">
          <p className="text-lg text-muted mb-4">
            Tidak menemukan program yang sesuai?
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center bg-primary text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-primary-light transition-colors"
          >
            Request Custom Program →
          </Link>
        </div>
      </div>
    </div>
  );
}

function ProgramCard({ program }: { program: Program }) {
  return (
    <div className="group border border-gray-200 rounded-xl p-6 hover:border-accent hover:shadow-lg transition-all duration-300 flex flex-col">
      {/* Badges */}
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="text-xs font-medium bg-primary/10 text-primary px-2.5 py-1 rounded-full">
          {program.duration}
        </span>
        <span className="text-xs font-medium bg-accent/10 text-accent px-2.5 py-1 rounded-full">
          {levelLabels[program.level]}
        </span>
        <span className="text-xs font-medium bg-surface text-muted px-2.5 py-1 rounded-full">
          {categoryLabels[program.category]}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors">
        {program.title}
      </h3>
      <p className="text-sm text-muted mb-4 leading-relaxed flex-1">
        {program.desc}
      </p>

      {/* Modules */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {program.modules.slice(0, 4).map((mod) => (
          <span key={mod} className="text-xs bg-surface text-muted px-2 py-1 rounded">
            {mod}
          </span>
        ))}
        {program.modules.length > 4 && (
          <span className="text-xs bg-surface text-muted px-2 py-1 rounded">
            +{program.modules.length - 4} lainnya
          </span>
        )}
      </div>

      {/* CTA */}
      <Link
        href="/#contact"
        className="text-sm text-accent font-medium hover:underline mt-auto"
      >
        Ingin program ini? Hubungi kami →
      </Link>
    </div>
  );
}
