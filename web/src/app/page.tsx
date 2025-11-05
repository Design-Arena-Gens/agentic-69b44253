export default function Home() {
  const property = {
    name: "Prestige Horizon Enclave",
    tagline: "Bhogapuram's Signature Gated Community Plots",
    price: "₹24,999 per sq. yd.",
    plotSizes: "150 | 200 | 240 | 300 sq. yd. ready-to-register plots",
    airportDistance: "12 km from Bhogapuram Greenfield International Airport",
    vizagTime: "35 mins scenic drive to Visakhapatnam City",
    madhurawadaTime: "20 mins from Madhurawada IT Hub",
  };

  const features = [
    {
      title: "VMRDA Approved Layout",
      description:
        "Secure your investment with clear titles and government-approved development standards.",
    },
    {
      title: "Prime NH-16 / AH-45 Frontage",
      description:
        "Commanding visibility on the high-growth Visakhapatnam–Srikakulam corridor with uninterrupted connectivity.",
    },
    {
      title: "Avenue Plantations",
      description:
        "Hand-curated native avenue plantations craft a verdant streetscape and long-term ecological balance.",
    },
    {
      title: "24×7 Electricity & Utilities",
      description:
        "Underground cabling, well-lit boulevards, and ready-to-activate infrastructure from day one.",
    },
    {
      title: "Secured Gated Enclave",
      description:
        "Perimeter compound wall, controlled entry, and surveillance-ready infrastructure assure peace of mind.",
    },
  ];

  const proximity = [
    {
      title: "Miracle Software Park & Gum City",
      detail: "5 mins",
      description:
        "Walk-to-work potential with a robust ecosystem of technology and industrial employment hubs.",
    },
    {
      title: "Bhogapuram International Airport",
      detail: property.airportDistance,
      description:
        "Positioned to ride the aviation-led growth wave with upcoming aero city development.",
    },
    {
      title: "Visakhapatnam Downtown",
      detail: property.vizagTime,
      description:
        "Effortless access to educational, healthcare, and lifestyle landmarks across the metro.",
    },
    {
      title: "Madhurawada",
      detail: property.madhurawadaTime,
      description:
        "Stay connected to Vizag’s premier residential and IT district without sacrificing tranquility.",
    },
  ];

  const investmentHighlights = [
    "Early-mover advantage in the fastest-appreciating corridor of North Coastal Andhra.",
    "Wide blacktop roads, stormwater drains, and expertly plotted parcels ready for villa construction.",
    "Smart zoning within the enclave ensures premium corner plots and vastu-compliant orientations.",
  ];

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-slate-950">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(167,243,208,0.12),_transparent_55%)]" />
      <div className="absolute -right-24 top-12 -z-10 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl sm:h-96 sm:w-96" />
      <div className="absolute -left-20 bottom-0 -z-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl sm:h-[420px] sm:w-[420px]" />

      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-16 px-6 pb-24 pt-20 sm:px-10 lg:px-16 lg:pt-24">
        <header className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-1 text-sm font-semibold uppercase tracking-wide text-emerald-200">
              Exclusive Gated Community
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-slate-50 sm:text-5xl lg:text-6xl">
              {property.name}
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-200/90 sm:text-xl">
              {property.tagline}. Own a premium parcel with resort-style
              landscaping, meticulous infrastructure, and unmatched road, air,
              and IT connectivity.
            </p>
            <div className="grid gap-4 sm:grid-cols-3 sm:items-center">
              <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 px-6 py-5">
                <p className="text-xs uppercase tracking-[0.2em] text-emerald-200/70">
                  Price per sq. yd.
                </p>
                <p className="mt-2 text-2xl font-semibold text-emerald-200">
                  {property.price}
                </p>
              </div>
              <div className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-6 py-5 sm:col-span-2">
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/70">
                  Plot sizes available
                </p>
                <p className="mt-2 text-lg font-medium text-cyan-100">
                  {property.plotSizes}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-200/80">
              <div className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2">
                <span className="text-emerald-300" aria-hidden>
                  ●
                </span>
                {property.airportDistance}
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2">
                <span className="text-emerald-300" aria-hidden>
                  ●
                </span>
                {property.vizagTime}
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2">
                <span className="text-emerald-300" aria-hidden>
                  ●
                </span>
                {property.madhurawadaTime}
              </div>
            </div>
          </div>

          <div className="relative isolate flex flex-col gap-6 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-emerald-500/10 backdrop-blur">
            <div className="flex items-baseline justify-between text-sm text-slate-200/70">
              <span>Investor Snapshot</span>
              <span>Premium Corner Plots Available</span>
            </div>
            <div className="space-y-4">
              {investmentHighlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-2xl bg-white/5 px-4 py-3 text-sm text-slate-100/90"
                >
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/20 text-xs font-semibold text-emerald-100">
                    {index + 1}
                  </span>
                  <p>{highlight}</p>
                </div>
              ))}
            </div>
            <a
              className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-emerald-950 transition hover:bg-emerald-300"
              href="tel:+919000000000"
            >
              Schedule a Private Site Visit
            </a>
            <p className="text-xs text-slate-300/70">
              Limited premium inventory. Flexible payment plans and bank loan
              assistance available on request.
            </p>
          </div>
        </header>

        <section className="space-y-10">
          <h2 className="text-2xl font-semibold text-slate-50 sm:text-3xl">
            Resort-Grade Infrastructure, Delivered
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-300/40 hover:bg-emerald-400/10"
              >
                <div className="absolute right-6 top-6 h-10 w-10 rounded-full border border-emerald-200/40 bg-emerald-200/10 transition duration-300 group-hover:scale-110" />
                <h3 className="text-lg font-semibold text-slate-50">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-200/80">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-slate-50 sm:text-3xl">
                Location Advantages
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-slate-200/70">
                Strategically positioned to capture the surge in employment,
                infrastructure, and lifestyle benchmarks radiating from
                Bhogapuram to Visakhapatnam.
              </p>
            </div>
            <span className="inline-flex items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-cyan-100">
              NH-16 Growth Corridor
            </span>
          </div>
          <div className="grid gap-6 lg:grid-cols-4">
            {proximity.map((item) => (
              <article
                key={item.title}
                className="relative flex flex-col gap-3 rounded-3xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:border-cyan-300/40 hover:bg-cyan-400/10"
              >
                <span className="text-sm font-semibold uppercase tracking-wide text-cyan-100/80">
                  {item.title}
                </span>
                <span className="text-2xl font-semibold text-white">
                  {item.detail}
                </span>
                <p className="text-sm text-slate-200/80">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-emerald-400/40 bg-emerald-400/10 p-8 text-sm text-emerald-50 shadow-lg shadow-emerald-500/10 sm:text-base">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl font-semibold text-emerald-100">
                Ready for Registration & Immediate Construction
              </h3>
              <p className="mt-1 text-emerald-50/80">
                On-ground development nearing completion with utilities on tap.
                Experience the boulevard driveways, avenue plantations, and gated
                security firsthand.
              </p>
            </div>
            <div className="flex flex-col items-start gap-2 text-left sm:items-end">
              <a
                className="inline-flex items-center justify-center rounded-full border border-emerald-200/60 bg-emerald-200/10 px-6 py-2 text-sm font-semibold text-emerald-50 transition hover:border-emerald-100/80 hover:bg-emerald-200/20"
                href="mailto:connect@prestigehorizon.com"
              >
                Request Detailed Brochure
              </a>
              <span className="text-xs uppercase tracking-[0.28em] text-emerald-200/70">
                RERA facilitation on request
              </span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
