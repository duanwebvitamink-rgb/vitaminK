import { getCookingProfile } from "./cooking";
import { requireIngredient } from "./ingredients";
import type { CookingMethodId, MealLine, PotassiumResult } from "./types";

function round1(value: number): number {
  return Math.round(value * 10) / 10;
}

export function calculateLinePotassium(line: MealLine): PotassiumResult {
  if (line.gramsRaw < 0) {
    throw new Error("gramsRaw must be >= 0");
  }

  const ingredient = requireIngredient(line.ingredientId);
  const profile = getCookingProfile(ingredient.category, line.cookingMethodId);
  const potassiumMg =
    (line.gramsRaw / 100) * ingredient.potassiumMgPer100gRaw * profile.retention;
  const cookedWeightG = line.gramsRaw * profile.yield;
  const mgPer100gCooked =
    cookedWeightG === 0 ? 0 : (potassiumMg / cookedWeightG) * 100;

  return {
    potassiumMg: round1(potassiumMg),
    cookedWeightG: round1(cookedWeightG),
    mgPer100gCooked: round1(mgPer100gCooked),
    retention: profile.retention,
    yield: profile.yield,
  };
}

export function calculateMealPotassium(lines: MealLine[]): {
  totalPotassiumMg: number;
  lines: Array<MealLine & PotassiumResult & { nameVi: string }>;
} {
  const detailed = lines.map((line) => {
    const result = calculateLinePotassium(line);
    return {
      ...line,
      ...result,
      nameVi: requireIngredient(line.ingredientId).nameVi,
    };
  });

  const totalPotassiumMg = round1(
    detailed.reduce((sum, line) => sum + line.potassiumMg, 0),
  );

  return { totalPotassiumMg, lines: detailed };
}

export function compareCookingMethods(ingredientId: string, gramsRaw: number) {
  const methods: CookingMethodId[] = [
    "raw",
    "boiled_drained",
    "boiled_with_liquid",
    "steamed",
    "stir_fried",
    "deep_fried",
    "roasted",
    "grilled",
    "microwaved",
    "soaked_double_boiled",
  ];

  return methods.map((cookingMethodId) => ({
    cookingMethodId,
    ...calculateLinePotassium({ ingredientId, cookingMethodId, gramsRaw }),
  }));
}

export function potassiumBand(totalMg: number): {
  id: "low" | "moderate" | "high";
  labelVi: string;
  detailVi: string;
} {
  if (totalMg < 800) {
    return {
      id: "low",
      labelVi: "Thấp–trung bình cho một bữa",
      detailVi:
        "Thường phù hợp khi đang hạn chế Kali theo chỉ định, nhưng cả ngày mới quyết định đủ/thiếu.",
    };
  }
  if (totalMg < 1500) {
    return {
      id: "moderate",
      labelVi: "Trung bình cho một bữa",
      detailVi:
        "Mức gặp ở nhiều bữa Việt Nam. Người bệnh thận/tim cần cộng với thuốc và Kali máu.",
    };
  }
  return {
    id: "high",
    labelVi: "Cao cho một bữa",
    detailVi:
      "Nhiều thực phẩm giàu Kali hoặc ăn cả nước luộc/canh. Cần rà soát nếu có tăng Kali máu.",
  };
}
