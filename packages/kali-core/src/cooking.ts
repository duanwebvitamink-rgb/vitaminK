import type {
  CookingMethod,
  CookingMethodId,
  CookingProfile,
  FoodCategory,
} from "./types";

export const COOKING_METHODS: CookingMethod[] = [
  {
    id: "raw",
    nameVi: "Sống / ăn tươi",
    summaryVi:
      "Không đun nấu. Kali gần như giữ nguyên theo khối lượng nguyên liệu ăn được.",
  },
  {
    id: "boiled_drained",
    nameVi: "Luộc, chắt nước",
    summaryVi:
      "Kali tan trong nước. Chắt nước luộc làm giảm Kali còn lại trong thực phẩm — hay dùng khi cần hạn chế Kali.",
  },
  {
    id: "boiled_with_liquid",
    nameVi: "Nấu canh / hầm (ăn cả nước)",
    summaryVi:
      "Kali ra nước dùng nhưng vẫn vào bữa nếu uống canh. Tổng Kali gần bằng nguyên liệu thô.",
  },
  {
    id: "steamed",
    nameVi: "Hấp",
    summaryVi: "Ít tiếp xúc nước; giữ Kali cao hơn luộc chắt nước.",
  },
  {
    id: "stir_fried",
    nameVi: "Xào",
    summaryVi: "Mất ít Kali; khối lượng chín giảm vì mất nước nên hàm lượng/100 g có thể tăng.",
  },
  {
    id: "deep_fried",
    nameVi: "Chiên ngập dầu",
    summaryVi: "Giữ phần lớn Kali; mất nước nên Kali/100 g chín thường cao hơn sống.",
  },
  {
    id: "roasted",
    nameVi: "Nướng lò / rang",
    summaryVi: "Giữ Kali cao; cô đặc do mất nước.",
  },
  {
    id: "grilled",
    nameVi: "Nướng vỉ / than",
    summaryVi: "Tương tự nướng lò: giữ Kali, giảm khối lượng.",
  },
  {
    id: "microwaved",
    nameVi: "Vi sóng",
    summaryVi: "Thời gian ngắn, ít nước — retention Kali cao.",
  },
  {
    id: "soaked_double_boiled",
    nameVi: "Ngâm + luộc hai lần (giảm Kali)",
    summaryVi:
      "Cắt mỏng, ngâm nước, luộc, chắt, luộc lại. Tài liệu thận học mô tả giảm Kali rõ (khoảng 50–75% tùy loại củ). Không dùng cho mọi thực phẩm.",
  },
];

const DEFAULT_BY_METHOD: Record<CookingMethodId, CookingProfile> = {
  raw: { retention: 1, yield: 1 },
  boiled_drained: { retention: 0.7, yield: 0.95 },
  boiled_with_liquid: { retention: 0.97, yield: 1 },
  steamed: { retention: 0.9, yield: 0.92 },
  stir_fried: { retention: 0.95, yield: 0.8 },
  deep_fried: { retention: 0.9, yield: 0.7 },
  roasted: { retention: 0.9, yield: 0.75 },
  grilled: { retention: 0.88, yield: 0.75 },
  microwaved: { retention: 0.95, yield: 0.9 },
  soaked_double_boiled: { retention: 0.4, yield: 1 },
};

const CATEGORY_OVERRIDES: Partial<
  Record<FoodCategory, Partial<Record<CookingMethodId, CookingProfile>>>
> = {
  cu: {
    boiled_drained: { retention: 0.75, yield: 1.05 },
    soaked_double_boiled: { retention: 0.35, yield: 1 },
  },
  rau: {
    boiled_drained: { retention: 0.65, yield: 0.9 },
  },
  thit: {
    boiled_drained: { retention: 0.8, yield: 0.75 },
    roasted: { retention: 0.9, yield: 0.7 },
  },
  ca: {
    boiled_drained: { retention: 0.8, yield: 0.8 },
    grilled: { retention: 0.9, yield: 0.78 },
  },
  qua: {
    boiled_drained: { retention: 0.8, yield: 0.9 },
    soaked_double_boiled: { retention: 0.55, yield: 0.95 },
  },
  "do-uong": {
    boiled_drained: { retention: 1, yield: 1 },
    soaked_double_boiled: { retention: 1, yield: 1 },
  },
};

export function getCookingMethod(id: CookingMethodId): CookingMethod {
  const method = COOKING_METHODS.find((item) => item.id === id);
  if (!method) {
    throw new Error(`Unknown cooking method: ${id}`);
  }
  return method;
}

export function getCookingProfile(
  category: FoodCategory,
  methodId: CookingMethodId,
): CookingProfile {
  const override = CATEGORY_OVERRIDES[category]?.[methodId];
  return override ?? DEFAULT_BY_METHOD[methodId];
}
