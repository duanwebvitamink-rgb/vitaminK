import { potassiumBand } from "@repo/kali-core";

export function PotassiumStat({ mg, label }: { mg: number; label?: string }) {
  const band = potassiumBand(mg);
  const tone =
    band.id === "low"
      ? "bg-emerald-50 text-moss-deep"
      : band.id === "moderate"
        ? "bg-amber-50 text-amber-950"
        : "bg-orange-50 text-clay";

  return (
    <div className={`rounded-2xl px-4 py-3 ${tone}`}>
      <p className="text-xs uppercase tracking-wide opacity-70">{label ?? "Tổng Kali"}</p>
      <p className="font-[family-name:var(--font-display)] text-3xl">{Math.round(mg)} mg</p>
      <p className="text-sm">{band.labelVi}</p>
    </div>
  );
}
