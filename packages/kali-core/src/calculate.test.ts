import { describe, expect, it } from "vitest";
import {
  calculateLinePotassium,
  calculateMealPotassium,
  compareCookingMethods,
} from "./calculate";
import { getCookingProfile } from "./cooking";

describe("potassium calculation", () => {
  it("keeps full potassium for raw banana", () => {
    const result = calculateLinePotassium({
      ingredientId: "chuoi-chin",
      cookingMethodId: "raw",
      gramsRaw: 100,
    });
    expect(result.potassiumMg).toBe(358);
    expect(result.mgPer100gCooked).toBe(358);
  });

  it("reduces potassium when boiling and draining potatoes", () => {
    const raw = calculateLinePotassium({
      ingredientId: "khoai-tay",
      cookingMethodId: "raw",
      gramsRaw: 150,
    });
    const boiled = calculateLinePotassium({
      ingredientId: "khoai-tay",
      cookingMethodId: "boiled_drained",
      gramsRaw: 150,
    });
    expect(boiled.potassiumMg).toBeLessThan(raw.potassiumMg);
    expect(boiled.retention).toBe(getCookingProfile("cu", "boiled_drained").retention);
  });

  it("keeps more potassium when the boiling liquid is eaten", () => {
    const drained = calculateLinePotassium({
      ingredientId: "bi-do",
      cookingMethodId: "boiled_drained",
      gramsRaw: 200,
    });
    const soup = calculateLinePotassium({
      ingredientId: "bi-do",
      cookingMethodId: "boiled_with_liquid",
      gramsRaw: 200,
    });
    expect(soup.potassiumMg).toBeGreaterThan(drained.potassiumMg);
  });

  it("lowers potassium further with soak and double-boil", () => {
    const methods = compareCookingMethods("khoai-tay", 100);
    const roasted = methods.find((item) => item.cookingMethodId === "roasted");
    const leach = methods.find(
      (item) => item.cookingMethodId === "soaked_double_boiled",
    );
    expect(leach && roasted).toBeTruthy();
    expect(leach!.potassiumMg).toBeLessThan(roasted!.potassiumMg);
  });

  it("sums a meal", () => {
    const meal = calculateMealPotassium([
      {
        ingredientId: "rau-muong",
        cookingMethodId: "stir_fried",
        gramsRaw: 200,
      },
      { ingredientId: "toi", cookingMethodId: "stir_fried", gramsRaw: 8 },
    ]);
    expect(meal.totalPotassiumMg).toBeGreaterThan(500);
    expect(meal.lines).toHaveLength(2);
  });
});
