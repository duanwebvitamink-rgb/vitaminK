import type { Citation } from "./types";

export const CITATIONS: Citation[] = [
  {
    id: "usda-fdc",
    title: "FoodData Central",
    org: "U.S. Department of Agriculture",
    year: "2024",
    url: "https://fdc.nal.usda.gov/",
    noteVi:
      "Hàm lượng Kali/100 g nguyên liệu tham chiếu (giá trị điển hình, làm tròn).",
  },
  {
    id: "usda-nrf",
    title: "USDA Table of Nutrient Retention Factors, Release 6",
    org: "USDA",
    year: "2007",
    url: "https://www.ars.usda.gov/northeast-area/beltsville-md-bhnrc/beltsville-human-nutrition-research-center/methods-and-application-of-food-composition-laboratory/mafcl-site-pages/nutrient-retention-information/",
    noteVi:
      "Hệ số giữ lại chất dinh dưỡng khi chế biến; Kali tan mạnh trong nước luộc.",
  },
  {
    id: "vndn-fct",
    title: "Bảng thành phần thực phẩm Việt Nam",
    org: "Viện Dinh dưỡng — Bộ Y tế",
    year: "2007/cập nhật",
    noteVi:
      "Đối chiếu tên thực phẩm địa phương; khi thiếu số liệu dùng USDA gần đúng.",
  },
  {
    id: "kdigo-ckd-2024",
    title: "KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease",
    org: "KDIGO",
    year: "2024",
    url: "https://kdigo.org/guidelines/ckd-evaluation-and-management/",
    noteVi:
      "Không hạn chế Kali thường quy ở CKD nếu Kali máu bình thường; cá thể hóa khi tăng Kali.",
  },
  {
    id: "kdigo-ckm-2025",
    title: "KDIGO guideline on chronic kidney disease–mineral and related electrolyte care (hyperkalemia practice)",
    org: "KDIGO / Kidney International summaries",
    year: "2024–2025",
    noteVi: "Nguyên tắc xử trí tăng Kali máu, thuốc giữ Kali và nhựa gắn Kali.",
  },
  {
    id: "aha-hf-2022",
    title: "AHA/ACC/HFSA Guideline for the Management of Heart Failure",
    org: "American Heart Association / ACC / HFSA",
    year: "2022",
    url: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000001063",
    noteVi: "ACEI/ARB/ARNI/MRA và theo dõi Kali, chức năng thận.",
  },
  {
    id: "esc-htn-2024",
    title: "ESC Guidelines for the management of elevated blood pressure and hypertension",
    org: "European Society of Cardiology",
    year: "2024",
    noteVi: "Lợi tiểu, ức chế trục RAAS và rối loạn Kali.",
  },
  {
    id: "who-potassium",
    title: "Guideline: Potassium intake for adults and children",
    org: "World Health Organization",
    year: "2012",
    url: "https://www.who.int/publications/i/item/9789241504829",
    noteVi: "Khuyến cáo tăng Kali ăn uống ở dân số chung (≥90 mmol/ngày, ~3510 mg) khi không có chống chỉ định.",
  },
  {
    id: "bytvn-ckd",
    title: "Hướng dẫn chẩn đoán và điều trị bệnh thận mạn",
    org: "Bộ Y tế Việt Nam",
    year: "2015–cập nhật khoa điều trị",
    noteVi:
      "Khung lâm sàng CKD tại Việt Nam; chế độ ăn và thuốc phải theo bác sĩ điều trị.",
  },
  {
    id: "bytvn-thn",
    title: "Hướng dẫn chẩn đoán và điều trị tăng huyết áp",
    org: "Bộ Y tế / Hội Tim mạch học Việt Nam (VNHA)",
    year: "2022+",
    noteVi: "Thuốc hạ áp phổ biến tại VN và theo dõi điện giải.",
  },
  {
    id: "dav-vn",
    title: "Cơ sở dữ liệu thuốc được cấp số đăng ký — Cục Quản lý Dược",
    org: "Cục Quản lý Dược (DAV), Bộ Y tế Việt Nam",
    year: "tra cứu",
    url: "https://dav.gov.vn/",
    noteVi:
      "Biệt dược trong app là nhóm thường gặp tại VN (tham khảo Dược thư Quốc gia / tờ HDSD). Người dùng đối chiếu hộp thuốc; số đăng ký có thể đổi theo lô.",
  },
  {
    id: "nni-renal-k",
    title: "Leaching methods to reduce potassium in tubers (renal diet literature)",
    org: "Journal of Renal Nutrition / dietetic practice reviews",
    year: "2008–2019",
    noteVi: "Ngâm và luộc hai lần giảm Kali củ; hiệu quả phụ thuộc cắt lát, thời gian, tỉ lệ nước.",
  },
];

export function getCitation(id: string): Citation | undefined {
  return CITATIONS.find((item) => item.id === id);
}
