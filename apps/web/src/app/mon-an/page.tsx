import type { Metadata } from "next";
import Link from "next/link";
import { DISHES, calculateMealPotassium } from "@repo/kali-core";

export const metadata: Metadata = {
  title: "Món ăn",
};

export default function DishesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="font-[family-name:var(--font-display)] text-4xl text-moss-deep">Món phổ biến</h1>
      <p className="mt-3 max-w-2xl opacity-80">
        Các món dùng nguồn giàu Kali. Số mg là ước lượng theo định lượng mẫu — nhà bếp thực tế sẽ khác.
      </p>
      <ul className="mt-8 grid gap-4 md:grid-cols-2">
        {DISHES.map((dish) => {
          const total = calculateMealPotassium(dish.lines).totalPotassiumMg;
          return (
            <li key={dish.id}>
              <Link
                href={`/mon-an/${dish.id}`}
                className="block rounded-3xl border border-line bg-card p-5 hover:border-moss"
              >
                <p className="text-xs text-moss">{dish.regionNote}</p>
                <h2 className="font-[family-name:var(--font-display)] text-2xl">{dish.nameVi}</h2>
                <p className="mt-2 text-sm opacity-80">{dish.summaryVi}</p>
                <p className="mt-3 font-semibold">{Math.round(total)} mg Kali / khẩu phần mẫu</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
