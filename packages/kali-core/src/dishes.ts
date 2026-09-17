import type { Dish } from "./types";

export const DISHES: Dish[] = [
  {
    id: "canh-chua-ca",
    nameVi: "Canh chua cá",
    regionNote: "Nam Bộ",
    summaryVi:
      "Cà chua, thơm, giá, cá nấu chung nước — Kali ở cả cái và nước canh.",
    lines: [
      { ingredientId: "ca-basa", cookingMethodId: "boiled_with_liquid", gramsRaw: 150 },
      { ingredientId: "ca-chua", cookingMethodId: "boiled_with_liquid", gramsRaw: 120 },
      { ingredientId: "thom", cookingMethodId: "boiled_with_liquid", gramsRaw: 60 },
      { ingredientId: "gia-do", cookingMethodId: "boiled_with_liquid", gramsRaw: 50 },
    ],
  },
  {
    id: "rau-muong-xao-toi",
    nameVi: "Rau muống xào tỏi",
    regionNote: "Phổ biến cả nước",
    summaryVi: "Xào giữ Kali cao hơn luộc chắt nước.",
    lines: [
      { ingredientId: "rau-muong", cookingMethodId: "stir_fried", gramsRaw: 200 },
      { ingredientId: "toi", cookingMethodId: "stir_fried", gramsRaw: 8 },
    ],
  },
  {
    id: "khoai-lang-luoc",
    nameVi: "Khoai lang luộc",
    regionNote: "Bữa phụ",
    summaryVi: "Luộc nguyên vỏ giữ Kali hơn luộc cắt lát chắt nước.",
    lines: [
      { ingredientId: "khoai-lang", cookingMethodId: "boiled_drained", gramsRaw: 200 },
    ],
  },
  {
    id: "khoai-tay-giam-kali",
    nameVi: "Khoai tây ngâm + luộc hai lần",
    regionNote: "Biến pháp chế biến khi hạn chế Kali",
    summaryVi: "Cùng 150 g khoai tây sống nhưng Kali còn lại thấp hơn nướng.",
    lines: [
      {
        ingredientId: "khoai-tay",
        cookingMethodId: "soaked_double_boiled",
        gramsRaw: 150,
      },
    ],
  },
  {
    id: "thit-kho-tau",
    nameVi: "Thịt kho tàu",
    regionNote: "Nam Bộ / Tết",
    summaryVi: "Thịt heo hầm trong nước kho — Kali phần lớn vẫn trong món.",
    lines: [
      { ingredientId: "thit-heo-nac", cookingMethodId: "boiled_with_liquid", gramsRaw: 150 },
      { ingredientId: "nuoc-tuong", cookingMethodId: "boiled_with_liquid", gramsRaw: 12 },
    ],
  },
  {
    id: "canh-bi-do",
    nameVi: "Canh bí đỏ",
    regionNote: "Phổ biến",
    summaryVi: "Bí đỏ giàu Kali; uống hết nước canh gần như không mất Kali.",
    lines: [
      { ingredientId: "bi-do", cookingMethodId: "boiled_with_liquid", gramsRaw: 200 },
      { ingredientId: "hanh-tay", cookingMethodId: "boiled_with_liquid", gramsRaw: 30 },
    ],
  },
  {
    id: "pho-bo",
    nameVi: "Phở bò (ước lượng một tô)",
    regionNote: "Hà Nội / phổ biến",
    summaryVi: "Thịt bò + nước dùng. Chưa gồm bánh phở (Kali thấp).",
    lines: [
      { ingredientId: "thit-bo", cookingMethodId: "boiled_with_liquid", gramsRaw: 80 },
      { ingredientId: "hanh-tay", cookingMethodId: "boiled_with_liquid", gramsRaw: 20 },
    ],
  },
  {
    id: "ca-hoi-nuong",
    nameVi: "Cá hồi nướng",
    regionNote: "Món hiện đại",
    summaryVi: "Nướng giữ Kali cao.",
    lines: [
      { ingredientId: "ca-hoi", cookingMethodId: "grilled", gramsRaw: 150 },
    ],
  },
  {
    id: "salad-bo",
    nameVi: "Salad bơ cà chua",
    regionNote: "Ăn tươi",
    summaryVi: "Bơ là nguồn Kali đậm đặc.",
    lines: [
      { ingredientId: "bo", cookingMethodId: "raw", gramsRaw: 70 },
      { ingredientId: "ca-chua", cookingMethodId: "raw", gramsRaw: 100 },
    ],
  },
  {
    id: "dau-phu-sot-ca",
    nameVi: "Đậu phụ sốt cà",
    regionNote: "Chay / phổ biến",
    summaryVi: "Cà chua cô khi xào làm Kali/khẩu phần tăng.",
    lines: [
      { ingredientId: "dau-phu", cookingMethodId: "stir_fried", gramsRaw: 150 },
      { ingredientId: "ca-chua", cookingMethodId: "stir_fried", gramsRaw: 120 },
    ],
  },
  {
    id: "com-trang-chuoi",
    nameVi: "Cơm trắng + chuối tráng miệng",
    regionNote: "Bữa đơn giản",
    summaryVi: "So sánh: cơm đóng góp Kali ít hơn trái cây giàu Kali.",
    lines: [
      { ingredientId: "gao-trang", cookingMethodId: "steamed", gramsRaw: 60 },
      { ingredientId: "chuoi-chin", cookingMethodId: "raw", gramsRaw: 120 },
    ],
  },
  {
    id: "nuoc-dua-ly",
    nameVi: "Ly nước dừa 250 ml",
    regionNote: "Giải khát",
    summaryVi: "Một ly đã tương đương nhiều bữa rau luộc chắt nước.",
    lines: [
      { ingredientId: "nuoc-dua", cookingMethodId: "raw", gramsRaw: 250 },
    ],
  },
];

export function getDish(id: string): Dish | undefined {
  return DISHES.find((item) => item.id === id);
}
