import type { Metadata } from "next";
import Link from "next/link";
import { CONDITIONS } from "@repo/kali-core";

export const metadata: Metadata = {
  title: "Bệnh lý và Kali",
};

const issueLabel = {
  hyperkalemia_risk: "Nguy cơ tăng Kali",
  hypokalemia_risk: "Nguy cơ hạ Kali",
  both: "Cả tăng và hạ",
  monitor: "Theo dõi",
};

export default function ConditionsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="font-[family-name:var(--font-display)] text-4xl text-moss-deep">
        Bệnh cần chú ý liều Kali
      </h1>
      <p className="mt-3 max-w-2xl opacity-80">
        Tóm tắt theo KDIGO, AHA/ACC/HFSA, ESC, WHO và hướng dẫn Bộ Y tế / hội chuyên khoa Việt
        Nam. Đây không phải phác đồ điều trị cá nhân.
      </p>
      <ul className="mt-8 grid gap-4 md:grid-cols-2">
        {CONDITIONS.map((condition) => (
          <li key={condition.id}>
            <Link
              href={`/benh-ly/${condition.id}`}
              className="block rounded-3xl border border-line bg-card p-5 hover:border-moss"
            >
              <p className="text-xs uppercase tracking-wide text-clay">
                {issueLabel[condition.potassiumIssue]}
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-2xl">{condition.nameVi}</h2>
              <p className="mt-2 line-clamp-3 text-sm opacity-80">{condition.summaryVi}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
