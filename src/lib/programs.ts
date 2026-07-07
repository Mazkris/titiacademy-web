export interface Program {
  id: string;
  title: string;
  category: "soft" | "hard" | "comprehensive";
  level: "basic" | "middle" | "upper" | "all";
  duration: string;
  desc: string;
  modules: string[];
  featured?: boolean;
}

export const allPrograms: Program[] = [
  // === SOFT COMPETENCY ===
  {
    id: "basic-communication",
    title: "Developing Basic Communication Skills",
    category: "soft",
    level: "basic",
    duration: "8 jam",
    desc: "Meningkatkan ketrampilan vokal, visual, dan verbal dalam komunikasi lisan dan tulisan untuk produktivitas kerja.",
    modules: ["Aspek Vokal/Visual/Verbal", "Komunikasi Lisan & Tertulis", "Trilogi Komunikasi Efektif"],
    featured: true,
  },
  {
    id: "great-teamwork",
    title: "Building Great Teamwork",
    category: "soft",
    level: "basic",
    duration: "8 jam",
    desc: "Memahami dinamika tim, fase pertumbuhan, dan membangun komunikasi efektif antar anggota tim.",
    modules: ["Dinamika Kerjasama Tim", "Fase Pertumbuhan Tim", "Mengelola Konflik Tim"],
  },
  {
    id: "customer-service",
    title: "Customer Service Excellence",
    category: "soft",
    level: "basic",
    duration: "8 jam",
    desc: "Mengembangkan customer-focused behaviors dan ketrampilan kunci untuk layanan prima.",
    modules: ["Customer-focused Behaviors", "Great Service Skills", "4 Elemen Service Excellence"],
  },
  {
    id: "delegation",
    title: "How to Delegate Work Effectively",
    category: "soft",
    level: "middle",
    duration: "8 jam",
    desc: "Memahami peran delegasi dan menerapkan tahapan proses delegasi secara efektif.",
    modules: ["Pengertian & Peran Delegasi", "Tahapan Delegasi Efektif"],
  },
  {
    id: "supervisory-development",
    title: "Supervisory Development Program",
    category: "soft",
    level: "middle",
    duration: "16 jam",
    desc: "Mengembangkan kemampuan supervisi manajer & supervisor: perencanaan, pengendalian, pemberdayaan tim, problem solving, dan delegasi.",
    modules: ["Peran Supervisor", "Prinsip Manajemen", "Leadership", "Komunikasi Interpersonal", "Problem Solving", "Delegasi"],
    featured: true,
  },
  {
    id: "situational-leadership",
    title: "Situational Leadership & Zero to Hero",
    category: "soft",
    level: "upper",
    duration: "16 jam",
    desc: "Menguasai 4 gaya kepemimpinan (Telling, Selling, Participating, Delegating) berdasarkan tingkat kematangan anak buah. Perjalanan dari M1 ke M4.",
    modules: ["4 Gaya Kepemimpinan", "Maturity Assessment (M1-M4)", "Zero to Hero Framework", "Coaching untuk Setiap Level", "Case Study: Multi-level Team"],
  },
  {
    id: "theory-u-leadership",
    title: "Theory U untuk Supervisor & Leader",
    category: "soft",
    level: "upper",
    duration: "8 jam",
    desc: "Pendekatan kepemimpinan transformatif: Open Mind (tidak defensif), Open Heart (empati), Open Will (autonomi & kreasi mandiri).",
    modules: ["Open Mind: Menerima & Memfilter Masukan", "Open Heart: Empati & Trust Building", "Open Will: Job Autonomy & Kreativitas", "Integrasi dengan Situational Leadership"],
    featured: true,
  },
  // === HARD SKILL HR ===
  {
    id: "job-analysis",
    title: "Job Analysis & Struktur Organisasi",
    category: "hard",
    level: "middle",
    duration: "16 jam",
    desc: "Menganalisis jabatan berdasarkan proses bisnis, menyusun struktur organisasi, dan melakukan cascading dari visi-misi ke quality objective.",
    modules: ["Proses Bisnis & Ruang Lingkup", "Cascading Visi-Misi ke Departemen", "Analisis Jabatan (Bukan Orang)", "Penyusunan Struktur Organisasi"],
  },
  {
    id: "job-description-spec",
    title: "Job Description & Job Specification",
    category: "hard",
    level: "middle",
    duration: "8 jam",
    desc: "Menyusun uraian jabatan (tugas, tanggung jawab, kewenangan) dan spesifikasi jabatan (kualifikasi, pengalaman, training).",
    modules: ["Uraian Tugas & Tanggung Jawab", "Kewenangan & Batasan", "Kualifikasi & Spesifikasi", "Form Tools & Template"],
  },
  {
    id: "workload-analysis",
    title: "Workload Analysis (Analisis Beban Kerja)",
    category: "hard",
    level: "middle",
    duration: "8 jam",
    desc: "Mengukur beban kerja berdasarkan frekuensi tugas (harian/mingguan/bulanan/tahunan), menghitung waktu kerja efektif, dan menentukan jumlah tenaga kerja optimal.",
    modules: ["Frekuensi & Volume Tugas", "Waktu Kerja Efektif", "Workload Scoring", "Idle Detection & Empowerment"],
  },
  {
    id: "manpower-planning",
    title: "Manpower Planning (Perencanaan Tenaga Kerja)",
    category: "hard",
    level: "upper",
    duration: "8 jam",
    desc: "Menentukan kebutuhan tenaga kerja dan status hubungan kerja: Harian Lepas, PKWT, atau Outsourcing (borongan vs penyediaan tenaga).",
    modules: ["Status Hubungan Kerja", "Outsourcing Strategy", "5-Year Manpower Plan", "Budget & Cost Analysis"],
  },
  {
    id: "job-grading",
    title: "Job Grading dengan Metode Point Factor",
    category: "hard",
    level: "upper",
    duration: "16 jam",
    desc: "Menentukan golongan jabatan berdasarkan tingkat risiko dan bobot pekerjaan menggunakan metode Hay Factor (pendidikan, pengalaman, mental, tekanan).",
    modules: ["Point Factor Methodology", "Hay Factor Analysis", "Grading Structure", "Job as Grade — Grade as Salary"],
  },
  {
    id: "remuneration",
    title: "Sistem Remunerasi & Struktur Skala Upah",
    category: "hard",
    level: "upper",
    duration: "16 jam",
    desc: "Merancang struktur dan skala upah (minimum, mid, maksimum) berdasarkan grading jabatan. Menentukan kompensasi yang adil dan kompetitif.",
    modules: ["Struktur Skala Upah", "Market Benchmarking", "Internal Equity Analysis", "Total Compensation Design"],
  },
  {
    id: "retention",
    title: "Strategi Retention & Total Reward",
    category: "hard",
    level: "upper",
    duration: "8 jam",
    desc: "Merancang program benefit dan retensi untuk menjaga talent: Car Loan, subsidi, career path, dan total reward system.",
    modules: ["Benefit Strategy", "Retention Program Design", "Total Reward Framework", "ROI of Retention"],
  },
  // === KOMPREHENSIF ===
  {
    id: "msdm-komprehensif",
    title: "Program MSDM Komprehensif",
    category: "comprehensive",
    level: "all",
    duration: "3-4 bulan",
    desc: "Program end-to-end: analisa jabatan, beban kerja, uraian jabatan, matriks kompetensi, SOP MSDM, sistem penilaian kinerja, talent pool, dan program suksesi.",
    modules: ["Analisa Jabatan & Beban Kerja", "Matriks & Kamus Kompetensi", "SOP MSDM (12 dokumen)", "Penilaian Kinerja", "Talent Pool & Suksesi", "12 Program Modul"],
    featured: true,
  },
];

export const levelLabels: Record<string, string> = {
  basic: "Basic",
  middle: "Middle",
  upper: "Upper / Manajerial",
  all: "Semua Level",
};

export const categoryLabels: Record<string, string> = {
  soft: "Soft Competency",
  hard: "Hard Skill HR",
  comprehensive: "Program Komprehensif",
  all: "Semua Kategori",
};
