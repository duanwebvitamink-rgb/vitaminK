import type { Condition } from "./types";

export const CONDITIONS: Condition[] = [
  {
    id: "benh-than-man",
    nameVi: "Bệnh thận mạn (CKD)",
    potassiumIssue: "hyperkalemia_risk",
    summaryVi:
      "KDIGO 2024: không hạn chế Kali trong ăn uống một cách thường quy ở người CKD nếu Kali máu bình thường. Hạn chế hoặc đổi cách chế biến khi có tăng Kali máu, giảm mức lọc cầu thận nặng, hoặc thuốc giữ Kali.",
    dietGuidanceVi: [
      "Ưu tiên theo dõi Kali máu, chứ không cắt hết thực phẩm giàu Kali nếu xét nghiệm ổn.",
      "Khi bác sĩ yêu cầu hạn chế: chọn luộc chắt nước, hạn chế nước dừa, chuối, bơ, khoai nướng.",
      "Ngâm + luộc hai lần với củ (khoai tây) có thể giảm Kali còn lại.",
      "Phối hợp với thuốc ACEI/ARB/ARNI/MRA — không tự ngừng thuốc.",
    ],
    relatedMedicineIds: [
      "enalapril-10",
      "losartan-50",
      "spironolactone-25",
      "entresto-100",
      "furosemide-40",
      "kalimate",
    ],
    sourceIds: ["kdigo-ckd-2024", "bytvn-ckd"],
  },
  {
    id: "tang-kali-mau",
    nameVi: "Tăng Kali máu (hyperkalemia)",
    potassiumIssue: "hyperkalemia_risk",
    summaryVi:
      "Là cấp cứu điện giải khi Kali máu cao, đặc biệt nếu có thay đổi ECG. Chế độ ăn chỉ là một phần; thuốc giữ Kali và suy thận thường quan trọng hơn.",
    dietGuidanceVi: [
      "Tạm thời hạn chế thực phẩm và đồ uống giàu Kali theo hướng dẫn điều trị.",
      "Tránh muối thay thế chứa Kali clorua nếu không được kê.",
      "Không tự uống viên Kali (Slow-K, Kaleorid, Panangin) khi đang tăng Kali.",
    ],
    relatedMedicineIds: [
      "spironolactone-25",
      "enalapril-10",
      "cotrimoxazole",
      "kalimate",
      "kcl-600",
    ],
    sourceIds: ["kdigo-ckm-2025", "kdigo-ckd-2024"],
  },
  {
    id: "ha-kali-mau",
    nameVi: "Hạ Kali máu (hypokalemia)",
    potassiumIssue: "hypokalemia_risk",
    summaryVi:
      "Thường gặp khi dùng lợi tiểu quai/thiazide, tiêu chảy, hoặc kiềm chuyển hóa. Hạ Kali làm tăng độc tính digoxin và loạn nhịp.",
    dietGuidanceVi: [
      "Tăng thực phẩm giàu Kali (chuối, khoai, rau xanh, nước dừa) khi bác sĩ cho phép.",
      "Bù Kali bằng thuốc chỉ theo toa — không tự truyền KCl.",
      "Kiểm tra magie: thiếu magie làm khó giữ Kali.",
    ],
    relatedMedicineIds: ["furosemide-40", "hctz-25", "indapamide-15", "kcl-600", "digoxin-025"],
    sourceIds: ["esc-htn-2024", "aha-hf-2022"],
  },
  {
    id: "suy-tim",
    nameVi: "Suy tim",
    potassiumIssue: "both",
    summaryVi:
      "AHA/ACC/HFSA 2022: nền tảng thuốc gồm ACEI/ARB/ARNI + MRA — vừa cứu sống vừa tăng nguy cơ tăng Kali. Lợi tiểu quai có thể gây hạ Kali.",
    dietGuidanceVi: [
      "Không tự ý ăn kiêng Kali cực đoan: có thể làm hạ Kali khi đang lợi tiểu.",
      "Theo dõi Kali khi chỉnh liều Entresto, spironolactone, enalapril.",
      "Hạn chế muối; cẩn thận muối 'giảm natri' có Kali.",
    ],
    relatedMedicineIds: [
      "entresto-100",
      "spironolactone-25",
      "enalapril-10",
      "furosemide-40",
      "digoxin-025",
    ],
    sourceIds: ["aha-hf-2022", "bytvn-thn"],
  },
  {
    id: "tang-huyet-ap",
    nameVi: "Tăng huyết áp",
    potassiumIssue: "monitor",
    summaryVi:
      "WHO khuyến cáo tăng Kali ăn uống ở dân số chung để hỗ trợ huyết áp, trừ khi có CKD/tăng Kali. ESC/VNHA: lợi tiểu và ức chế RAAS đều ảnh hưởng Kali.",
    dietGuidanceVi: [
      "Người huyết áp, thận bình thường: rau quả giàu Kali thường có lợi (DASH).",
      "Nếu đang ACEI/ARB + spironolactone: không tự bổ sung Kali.",
      "Indapamide/HCTZ có thể làm hạ Kali — theo dõi.",
    ],
    relatedMedicineIds: [
      "perindopril-5",
      "amlodipine-note",
      "losartan-50",
      "indapamide-15",
      "hctz-25",
    ],
    sourceIds: ["who-potassium", "esc-htn-2024", "bytvn-thn"],
  },
  {
    id: "dai-thao-duong-than",
    nameVi: "Đái tháo đường có bệnh thận",
    potassiumIssue: "hyperkalemia_risk",
    summaryVi:
      "Bệnh thận đái tháo đường làm giảm bài tiết Kali. ACEI/ARB liều đích bảo vệ thận nhưng tăng Kali. Insulin đưa Kali vào tế bào, có thể che tăng Kali mạn.",
    dietGuidanceVi: [
      "Không cắt hết Kali nếu HbA1c/Kali máu ổn — cá thể hóa.",
      "Cẩn nước dừa, trái cây cô đặc, nước ép.",
      "Nhịn ăn + insulin có thể gây hạ Kali cấp.",
    ],
    relatedMedicineIds: ["irbesartan-150", "enalapril-10", "insulin-human", "cotrimoxazole"],
    sourceIds: ["kdigo-ckd-2024"],
  },
  {
    id: "suy-thuong-than",
    nameVi: "Suy thượng thận / Addison",
    potassiumIssue: "hyperkalemia_risk",
    summaryVi:
      "Thiếu aldosterone làm giữ Kali và mất natri. Cần hormone thay thế, không chỉ ăn kiêng.",
    dietGuidanceVi: [
      "Tránh bổ sung Kali và muối thay thế chứa KCl.",
      "Khi khủng hoảng Addison: xử trí cấp cứu, không tự điều chỉnh ăn.",
    ],
    relatedMedicineIds: ["spironolactone-25", "kcl-600"],
    sourceIds: ["kdigo-ckm-2025"],
  },
  {
    id: "loc-mau",
    nameVi: "Đang lọc máu (thận nhân tạo / phúc mạc)",
    potassiumIssue: "hyperkalemia_risk",
    summaryVi:
      "Kali ăn vào giữa hai ca lọc có thể tích tụ. Cách chế biến (chắt nước luộc) thường được dinh dưỡng thận hướng dẫn, nhưng thực đơn phải do khoa thận chỉ định.",
    dietGuidanceVi: [
      "Hạn chế chuối, bơ, nước dừa, khoai chiên/nướng, nước luộc rau.",
      "Luộc rau/củ, chắt nước; không dùng nước đó nấu canh.",
      "Không bỏ bữa lọc; Kali cao liên quan loạn nhịp.",
    ],
    relatedMedicineIds: ["kalimate", "kcl-600", "digoxin-025"],
    sourceIds: ["bytvn-ckd", "nni-renal-k"],
  },
];

export function getCondition(id: string): Condition | undefined {
  return CONDITIONS.find((item) => item.id === id);
}
