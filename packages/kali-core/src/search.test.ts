import { describe, expect, it } from "vitest";
import { CONDITIONS } from "./conditions";
import { DISHES } from "./dishes";
import { INGREDIENTS, requireIngredient } from "./ingredients";
import { MEDICINES } from "./medicines";
import { matchesQuery, searchByText } from "./search";
import { CITATIONS } from "./sources";

describe("catalog integrity", () => {
  it("references existing ingredients in dishes", () => {
    for (const dish of DISHES) {
      for (const line of dish.lines) {
        expect(() => requireIngredient(line.ingredientId)).not.toThrow();
      }
    }
  });

  it("references existing citations and relations", () => {
    const citationIds = new Set(CITATIONS.map((item) => item.id));
    const medicineIds = new Set(MEDICINES.map((item) => item.id));
    const conditionIds = new Set(CONDITIONS.map((item) => item.id));

    for (const ingredient of INGREDIENTS) {
      for (const sourceId of ingredient.sourceIds) {
        expect(citationIds.has(sourceId)).toBe(true);
      }
    }

    for (const condition of CONDITIONS) {
      for (const medicineId of condition.relatedMedicineIds) {
        expect(medicineIds.has(medicineId)).toBe(true);
      }
    }

    for (const medicine of MEDICINES) {
      for (const conditionId of medicine.relatedConditionIds) {
        expect(conditionIds.has(conditionId)).toBe(true);
      }
    }
  });

  it("matches Vietnamese search without accents", () => {
    expect(matchesQuery("Khoai tây", "khoai tay")).toBe(true);
    const found = searchByText(INGREDIENTS, "nuoc dua", (item) => [
      item.nameVi,
      item.nameEn,
    ]);
    expect(found.map((item) => item.id)).toContain("nuoc-dua");
  });
});
