import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DISHES, getDish } from "@repo/kali-core";
import { DisclaimerBanner } from "@/components/disclaimer-banner";
import { MealCalculator } from "@/components/meal-calculator";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return DISHES.map((dish) => ({ id: dish.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  return { title: getDish(id)?.nameVi ?? "Món ăn" };
}

export default async function DishDetailPage({ params }: Props) {
  const { id } = await params;
  const dish = getDish(id);
  if (!dish) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-6xl space-y-6 px-4 py-10">
      <Link href="/mon-an" className="text-sm text-moss">
        ← Tất cả món
      </Link>
      <header>
        <p className="text-sm text-moss">{dish.regionNote}</p>
        <h1 className="font-[family-name:var(--font-display)] text-4xl text-moss-deep">
          {dish.nameVi}
        </h1>
        <p className="mt-3 max-w-2xl">{dish.summaryVi}</p>
      </header>
      <DisclaimerBanner />
      <MealCalculator initialLines={dish.lines} />
    </div>
  );
}
