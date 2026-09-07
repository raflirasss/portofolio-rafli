export function ProjectPreview({ id, tone }: { id: string; tone: string }) {
  const accent =
    tone === "violet" ? "from-indigo-400 to-violet-300" : "from-blue-400 to-cyan-300";

  if (id === "vision") {
    return (
      <div className="relative h-full overflow-hidden bg-[#0d1118]">
        <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(147,197,253,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(147,197,253,.1)_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute left-[24%] top-[18%] h-[56%] w-[47%] rounded-lg border border-blue-300/60" />
        <div className="absolute left-[32%] top-[29%] h-2 w-2 rounded-full bg-blue-200 shadow-[0_0_20px_7px_rgba(96,165,250,.55)]" />
        <div className="absolute right-5 top-5 rounded-md border border-blue-300/20 bg-blue-400/10 px-2 py-1 text-[8px] font-medium uppercase tracking-wider text-blue-200">
          Live inference
        </div>
      </div>
    );
  }

  if (id === "orbit") {
    return (
      <div className="relative h-full overflow-hidden bg-[#0e1018]">
        <div className="absolute inset-x-7 top-6 h-8 rounded-lg border border-white/10 bg-white/[.045]" />
        <div className="absolute bottom-7 left-7 top-[4.1rem] w-[28%] rounded-lg border border-white/[.07] bg-white/[.025]" />
        <div className="absolute bottom-7 left-[35%] right-7 top-[4.1rem] grid grid-cols-2 gap-2.5">
          <div className="rounded-lg border border-blue-300/15 bg-blue-400/[.09]" />
          <div className="rounded-lg border border-white/[.07] bg-white/[.025]" />
          <div className="col-span-2 rounded-lg border border-white/[.07] bg-white/[.025] p-3">
            <div className={`h-1.5 w-1/2 rounded-full bg-gradient-to-r ${accent}`} />
            <div className="mt-3 h-1.5 w-[78%] rounded-full bg-white/10" />
            <div className="mt-2 h-1.5 w-[52%] rounded-full bg-white/[.07]" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-full overflow-hidden bg-[#0c1015]">
      <div className="absolute left-7 right-7 top-7 rounded-lg border border-white/[.09] bg-[#11141b] p-3 font-mono text-[9px] leading-relaxed text-zinc-400">
        <p>
          <span className="text-blue-300">POST</span>{" "}
          <span className="text-zinc-200">/v1/signals</span>
        </p>
        <p className="mt-2 text-zinc-600">
          &#123; <span className="text-blue-200">status</span>:{" "}
          <span className="text-emerald-300">&quot;accepted&quot;</span> &#125;
        </p>
      </div>
      <div className="absolute bottom-7 left-7 right-7 flex items-end gap-1.5">
        {["h-10", "h-16", "h-7", "h-20", "h-12"].map((height, index) => (
          <div
            key={index}
            className={`${height} flex-1 rounded-t bg-blue-400/${index === 3 ? "70" : "35"}`}
          />
        ))}
      </div>
    </div>
  );
}
