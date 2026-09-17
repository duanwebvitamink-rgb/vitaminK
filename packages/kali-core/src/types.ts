export type FoodCategory =
  | "rau"
  | "cu"
  | "qua"
  | "dau"
  | "ngu-coc"
  | "thit"
  | "ca"
  | "sua"
  | "hat"
  | "gia-vi"
  | "do-uong";

export type CookingMethodId =
  | "raw"
  | "boiled_drained"
  | "boiled_with_liquid"
  | "steamed"
  | "stir_fried"
  | "deep_fried"
  | "roasted"
  | "grilled"
  | "microwaved"
  | "soaked_double_boiled";

export type PotassiumEffect =
  | "increase"
  | "decrease"
  | "shift_into_cells"
  | "caution_both";

export type ConditionPotassiumIssue =
  | "hyperkalemia_risk"
  | "hypokalemia_risk"
  | "both"
  | "monitor";

export type Ingredient = {
  id: string;
  nameVi: string;
  nameEn: string;
  category: FoodCategory;
  potassiumMgPer100gRaw: number;
  typicalServingG: number;
  notesVi: string;
  sourceIds: string[];
};

export type CookingMethod = {
  id: CookingMethodId;
  nameVi: string;
  summaryVi: string;
};

export type CookingProfile = {
  retention: number;
  yield: number;
};

export type MealLine = {
  ingredientId: string;
  cookingMethodId: CookingMethodId;
  gramsRaw: number;
};

export type Dish = {
  id: string;
  nameVi: string;
  regionNote: string;
  summaryVi: string;
  lines: MealLine[];
};

export type Condition = {
  id: string;
  nameVi: string;
  potassiumIssue: ConditionPotassiumIssue;
  summaryVi: string;
  dietGuidanceVi: string[];
  relatedMedicineIds: string[];
  sourceIds: string[];
};

export type Medicine = {
  id: string;
  inn: string;
  innVi: string;
  strength: string;
  formVi: string;
  tradeNamesVn: string[];
  potassiumEffect: PotassiumEffect;
  mechanismVi: string;
  adviceVi: string;
  relatedConditionIds: string[];
  sourceIds: string[];
};

export type Citation = {
  id: string;
  title: string;
  org: string;
  year: string;
  url?: string;
  noteVi: string;
};

export type PotassiumResult = {
  potassiumMg: number;
  cookedWeightG: number;
  mgPer100gCooked: number;
  retention: number;
  yield: number;
};
