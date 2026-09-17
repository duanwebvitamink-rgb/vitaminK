import type { Metadata } from "next";
import { COOKING_METHODS } from "@repo/kali-core";
import { DisclaimerBanner } from "@/components/disclaimer-banner";
import { MealCalculator } from "@/components/meal-calculator";

export const metadata: Metadata = {
  title: "Tính Kali bữa ăn",
};

export default function MealPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-10">
      <header className="max-w-2xl">
        <h1 className="font-[family-name:var(--font-display)] text-4xl text-moss-deep">
          Máy tính Kali theo chế biến
        </h1>
        <p className="mt-3 opacity-80">
          Công thức: Kali ≈ (gram sống / 100) × Kali/100 g × hệ số giữ lại. Khối lượng chín
          dùng hệ số yield để ra mg/100 g sau nấu.
        </p>
      </header>
      <DisclaimerBanner />
      <MealCalculator />
      <section>
        <h2 className="font-[family-name:var(--font-display)] text-2xl">Các cách chế biến</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {COOKING_METHODS.map((method) => (
            <article key={method.id} className="rounded-2xl border border-line bg-card p-4">
              <h3 className="font-semibold">{method.nameVi}</h3>
              <p className="text-sm opacity-80">{method.summaryVi}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
