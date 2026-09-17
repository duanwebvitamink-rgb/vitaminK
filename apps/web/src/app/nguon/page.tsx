import type { Metadata } from "next";
import { CITATIONS } from "@repo/kali-core";
import { DisclaimerBanner } from "@/components/disclaimer-banner";

export const metadata: Metadata = {
  title: "Nguồn và khuyến cáo",
};

export default function SourcesPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6 px-4 py-10">
      <h1 className="font-[family-name:var(--font-display)] text-4xl text-moss-deep">
        Nguồn dữ liệu
      </h1>
      <DisclaimerBanner />
      <p>
        Kali thực phẩm là ước lượng (làm tròn) để so sánh cách chế biến, không phải phân tích
        phòng thí nghiệm từng bữa. Thuốc liệt kê để bệnh nhân đối chiếu hộp đang dùng; danh mục
        đăng ký của Cục Quản lý Dược thay đổi theo thời gian.
      </p>
      <ol className="space-y-4">
        {CITATIONS.map((citation) => (
          <li key={citation.id} className="rounded-2xl border border-line bg-card p-4">
            <p className="text-sm text-moss">{citation.org} · {citation.year}</p>
            <h2 className="font-semibold">{citation.title}</h2>
            <p className="text-sm opacity-80">{citation.noteVi}</p>
            {citation.url ? (
              <a href={citation.url} className="text-sm text-clay underline" target="_blank" rel="noreferrer">
                Mở nguồn
              </a>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}
