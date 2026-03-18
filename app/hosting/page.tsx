import { SimplePageHero } from "../components/simple-page-hero";
import { ServerlessPricingCalculator } from "../components/serverless-pricing-calculator";
import Link from "next/link";
import { buildPageMetadata } from "../lib/seo";

export const metadata = buildPageMetadata({
  title: "Managed Hosting, VPS and Serverless Pricing",
  description:
    "Compare managed hosting options including VPS, dedicated servers, serverless pricing, load balancers, and n8n hosting from Crackheads Studio.",
  path: "/hosting",
  keywords: [
    "vps hosting pricing",
    "serverless hosting pricing",
    "dedicated server hosting",
    "n8n hosting",
    "managed hosting services",
  ],
});

const hostingOffers = ["VPS", "Dedicated VPS", "n8n Hosting", "Next.js Hosting", "Serverless Hosting"];

const vpsPricing = [
  { vcpus: "1 vCPU", memory: "0.5 GB", bandwidth: "0.50 TB", storage: "10 GB", monthly: "350.00 /mo", hourly: "0.56 /hr (IPv6 Only)" },
  { vcpus: "1 vCPU", memory: "0.5 GB", bandwidth: "0.50 TB", storage: "10 GB", monthly: "490.00 /mo", hourly: "0.70 /hr" },
  { vcpus: "1 vCPU", memory: "1 GB", bandwidth: "1.00 TB", storage: "25 GB", monthly: "700.00 /mo", hourly: "0.98 /hr" },
  { vcpus: "1 vCPU", memory: "2 GB", bandwidth: "2.00 TB", storage: "55 GB", monthly: "1,400.00 /mo", hourly: "2.10 /hr" },
  { vcpus: "2 vCPUs", memory: "2 GB", bandwidth: "3.00 TB", storage: "65 GB", monthly: "2,100.00 /mo", hourly: "3.08 /hr" },
  { vcpus: "2 vCPUs", memory: "4 GB", bandwidth: "3.00 TB", storage: "80 GB", monthly: "2,800.00 /mo", hourly: "4.20 /hr" },
  { vcpus: "4 vCPUs", memory: "8 GB", bandwidth: "4.00 TB", storage: "160 GB", monthly: "5,600.00 /mo", hourly: "8.40 /hr" },
  { vcpus: "6 vCPUs", memory: "16 GB", bandwidth: "5.00 TB", storage: "320 GB", monthly: "11,200.00 /mo", hourly: "15.40 /hr" },
  { vcpus: "8 vCPUs", memory: "32 GB", bandwidth: "6.00 TB", storage: "640 GB", monthly: "22,400.00 /mo", hourly: "30.66 /hr" },
  { vcpus: "16 vCPUs", memory: "64 GB", bandwidth: "10.00 TB", storage: "1280 GB", monthly: "44,800.00 /mo", hourly: "61.32 /hr" },
  { vcpus: "24 vCPUs", memory: "96 GB", bandwidth: "15.00 TB", storage: "1600 GB", monthly: "89,600.00 /mo", hourly: "122.78 /hr" },
];

