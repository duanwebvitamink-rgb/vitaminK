import type { Metadata } from "next";
import Link from "next/link";
import { INGREDIENTS } from "@repo/kali-core";

export const metadata: Metadata = {
  title: "Nguyên liệu",
};

export default function IngredientsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="font-[family-name:var(--font-display)] text-4xl text-moss-deep">
        Nguyên liệu giàu Kali
      </h1>
      <p className="mt-3 max-w-2xl opacity-80">
        Chọn một nguyên liệu để xem Kali còn lại sau từng cách nấu. Giá trị sống là mg/100 g.
      </p>
      <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {INGREDIENTS.map((ingredient) => (
          <li key={ingredient.id}>
            <Link
              href={`/nguyen-lieu/${ingredient.id}`}
              className="block rounded-2xl border border-line bg-card p-4 hover:border-moss"
            >
              <p className="text-xs uppercase tracking-wide text-moss">{ingredient.category}</p>
              <h2 className="font-semibold">{ingredient.nameVi}</h2>
              <p className="text-sm opacity-70">{ingredient.potassiumMgPer100gRaw} mg / 100 g sống</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
