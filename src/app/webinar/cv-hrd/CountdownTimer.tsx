"use client";

import { useEffect, useState } from "react";

interface CountdownTimerProps {
  targetDate: Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calcTimeLeft(target: Date): TimeLeft {
  const diff = target.getTime() - new Date().getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(n: number): string {
  return n < 10 ? "0" + n : String(n);
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
    calcTimeLeft(targetDate)
  );
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setTimeLeft(calcTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  // Avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="max-w-md mx-auto px-4 text-center">
        <p className="text-sm text-[#6b7280] mb-3 font-semibold">
          ⏳ WEBINAR DIMULAI DALAM
        </p>
        <div className="flex justify-center gap-3 text-[#1a2744]">
          {["00", "00", "00", "00"].map((val, i) => (
            <div key={i} className="text-center">
              <div className="bg-white border border-black/5 rounded-xl w-16 h-16 flex items-center justify-center text-2xl font-extrabold shadow-sm">
                {val}
              </div>
              <p className="text-[10px] text-[#6b7280] mt-1 uppercase tracking-wider">
                {["Hari", "Jam", "Menit", "Detik"][i]}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const blocks: [number, string][] = [
    [timeLeft.days, "Hari"],
    [timeLeft.hours, "Jam"],
    [timeLeft.minutes, "Menit"],
    [timeLeft.seconds, "Detik"],
  ];

  return (
    <div className="max-w-md mx-auto px-4 text-center">
      <p className="text-sm text-[#6b7280] mb-3 font-semibold">
        ⏳ WEBINAR DIMULAI DALAM
      </p>
      <div className="flex justify-center gap-3 text-[#1a2744]">
        {blocks.map(([val, label]) => (
          <div key={label} className="text-center">
            <div className="bg-white border border-[#c7923c]/20 rounded-xl w-16 h-16 flex items-center justify-center text-2xl font-extrabold shadow-sm">
              {pad(val)}
            </div>
            <p className="text-[10px] text-[#6b7280] mt-1 uppercase tracking-wider">
              {label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