const bareMetalPricing = [
  {
    processor: "Intel E3-1270",
    storage: "2 x 240 GB SSD",
    cpuSpecs: "4 cores / 8 threads @ 3.8 GHz",
    ram: "32 GB",
    bandwidth: "5 TB",
    network: "10 Gbps",
    monthly: "16,800.00 /mo",
    hourly: "25.06 /hr",
  },
  {
    processor: "Intel E-2286G",
    storage: "2 x 960 GB SSD",
    cpuSpecs: "6 cores / 12 threads @ 4.0 GHz",
    ram: "32 GB",
    bandwidth: "5 TB",
    network: "10 Gbps",
    monthly: "25,900.00 /mo",
    hourly: "38.50 /hr",
  },
  {
    processor: "AMD EPYC 4245P",
    storage: "2 x 960 GB NVMe",
    cpuSpecs: "6 cores / 12 threads @ 3.9 GHz",
    ram: "32 GB",
    bandwidth: "5 TB",
    network: "25 Gbps",
    monthly: "41,300.00 /mo",
    hourly: "61.46 /hr",
  },
  {
    processor: "Intel E-2388G",
    storage: "2 x 1.92 TB NVMe",
    cpuSpecs: "8 cores / 16 threads @ 3.2 GHz",
    ram: "128 GB",
    bandwidth: "10 TB",
    network: "10 Gbps",
    monthly: "49,000.00 /mo",
    hourly: "72.94 /hr",
  },
  {
    processor: "Intel E-2288G",
    storage: "2 x 1.92 TB NVMe",
    cpuSpecs: "8 cores / 16 threads @ 3.7 GHz",
    ram: "128 GB",
    bandwidth: "10 TB",
    network: "10 Gbps",
    monthly: "49,000.00 /mo",
    hourly: "72.94 /hr",
  },
  {
    processor: "AMD EPYC 4345P",
    storage: "2 x 1.9 TB NVMe",
    cpuSpecs: "8 cores / 16 threads @ 3.8 GHz",
    ram: "128 GB",
    bandwidth: "10 TB",
    network: "25 Gbps",
    monthly: "55,300.00 /mo",
    hourly: "82.32 /hr",
  },
  {
    processor: "AMD EPYC 7443P",
    storage: "2 x 480 GB SSD + 2 x 1.92 TB NVMe",
    cpuSpecs: "24 cores / 48 threads @ 2.85 GHz",
    ram: "256 GB",
    bandwidth: "10 TB",
    network: "25 Gbps",
    monthly: "101,500.00 /mo",
    hourly: "151.06 /hr",
  },
  {
    processor: "AMD EPYC 9254",
    storage: "2 x 480 GB SSD + 2 x 1.92 TB NVMe",
    cpuSpecs: "24 cores / 48 threads @ 2.9 GHz",
    ram: "384 GB",
    bandwidth: "10 TB",
    network: "25 Gbps",
    monthly: "115,500.00 /mo",
    hourly: "171.92 /hr",
  },
  {
    processor: "AMD EPYC 9255",
    storage: "2 x 480 GB SSD + 2 x 1.92 TB NVMe",
    cpuSpecs: "24 cores / 48 threads @ 3.2 GHz",
    ram: "384 GB",
    bandwidth: "10 TB",
    network: "100 Gbps",
    monthly: "139,300.00 /mo",
    hourly: "207.34 /hr",
  },
  {
    processor: "AMD EPYC 9354P",
    storage: "2 x 480 GB SSD + 4 x 6.4 TB NVMe",
    cpuSpecs: "32 cores / 64 threads @ 3.25 GHz",
    ram: "768 GB",
    bandwidth: "10 TB",
    network: "25 Gbps",
    monthly: "203,000.00 /mo",
    hourly: "302.12 /hr",
  },
  {
    processor: "2 x AMD EPYC 9354",
    storage: "1 x 480 GB NVMe + 16 x 6.4 TB NVMe",
    cpuSpecs: "64 cores / 128 threads @ 3.2 GHz",
    ram: "1536 GB",
    bandwidth: "10 TB",
    network: "25 Gbps",
    monthly: "409,500.00 /mo",
    hourly: "609.42 /hr",
  },
  {
    processor: "2 x AMD EPYC 7713",
    storage: "2 x 480 GB SSD + 10 x 6.4 TB NVMe",
    cpuSpecs: "128 cores / 256 threads @ 2.0 GHz",
    ram: "2048 GB",
    bandwidth: "25 TB",
    network: "25 Gbps",
    monthly: "770,000.00 /mo",
    hourly: "1,145.90 /hr",
  },
];

