"use client";

import { useMemo, useState } from "react";

function formatBdt(value: number) {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

function computeServerlessPrice(millions: number) {
  if (millions <= 0) {
    return 0;
  }

  if (millions <= 1) {
    return 100;
  }

  return 100 + (millions - 1) * 60;
}

export function ServerlessPricingCalculator() {
  const [inferenceMillions, setInferenceMillions] = useState(1);
  const [bandwidthCharge, setBandwidthCharge] = useState(0);

  const serverlessPrice = useMemo(() => computeServerlessPrice(inferenceMillions), [inferenceMillions]);
  const specializedNextjsPrice = useMemo(() => serverlessPrice + 1400 + bandwidthCharge, [serverlessPrice, bandwidthCharge]);

  return (
    <div className="space-y-5 rounded-3xl bg-[#fdfbff]/80 p-5 md:p-6">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#6b6298]">Serverless inference calculator</p>
        <p className="mt-1 font-semibold text-[#5f588c]/90">
          First 1 million requests: 100 BDT. After that: 60 BDT per million.
        </p>
      </div>

      <div>
        <div className="flex items-center justify-between gap-4">
          <label htmlFor="inference-slider" className="font-semibold text-[#4f477b]">
            Inference volume (million requests)
          </label>
          <span className="rounded-full bg-white px-3 py-1 text-sm font-black text-[#4f477b]">{inferenceMillions.toFixed(1)}M</span>
        </div>
        <input
          id="inference-slider"
          type="range"
          min={0}
          max={100}
          step={0.1}
          value={inferenceMillions}
          onChange={(event) => setInferenceMillions(Number(event.target.value))}
          className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full bg-[#d9d0ff]"
        />
      </div>

      <div>
        <div className="flex items-center justify-between gap-4">
          <label htmlFor="bandwidth-slider" className="font-semibold text-[#4f477b]">
            Bandwidth charge add-on (BDT)
          </label>
          <span className="rounded-full bg-white px-3 py-1 text-sm font-black text-[#4f477b]">{formatBdt(bandwidthCharge)} BDT</span>
        </div>
        <input
          id="bandwidth-slider"
          type="range"
          min={0}
          max={20000}
          step={50}
          value={bandwidthCharge}
          onChange={(event) => setBandwidthCharge(Number(event.target.value))}
          className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full bg-[#d9d0ff]"
        />
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl bg-white px-4 py-3">
          <p className="text-sm font-semibold text-[#5f588c]/90">Serverless price</p>
          <p className="mt-1 text-xl font-black text-[#4f477b]">{formatBdt(serverlessPrice)} BDT</p>
        </div>
        <div className="rounded-2xl bg-white px-4 py-3">
          <p className="text-sm font-semibold text-[#5f588c]/90">Specialized Next.js total</p>
          <p className="mt-1 text-xl font-black text-[#4f477b]">{formatBdt(specializedNextjsPrice)} BDT</p>
          <p className="mt-1 text-xs font-semibold text-[#5f588c]/80">Formula: serverless + 2 GB VPS (1,400 BDT) + bandwidth charge</p>
        </div>
      </div>
    </div>
  );
}
