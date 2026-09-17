"use client";

import {
  COOKING_METHODS,
  INGREDIENTS,
  calculateMealPotassium,
  searchByText,
  type CookingMethodId,
  type MealLine,
} from "@repo/kali-core";
import { useMemo, useState } from "react";
import { PotassiumStat } from "./potassium-stat";

type DraftLine = MealLine & { key: string };

function newLine(): DraftLine {
  return {
    key: crypto.randomUUID(),
    ingredientId: "khoai-tay",
    cookingMethodId: "boiled_drained",
    gramsRaw: 100,
  };
}

export function MealCalculator({ initialLines }: { initialLines?: MealLine[] }) {
  const [query, setQuery] = useState("");
  const [lines, setLines] = useState<DraftLine[]>(() =>
    (initialLines ?? [newLine()]).map((line) => ({
      ...line,
      key: crypto.randomUUID(),
    })),
  );

  const filtered = searchByText(INGREDIENTS, query, (item) => [
    item.nameVi,
    item.nameEn,
    item.id,
  ]);

  const meal = useMemo(
    () =>
      calculateMealPotassium(
        lines.map(({ ingredientId, cookingMethodId, gramsRaw }) => ({
          ingredientId,
          cookingMethodId,
          gramsRaw: Number(gramsRaw) || 0,
        })),
      ),
    [lines],
  );

  function update(key: string, patch: Partial<MealLine>) {
    setLines((current) =>
      current.map((line) => (line.key === key ? { ...line, ...patch } : line)),
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
      <section className="rounded-3xl border border-line bg-card p-5 shadow-sm">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-2xl">Ghép bữa ăn</h2>
            <p className="text-sm opacity-80">
              Khối lượng là nguyên liệu sống/ăn được. Cách chế biến đổi lượng Kali giữ lại.
            </p>
          </div>
          <button
            type="button"
            className="rounded-full bg-moss px-4 py-2 text-sm text-white"
            onClick={() => setLines((current) => [...current, newLine()])}
          >
            Thêm nguyên liệu
          </button>
        </div>

        <label className="mb-2 block text-sm">
          Tìm nhanh nguyên liệu
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Ví dụ: khoai, chuoi, nuoc dua"
            className="mt-1 w-full rounded-xl border border-line bg-paper px-3 py-2"
          />
        </label>
        {query ? (
          <div className="mb-4 flex flex-wrap gap-2">
            {filtered.slice(0, 8).map((ingredient) => (
              <button
                key={ingredient.id}
                type="button"
                className="rounded-full border border-line px-3 py-1 text-xs"
                onClick={() =>
                  setLines((current) => [
                    ...current,
                    {
                      key: crypto.randomUUID(),
                      ingredientId: ingredient.id,
                      cookingMethodId: "raw",
                      gramsRaw: ingredient.typicalServingG,
                    },
                  ])
                }
              >
                + {ingredient.nameVi}
              </button>
            ))}
          </div>
        ) : null}

        <div className="space-y-4">
          {lines.map((line) => (
            <div
              key={line.key}
              className="grid gap-3 rounded-2xl border border-line p-3 md:grid-cols-[1.3fr_1fr_0.6fr_auto]"
            >
              <select
                value={line.ingredientId}
                onChange={(event) => update(line.key, { ingredientId: event.target.value })}
                className="rounded-xl border border-line bg-white px-3 py-2"
              >
                {INGREDIENTS.map((ingredient) => (
                  <option key={ingredient.id} value={ingredient.id}>
                    {ingredient.nameVi}
                  </option>
                ))}
              </select>
              <select
                value={line.cookingMethodId}
                onChange={(event) =>
                  update(line.key, {
                    cookingMethodId: event.target.value as CookingMethodId,
                  })
                }
                className="rounded-xl border border-line bg-white px-3 py-2"
              >
                {COOKING_METHODS.map((method) => (
                  <option key={method.id} value={method.id}>
                    {method.nameVi}
                  </option>
                ))}
              </select>
              <input
                type="number"
                min={0}
                step={5}
                value={line.gramsRaw}
                onChange={(event) =>
                  update(line.key, { gramsRaw: Number(event.target.value) })
                }
                className="rounded-xl border border-line bg-white px-3 py-2"
                aria-label="Gram sống"
              />
              <button
                type="button"
                className="text-sm text-clay"
                onClick={() =>
                  setLines((current) => current.filter((item) => item.key !== line.key))
                }
              >
                Xóa
              </button>
            </div>
          ))}
        </div>
      </section>

      <aside className="space-y-4">
        <PotassiumStat mg={meal.totalPotassiumMg} label="Kali cả bữa (ước lượng)" />
        <ul className="rounded-3xl border border-line bg-card p-5 text-sm">
          {meal.lines.map((line, index) => (
            <li key={`${line.ingredientId}-${index}`} className="flex justify-between gap-3 border-b border-line py-2 last:border-0">
              <span>
                {line.nameVi}
                <span className="block text-xs opacity-70">{line.gramsRaw} g sống</span>
              </span>
              <strong>{line.potassiumMg} mg</strong>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