export default function HostingPage() {
  return (
    <main>
      <SimplePageHero
        eyebrow="Hosting"
        title="Hosting and infrastructure pricing"
        description="Everything in one place, from VPS and load balancers to serverless and bare metal servers."
      />

      <section className="px-6 pb-18 md:px-10 md:pb-20">
        <div className="mx-auto max-w-6xl rounded-4xl bg-white/55 p-7 shadow-[0_20px_45px_rgba(176,170,243,0.22)] backdrop-blur-xl md:p-8">
          <p className="text-sm font-black uppercase tracking-[0.14em] text-[#6b6298]">All prices are in BDT</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {hostingOffers.map((offer) => (
              <p key={offer} className="rounded-2xl bg-[#fdfbff]/80 px-4 py-3 text-center font-bold text-[#4f477b]">
                {offer}
              </p>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-6 max-w-6xl rounded-4xl bg-white/55 p-7 shadow-[0_20px_45px_rgba(176,170,243,0.22)] backdrop-blur-xl md:p-8">
          <h2 className="text-2xl font-black text-[#4f477b] md:text-3xl">VPS Pricing</h2>
          <div className="mt-5 overflow-x-auto">
            <table className="min-w-full border-separate border-spacing-0 overflow-hidden rounded-2xl">
              <thead>
                <tr>
                  <th className="bg-[#ece8ff] px-4 py-3 text-left text-sm font-black text-[#4f477b]">vCPUs</th>
                  <th className="bg-[#ece8ff] px-4 py-3 text-left text-sm font-black text-[#4f477b]">Memory</th>
                  <th className="bg-[#ece8ff] px-4 py-3 text-left text-sm font-black text-[#4f477b]">Bandwidth</th>
                  <th className="bg-[#ece8ff] px-4 py-3 text-left text-sm font-black text-[#4f477b]">Storage</th>
                  <th className="bg-[#ece8ff] px-4 py-3 text-left text-sm font-black text-[#4f477b]">Monthly Price (BDT)</th>
                  <th className="bg-[#ece8ff] px-4 py-3 text-left text-sm font-black text-[#4f477b]">Hourly Price (BDT)</th>
                </tr>
              </thead>
              <tbody>
                {vpsPricing.map((plan) => (
                  <tr key={`${plan.vcpus}-${plan.memory}-${plan.storage}-${plan.monthly}`}>
                    <td className="border-t border-[#e4ddff] bg-white/70 px-4 py-3 text-sm font-semibold text-[#5f588c]/90">{plan.vcpus}</td>
                    <td className="border-t border-[#e4ddff] bg-white/70 px-4 py-3 text-sm font-semibold text-[#5f588c]/90">{plan.memory}</td>
                    <td className="border-t border-[#e4ddff] bg-white/70 px-4 py-3 text-sm font-semibold text-[#5f588c]/90">{plan.bandwidth}</td>
                    <td className="border-t border-[#e4ddff] bg-white/70 px-4 py-3 text-sm font-semibold text-[#5f588c]/90">{plan.storage}</td>
                    <td className="border-t border-[#e4ddff] bg-white/70 px-4 py-3 text-sm font-semibold text-[#5f588c]/90">{plan.monthly}</td>
                    <td className="border-t border-[#e4ddff] bg-white/70 px-4 py-3 text-sm font-semibold text-[#5f588c]/90">{plan.hourly}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mx-auto mt-6 grid max-w-6xl gap-5 md:grid-cols-2">
          <article className="rounded-4xl bg-white/55 p-7 shadow-[0_20px_45px_rgba(176,170,243,0.22)] backdrop-blur-xl md:p-8">
            <h2 className="text-2xl font-black text-[#4f477b] md:text-3xl">Load Balancer Price</h2>
            <p className="mt-3 rounded-2xl bg-[#fdfbff]/80 px-4 py-3 font-semibold text-[#5f588c]/90">1,400 BDT / month</p>
          </article>
          <article className="rounded-4xl bg-white/55 p-7 shadow-[0_20px_45px_rgba(176,170,243,0.22)] backdrop-blur-xl md:p-8">
            <h2 className="text-2xl font-black text-[#4f477b] md:text-3xl">Global Load Balancer Price</h2>
            <p className="mt-3 rounded-2xl bg-[#fdfbff]/80 px-4 py-3 font-semibold text-[#5f588c]/90">1,400 BDT / month / region</p>
          </article>
        </div>

        <div className="mx-auto mt-6 max-w-6xl rounded-4xl bg-white/55 p-7 shadow-[0_20px_45px_rgba(176,170,243,0.22)] backdrop-blur-xl md:p-8">
          <h2 className="text-2xl font-black text-[#4f477b] md:text-3xl">Serverless Inference</h2>
          <p className="mt-2 font-semibold text-[#5f588c]/90">First 1 million: 100 BDT. Then 60 BDT per million.</p>
          <div className="mt-5">
            <ServerlessPricingCalculator />
          </div>
        </div>

        <div className="mx-auto mt-6 max-w-6xl rounded-4xl bg-white/55 p-7 shadow-[0_20px_45px_rgba(176,170,243,0.22)] backdrop-blur-xl md:p-8">
          <h2 className="text-2xl font-black text-[#4f477b] md:text-3xl">n8n Hosting</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <p className="rounded-2xl bg-[#fdfbff]/80 px-4 py-3 font-semibold text-[#5f588c]/90">BDT 499 flat</p>
            <p className="rounded-2xl bg-[#fdfbff]/80 px-4 py-3 font-semibold text-[#5f588c]/90">99.99% uptime</p>
          </div>
        </div>

        <div className="mx-auto mt-6 max-w-6xl rounded-4xl bg-white/55 p-7 shadow-[0_20px_45px_rgba(176,170,243,0.22)] backdrop-blur-xl md:p-8">
          <h2 className="text-2xl font-black text-[#4f477b] md:text-3xl">Bare Metal Servers</h2>
          <div className="mt-5 overflow-x-auto">
            <table className="min-w-full border-separate border-spacing-0 overflow-hidden rounded-2xl">
              <thead>
                <tr>
                  <th className="bg-[#ece8ff] px-4 py-3 text-left text-sm font-black text-[#4f477b]">Processor</th>
                  <th className="bg-[#ece8ff] px-4 py-3 text-left text-sm font-black text-[#4f477b]">Storage</th>
                  <th className="bg-[#ece8ff] px-4 py-3 text-left text-sm font-black text-[#4f477b]">CPU Specs</th>
                  <th className="bg-[#ece8ff] px-4 py-3 text-left text-sm font-black text-[#4f477b]">RAM</th>
                  <th className="bg-[#ece8ff] px-4 py-3 text-left text-sm font-black text-[#4f477b]">Bandwidth</th>
                  <th className="bg-[#ece8ff] px-4 py-3 text-left text-sm font-black text-[#4f477b]">Network</th>
                  <th className="bg-[#ece8ff] px-4 py-3 text-left text-sm font-black text-[#4f477b]">Monthly Price (BDT)</th>
                  <th className="bg-[#ece8ff] px-4 py-3 text-left text-sm font-black text-[#4f477b]">Hourly Price (BDT)</th>
                </tr>
              </thead>
              <tbody>
                {bareMetalPricing.map((plan) => (
                  <tr key={`${plan.processor}-${plan.monthly}`}>
                    <td className="border-t border-[#e4ddff] bg-white/70 px-4 py-3 text-sm font-semibold text-[#5f588c]/90">{plan.processor}</td>
                    <td className="border-t border-[#e4ddff] bg-white/70 px-4 py-3 text-sm font-semibold text-[#5f588c]/90">{plan.storage}</td>
                    <td className="border-t border-[#e4ddff] bg-white/70 px-4 py-3 text-sm font-semibold text-[#5f588c]/90">{plan.cpuSpecs}</td>
                    <td className="border-t border-[#e4ddff] bg-white/70 px-4 py-3 text-sm font-semibold text-[#5f588c]/90">{plan.ram}</td>
                    <td className="border-t border-[#e4ddff] bg-white/70 px-4 py-3 text-sm font-semibold text-[#5f588c]/90">{plan.bandwidth}</td>
                    <td className="border-t border-[#e4ddff] bg-white/70 px-4 py-3 text-sm font-semibold text-[#5f588c]/90">{plan.network}</td>
                    <td className="border-t border-[#e4ddff] bg-white/70 px-4 py-3 text-sm font-semibold text-[#5f588c]/90">{plan.monthly}</td>
                    <td className="border-t border-[#e4ddff] bg-white/70 px-4 py-3 text-sm font-semibold text-[#5f588c]/90">{plan.hourly}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mx-auto mt-6 grid max-w-6xl gap-4 rounded-4xl bg-white/55 p-7 shadow-[0_20px_45px_rgba(176,170,243,0.22)] backdrop-blur-xl md:grid-cols-2 md:p-8">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.14em] text-[#6b6298]">Need enterprise-grade setup?</p>
            <h2 className="mt-2 text-2xl font-black text-[#4f477b] md:text-3xl">Explore Corporate Hosting</h2>
            <p className="mt-2 font-semibold text-[#5f588c]/90">
              Compare managed plans for agencies, advanced support layers, and scalable deployment operations.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1">
            <Link
              href="/corporate-hosting"
              className="rounded-3xl bg-[#4f477b] px-5 py-4 text-sm font-black uppercase tracking-widest text-white shadow-[0_10px_24px_rgba(79,71,123,0.35)] transition hover:-translate-y-0.5"
            >
              Open /corporate-hosting
            </Link>
            <Link
              href="/hosting"
              className="rounded-3xl bg-white px-5 py-4 text-sm font-black uppercase tracking-widest text-[#4f477b] shadow-[0_10px_24px_rgba(79,71,123,0.18)] transition hover:-translate-y-0.5"
            >
              Stay on /hosting
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
