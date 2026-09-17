import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  COOKING_METHODS,
  INGREDIENTS,
  compareCookingMethods,
  getIngredient,
} from "@repo/kali-core";
import { DisclaimerBanner } from "@/components/disclaimer-banner";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return INGREDIENTS.map((ingredient) => ({ id: ingredient.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const ingredient = getIngredient(id);
  return { title: ingredient?.nameVi ?? "Nguyên liệu" };
}

export default async function IngredientDetailPage({ params }: Props) {
  const { id } = await params;
  const ingredient = getIngredient(id);
  if (!ingredient) {
    notFound();
  }

  const comparisons = compareCookingMethods(ingredient.id, 100);

  return (
    <div className="mx-auto max-w-6xl space-y-6 px-4 py-10">
      <Link href="/nguyen-lieu" className="text-sm text-moss">
        ← Tất cả nguyên liệu
      </Link>
      <header>
        <h1 className="font-[family-name:var(--font-display)] text-4xl text-moss-deep">
          {ingredient.nameVi}
        </h1>
        <p className="opacity-70">{ingredient.nameEn}</p>
        <p className="mt-3 max-w-2xl">{ingredient.notesVi}</p>
      </header>
      <DisclaimerBanner />
      <p className="text-sm">
        Bảng dưới đây so sánh <strong>100 g sống</strong> của cùng nguyên liệu. Cột “mg/100 g
        chín” phản ánh cô đặc do mất nước (xào, chiên, nướng).
      </p>
      <div className="overflow-x-auto rounded-3xl border border-line bg-card">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-line bg-paper">
            <tr>
              <th className="px-4 py-3">Cách chế biến</th>
              <th className="px-4 py-3">Kali còn lại (mg)</th>
              <th className="px-4 py-3">Khối lượng chín (g)</th>
              <th className="px-4 py-3">mg / 100 g chín</th>
              <th className="px-4 py-3">Giữ lại</th>
            </tr>
          </thead>
          <tbody>
            {comparisons.map((row) => {
              const method = COOKING_METHODS.find((item) => item.id === row.cookingMethodId);
              return (
                <tr key={row.cookingMethodId} className="border-b border-line last:border-0">
                  <td className="px-4 py-3">{method?.nameVi}</td>
                  <td className="px-4 py-3 font-semibold">{row.potassiumMg}</td>
                  <td className="px-4 py-3">{row.cookedWeightG}</td>
                  <td className="px-4 py-3">{row.mgPer100gCooked}</td>
                  <td className="px-4 py-3">{Math.round(row.retention * 100)}%</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
