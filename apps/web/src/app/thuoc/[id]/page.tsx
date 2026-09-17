import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MEDICINES, getCitation, getCondition, getMedicine } from "@repo/kali-core";
import { DisclaimerBanner } from "@/components/disclaimer-banner";

type Props = { params: Promise<{ id: string }> };

const effectLabel = {
  increase: "Có thể tăng Kali máu",
  decrease: "Có thể hạ Kali máu",
  shift_into_cells: "Đưa Kali từ máu vào tế bào (Kali huyết thanh giảm tạm thời)",
  caution_both: "Không đổi Kali trực tiếp — theo dõi hai chiều",
};

export function generateStaticParams() {
  return MEDICINES.map((medicine) => ({ id: medicine.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  return { title: getMedicine(id)?.innVi ?? "Thuốc" };
}

export default async function MedicineDetailPage({ params }: Props) {
  const { id } = await params;
  const medicine = getMedicine(id);
  if (!medicine) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl space-y-6 px-4 py-10">
      <Link href="/thuoc" className="text-sm text-moss">
        ← Tất cả thuốc
      </Link>
      <header>
        <h1 className="font-[family-name:var(--font-display)] text-4xl text-moss-deep">
          {medicine.innVi}
        </h1>
        <p className="opacity-70">{medicine.inn}</p>
      </header>
      <DisclaimerBanner />
      <dl className="grid gap-3 rounded-3xl border border-line bg-card p-5 text-sm">
        <div>
          <dt className="opacity-70">Hàm lượng</dt>
          <dd className="font-semibold">{medicine.strength}</dd>
        </div>
        <div>
          <dt className="opacity-70">Dạng bào chế</dt>
          <dd>{medicine.formVi}</dd>
        </div>
        <div>
          <dt className="opacity-70">Biệt dược / tên thương mại thường gặp tại VN</dt>
          <dd>{medicine.tradeNamesVn.join(" · ")}</dd>
        </div>
        <div>
          <dt className="opacity-70">Ảnh hưởng Kali</dt>
          <dd className="text-clay">{effectLabel[medicine.potassiumEffect]}</dd>
        </div>
      </dl>
      <section>
        <h2 className="font-[family-name:var(--font-display)] text-2xl">Cơ chế</h2>
        <p className="mt-2">{medicine.mechanismVi}</p>
      </section>
      <section>
        <h2 className="font-[family-name:var(--font-display)] text-2xl">Lưu ý khi đối chiếu toa</h2>
        <p className="mt-2">{medicine.adviceVi}</p>
      </section>
      <section>
        <h2 className="font-[family-name:var(--font-display)] text-2xl">Bệnh lý liên quan</h2>
        <ul className="mt-2 list-disc pl-5">
          {medicine.relatedConditionIds.map((conditionId) => {
            const condition = getCondition(conditionId);
            if (!condition) {
              return null;
            }
            return (
              <li key={conditionId}>
                <Link href={`/benh-ly/${condition.id}`} className="text-moss underline">
                  {condition.nameVi}
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
      <p className="text-xs opacity-70">
        Nguồn:{" "}
        {medicine.sourceIds
          .map((sourceId) => getCitation(sourceId)?.org)
          .filter(Boolean)
          .join(", ")}
      </p>
    </div>
  );
}
